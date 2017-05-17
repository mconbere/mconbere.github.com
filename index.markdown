---
layout: default
title: Morgan Conbere
---

<img class="header" src="img/header.jpg" width="100%">

About
=====

I was born in a small town. I crawled, ran, jumped and leaped through life to
reach this very moment in time. Thank you for sharing this moment with me.

In a more concrete sense, I am a software developer living in San Francisco.
For ethical, moral, or spiritual advice, email me at
[mconbere@gmail.com](mailto:mconbere@gmail.com).

Contact
=======

There are many ways of getting in contact with me. Here are some easy ways:

* [Facebook profile](https://www.facebook.com/mconbere)
* [GitHub profile](https://github.com/mconbere)
* [Google+ profile](https://plus.google.com/110969377294776852746/posts)
* [LinkedIn profile](http://www.linkedin.com/in/mconbere)
* [Email](mailto:mconbere@gmail.com)

If in doubt, an email is probably best.

Résumé
======

You may be in the position to offer me the job of a lifetime, or perhaps want to
grant me a large sum of money but want to review my accomplishments before your
final decision. Fear not, for I have my résumé ready to review:

* [Protocol buffer text format](https://goresume-2015.appspot.com/?text=true&output=text&url=http://morgan.conbere.org/resume/mconbere.txt)
* [Markdown](https://goresume-2015.appspot.com/?text=true&output=markdown&url=http://morgan.conbere.org/resume/mconbere.txt)
* [Formatted HTML](https://goresume-2015.appspot.com/?text=true&output=html&url=http://morgan.conbere.org/resume/mconbere.txt)

You may be interested in creating a similarly-styled résumé. Fear not, the project is [hosted on github](https://github.com/mconbere/goresume)!

Salary
======

To improve transparency and reduce inequality in the workplace, I choose to publish my salary publicly. [See More](salary/index.html).

Diversions
==========

* [Sudoku Solver](sudoku/sudoku.html) A simple little sudoku solver app written
  in JavaScript.

* [Protobuf Résumé](http://github.com/mconbere/goresume) Out of a desire to no
  longer worry about formatting paper documents, and a love of tools that parse,
  I designed a binary protocol buffer format to describe a résumé. The project
  also includes tools to convert this format into Markdown and HTML.

* [MacSweeper](http://code.google.com/p/macsweeper) Out of a desire to
  procrastinate while running OS X, I wrote a sleek port of Microsoft's
  Minesweeper. Note: sleek for the time. This was originally written around 2006,
  and is showing its age.

* [Pants! No Pants! Naked!](pantsnopantsnaked/index.html) A game similar to Rock Paper Scissors. But more fun.

* [The Baseball Design Pattern](http://morgan.conbere.org/baseball-design/) There is one rule: You may not return. You may only catch and throw. A "fun" twist on writing C++ and Java code. See the repository for examples and user testimonials.

Little Bits of Writing
======================

{% for post in site.posts %}
* [{{ post.title }} -- {{ post.date | date_to_string }}]({{ post.url}})
{% endfor %}
