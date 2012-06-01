---
layout: post
title: CCons - The C Console
---
After a smattering of [Basic](2010/04/15/my-first-release.html) in my childhood, the first real programming language I ever wrote in was [C](http://www.amazon.com/dp/0131103628). Why C? Because that's what they taught in my high school's programming class. In that class, I believe we got as far as learning [for loops](http://www.haskell.org/~pairwise/intro/section4.html) and [basic `printf` formatting](http://www.opengroup.org/onlinepubs/009695399/utilities/printf.html).

Since then I have been using C (or [C++](http://www.research.att.com/~bs/pronounciation.wav)) almost constantly. At times [Python](http://en.wikipedia.org/wiki/Python_(genus) or [Java](http://en.wikipedia.org/wiki/Java) or even [JavaScript](http://javascript.crockford.com/popular.html) have threatened to overtake C as my default language, but in the end I kept returning to the world of manual memory management, static typing, and generally inflexible language mechanics. I love it.

Recently, I have been very impressed with the [LLVM](http://llvm.org/) project. Apple has been using it, along with the [clang](http://clang.llvm.org/) frontend, as a replacement for GCC. Now, I realized upon seeing this, that there was an opportunity. LLVM offers [just-in-time](http://www.urbandictionary.com/define.php?term=jit) compilation; clang performs [parsing](http://upload.wikimedia.org/wikipedia/commons/3/30/Gruppe_Bisons_%28Bison_bison%29.JPG) of C. These two tools should theoretically be able to be combined into a C interpreter. How cool would that be?

It was not cool enough to motivate me to write it. Luckily, someone had already written it for me. Introducing the absurdity that is [ccons](http://code.google.com/p/ccons/).

After setting up all of the prerequisite tools, I could run my own C interpreter:

    >>> #include <stdio.h>
    >>> size_t j = 6;
    >>> printf("Size of size_t: %zu\n", sizeof(j));
    Size of size_t: 8
    => (int) 18
    >>> printf("hello, world\n");
    hello, world
    => (int) 13

As of now I must admit that I have yet to find a use for this, but I can't stop marveling at it. Perhaps now everyone in love with [_Erlang_](http://pragprog.com/articles/erlang) and [_Scala_](http://translate.google.com/#it|en|scala) can finally start to learn a real programming language thanks to an easy to use interpreter!
