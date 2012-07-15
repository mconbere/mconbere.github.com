(function() {

var unique = function(arr) {
  var new_arr = [];
  for (var i = 0; i < arr.length; i++) {
    var found = false;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        found = true;
        break;
      }
    }
    if (found == false) {
      new_arr.push(arr[i]);
    }
  }
  return new_arr;
};

var Spot = function(v, x, y) {
  if (v instanceof Spot) {
    this.x_ = v.x_;
    this.y_ = v.y_;
    this.remaining_ = v.remaining_.slice();
  } else {
    this.x_ = x;
    this.y_ = y;
    if (v == undefined || v == 0) {
      this.remaining_ = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    } else {
      this.setValue(v);
    }
  }
};
Spot.prototype.eliminate = function(v) {
  var orig_length = this.remaining_.length;
  this.remaining_ = this.remaining_.filter(function(a) {
    return a != v
  });

  return this.remaining_.length < orig_length;
};
Spot.prototype.value = function() {
  if (this.remaining_.length == 1) {
    return this.remaining_[0];
  }
  return "_";
};
Spot.prototype.setValue = function(v) {
  this.remaining_ = [v];
};
Spot.prototype.known = function() {
  return this.remaining_.length == 1;
};
Spot.prototype.unknown = function() {
  return this.remaining_.length > 1;
};
Spot.prototype.invalid = function() {
  return this.remaining_.length == 0;
};
Spot.prototype.remaining = function() {
  return this.remaining_;
};
Spot.prototype.toString = function() {
  if (this.invalid()) {
    return "x";
  }
  if (this.unknown()) {
    return ".";
  }
  if (this.known()) {
    return String(this.value());
  }
  return "|";
};
Spot.prototype.copy = function() {
  return new Spot(this);
};
Spot.prototype.locationEquals = function(other) {
  return (this.x_ === other.x_ && this.y_ === other.y_);
};
Spot.sortFunc = function(a, b) {
  return a.remaining_.length - b.remaining_.length;
};

var Puzzle = function(param) {
  if (param instanceof Puzzle) {
    var p = param.grid_.map(function(row) {
      return row.map(function(spot) {
        return spot.copy();
      });
    });

    this.grid_ = p;
    this.calculateRemaining();
  } else {
    var text = param;
    var notNumber = /[^0-9\.]*/;

    var uncleanedSplit = text.split(notNumber);
    var split = uncleanedSplit.map(function(a) {
      if (a == ".") {
        return 0;
      }
      return parseInt(a);
    }).filter(function(a) {
      return a >= 0 && a <= 9;
    });

    if (split.length != 81) {
      return null;
    }

    var p = [];
    for (var r = 0; r < 9; r++) {
      var row = [];
      for (var c = 0; c < 9; c++) {
        row.push(new Spot(split[r*9 + c], c, r));
      }
      p.push(row);
    }

    this.grid_ = p;

    this.grid_.forEach(function(row) {
      row.forEach(function(spot) {
        if (spot.known()) {
          this.setSpot(spot, spot.value());
        }
      }, this);
    }, this);
  }
};
Puzzle.prototype.rowForSpot = function(spot) {
  return this.grid_[spot.y_].slice(0, this.grid_[spot.y_].length);
};
Puzzle.prototype.columnForSpot = function(spot) {
  var l = [];
  for (var i = 0; i < this.grid_.length; i++) {
    l.push(this.grid_[i][spot.x_]);
  }
  return l;
};
Puzzle.prototype.squareForSpot = function(spot) {
  var x = Math.floor(spot.x_ / 3) * 3;
  var y = Math.floor(spot.y_ / 3) * 3;

  var l = [];
  for (var r = y; r < y + 3; r++) {
    for (var c = x; c < x + 3; c++) {
      l.push(this.grid_[r][c]);
    }
  }
  return l;
};
Puzzle.prototype.affectedSpots = function(spot) {
  var spot = this.spotAt(spot);
  var l = [];
  l = l.concat(this.rowForSpot(spot));
  l = l.concat(this.columnForSpot(spot));
  l = l.concat(this.squareForSpot(spot));
  l = unique(l).filter(function(s) {
    return !s.locationEquals(spot);
  });
  return l;
};
Puzzle.prototype.spotAt = function(spot) {
  return this.grid_[spot.y_][spot.x_];
};
Puzzle.prototype.setSpot = function(spot, value) {
  this.spotAt(spot).setValue(value);
  var spots = this.affectedSpots(spot);
  var new_known_spots = [];
  var valid = true;
  spots.forEach(function(s) {
    if (s.eliminate(value) && s.known()) {
      if (!this.setSpot(s, s.value())) {
        valid = false;
      }
    }
    if (s.invalid()) {
      valid = false;
    }
  }, this);
  return valid;
};
Puzzle.prototype.calculateInvalid = function() {
  var invalid = [];
  this.grid_.forEach(function(row) {
    row.forEach(function(spot) {
      if (spot.invalid()) {
        invalid.push(spot);
      }
    }, this);
  }, this);

  return invalid;
};
Puzzle.prototype.calculateRemaining = function() {
  var remaining = [];
  this.grid_.forEach(function(row) {
    row.forEach(function(spot) {
      if (spot.unknown()) {
        remaining.push(spot);
      }
    }, this);
  }, this);

  return remaining;
};
Puzzle.prototype.solve = function() {
  var remaining = this.calculateRemaining();
  if (remaining.length == 0) {
    return [this];
  }

  var solutions = [];
  var guess_spot = remaining.sort(Spot.sortFunc)[0];
  guess_spot.remaining().forEach(function(value) {
    var p = this.copy();
    if (p.setSpot(guess_spot, value)) {
      var p_solutions = p.solve();
      solutions = solutions.concat(p_solutions);
    }
  }, this);

  return solutions;
};
Puzzle.prototype.toString = function() {
  var out = this.grid_.map(function(row) {
    return row.join(" ");
  }).join("\n");
  var remaining = this.calculateRemaining();
  var invalid = this.calculateInvalid();

  if (remaining.length > 0) {
    out += "\nRemaining: " + String(remaining.length);
  }
  if (invalid.length > 0) {
    out += "\nInvalid: " + String(invalid.length);
  }

  return out;
};
Puzzle.prototype.copy = function() {
  return new Puzzle(this);
};

var sudoku = {};

sudoku.load = function() {
  sudoku.inputTextArea = document.getElementById("input");
  sudoku.solveButton = document.getElementById("solve");
  sudoku.solutionsTextArea = document.getElementById("solutions");

  sudoku.solveButton.onclick = sudoku.inputTextArea.onkeypress = function() {
    sudoku.solve();
  }
};

sudoku.solve = function() {
  console.log("Attempting to solve puzzle...");

  var puzzle = new Puzzle(sudoku.inputTextArea.value);
  var solutions = puzzle.solve();

  console.log("Got solutions: " + solutions.length);
  solutions.forEach(function(s) {
    console.log("========");
    console.log(s.toString());
  });

  if (solutions.length > 0) {
    sudoku.solutionsTextArea.value = solutions.map(function(s) {
      return s.toString();
    }).join("\n\n");
  } else {
    sudoku.solutionsTextArea.value = "No valid solutions";
  }
};

this.sudoku = sudoku;
})();
