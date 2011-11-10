---
layout: default
title: Morgan Conbere
---

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

Résumé
======

You may be in the position to offer me the job of a lifetime, or perhaps want to
grant me a large sum of money but want to review my accomplishments before your
final decision. Fear not, for I have my résumé ready to review:

* [Protocol buffer text format](https://github.com/mconbere/Resume/raw/master/mconbere/mconbere.ptxt)
* [Markdown](http://protobuf-resume.appspot.com/pb?url=https%3A%2F%2Fgithub.com%2Fmconbere%2FResume%2Fraw%2Fmaster%2Fmconbere%2Fmconbere.ptxt)
* [Formatted HTML](http://protobuf-resume.appspot.com/?url=https%3A%2F%2Fgithub.com%2Fmconbere%2FResume%2Fraw%2Fmaster%2Fmconbere%2Fmconbere.ptxt)

Projects
========

* [Protobuf Résumé](http://github.com/mconbere/resume) Out of a desire to no
  longer worry about formatting paper documents, and a love of tools that parse,
  I designed a binary protocol buffer format to describe a résumé. The project
  also includes tools to convert this format into Markdown and HTML.

* [MacSweeper](http://code.google.com/p/macsweeper) Out of a desire to
  procrastinate while running OS X, I wrote a sleek port of Microsoft's
  Minesweeper.

Posts
=====

{% for post in site.posts %}
* [{{ post.title }} -- {{ post.date | date_to_string }}]({{ post.url}})
{% endfor %}
