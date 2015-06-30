Awesome Series @ Planet Ruby

[Rubies (Virtual Machines, Compilers, ...)](https://github.com/planetruby/awesome-rubies) • 
[ActiveRecord](https://github.com/planetruby/awesome-activerecord)  •
[Webframeworks (Micro, Macro, APIs, ...)](https://github.com/planetruby/awesome-webframeworks) •
[Static Generators (Sites, Books, Presentations, ...)](https://github.com/planetruby/awesome-staticgen) •
[Events (Conferences, Camps, Meetups, ...)](https://github.com/planetruby/awesome-events) •
[Blogs (News, Opinions, Podcasts, ...)](https://github.com/planetruby/awesome-blogs)


# Webframeworks

A collection of awesome Ruby web frameworks, libraries, tools, etc.


Note: :gem: stands for the RubyGems page, :octocat: stands for the GitHub page and :book: stands for the RubyDoc page.

---

[ANNOUNCEMENT] Looking for awesome Ruby Gems? See the [Ruby Gems of the Week Series @ Planet Ruby](http://planetruby.github.io/gems).

---

Contributions welcome. Anything missing? Send in a pull request. Thanks.


[Rack](#rack) •
[Rack Alternatives](#rack-alternatives) • 
[Ruby on Rails](#ruby-on-rails) • 
[Sinatra](#sinatra) •
[Volt](#volt) •
[Async Web (Socket) Frameworks](#async-web-socket-frameworks) •
[Web Service Frameworks](#web-service-frameworks) •
[Micro Framework Alternatives](#micro-framework-alternatives) •
["Full Stack" Macro Framework Alternatives](#full-stack-macro-framework-alternatives) •
[Meta](#meta)


## Rack

- [Rack HQ](http://rack.github.io) - [:octocat:](https://github.com/rack), [:gem:](https://rubygems.org/gems/rack),  [:book:](http://rubydoc.info/gems/rack)

## Rack Alternatives

- [the_metal :octocat:](https://github.com/tenderlove/the_metal) - a spike for thoughts about Rack 2.0

## Ruby on Rails

_Batteries Included "Full Stack" Macro Framework_

- [Ruby on Rails HQ](http://rubyonrails.org) - [:octocat:](https://github.com/rails), [:gem:](https://rubygems.org/gems/rails), [:book:](http://rubydoc.info/gems/rails)
    - [News & Updates](http://weblog.rubyonrails.org)

Extensions:

- [Hobo HQ](http://hobocentral.net) - [:octocat:](https://github.com/Hobo), [:gem:](https://rubygems.org/gems/hobo),  [:book:](http://rubydoc.info/gems/hobo)
    - [News & Updates](http://hobocentral.net/blog)

Future:

- [Trailblazer](http://trailblazerb.org), [:octocat:](https://github.com/apotonick/trailblazer), [:gem:](https://rubygems.org/gems/trailblazer), [:book:](http://rubydoc.info/gems/trailblazer) - a thin layer on top of rails - (gently) enforces encapsulation, a "more" intuitive code structure and giving you a "better" object-oriented architecture by Nick Sutterer et al



## Sinatra

_Micro Framework_

- [Sinatra HQ](http://sinatrarb.com) - [:octocat:](https://github.com/sinatra), [:gem:](https://rubygems.org/gems/sinatra), [:book:](http://rubydoc.info/gems/sinatra)

Extensions:

- [Padrino HQ](http://padrinorb.com) - [:octocat:](https://github.com/padrino), [:gem:](https://rubygems.org/gems/padrino), [:book:](http://rubydoc.info/gems/padrino)
    - [News & Updates](http://www.padrinorb.com/blog)

Fun / Hack:

- [Almost Sinatra :octocat:](https://github.com/rkh/almost-sinatra) - Sinatra refactored, only six lines of code by Konstantin Haase

Future:

- [Mustermann](http://rkh.github.io/mustermann), [:octocat:](https://github.com/rkh/mustermann), [:gem:](https://rubygems.org/gems/mustermann)   - your personal string matching expert; can be used as a plugin for Sinatra 1.x and will power Sinatra 2.0; by Konstantin Haase et al


## Volt

_Client/Server Isomorphic Framework_

- [Volt HQ](http://voltframework.com) - [:octocat:](https://github.com/voltrb), [:gem:](https://rubygems.org/gems/volt),  [:book:](http://rubydoc.info/gems/volt)
    - [News & Updates](http://voltframework.com/blog)

## Async Web (Socket) Frameworks

- [Cramp :octocat:](https://github.com/lifo/cramp), [:gem:](https://rubygems.org/gems/cramp) - a fully asynchronous realtime web application framework built on top of event machine; providing full-duplex bi-directional communication by Pratik Naik

- [Lattice :octocat:](https://github.com/celluloid/lattice), [:gem:](https://rubygems.org/gems/lattice), [:book:](http://rubydoc.info/gems/lattice) -  an actor-based web framework built on top of celluloid, reel, and webmachine; designed for realtime apps, end-to-end streaming, and websockets by Tony Arcieri et al

- [Angelo :octocat:](https://github.com/kenichi/angelo), [:gem:](https://rubygems.org/gems/angelo) - sinatra-like mini-language for reel (built upon Celluloid::IO, no rack);  supports web sockets and server sent events (SSE) by Kenichi Nakamura
   


## Web Service Frameworks

_JSON HTTP API Builder_

- [Grape](http://intridea.github.io/grape) - [:octocat:](https://github.com/intridea/grape), [:gem:](https://rubygems.org/gems/grape), [:book:](http://rubydoc.info/gems/grape)  - a micro-framework for creating REST-like APIs
- [Crêpe :octocat:](https://github.com/crepe) - [:gem:](https://rubygems.org/gems/crepe) - a thin API stack
- [Yaks :octocat:](https://github.com/plexus/yaks) - [:gem:](https://rubygems.org/gems/yaks), [:book:](http://rubydoc.info/gems/yaks) - serialize to hypermedia. HAL, JSON API, HALO, collection+JSON etc. by Arne Brasseur et al
- [Praxis](http://praxis-framework.io) - [:octocat:](https://github.com/rightscale/praxis), [:gem:](https://rubygems.org/gems/praxis), [:book:](http://rubydoc.info/gems/praxis)  - a micro framework focusing on the design and coding aspects of creating good APIs quick by Josep M. Blanquer et al

## Micro Framework Alternatives

- [Rum :octocat:](https://github.com/chneukirchen/rum) - gRand Unified Mapper for rack apps by Christian Neukirchen
- [Cuba](http://cuba.is) - [:octocat:](https://github.com/soveran/cuba), [:gem:](https://rubygems.org/gems/cuba), [:book:](http://rubydoc.info/gems/cuba) - tiny but powerful mapper for rack apps by Michel Martens
- [New York, New York (NYNY)](http://alisnic.github.io/nyny) - [:octocat:](https://github.com/alisnic/nyny), [:gem:](https://rubygems.org/gems/nyny), [:book:](http://rubydoc.info/gems/nyny)  -  a tiny (~300 lines of code) web framework on top of rack by Andrei Lisnic
- [Roda](http://roda.jeremyevans.net) - [:octocat:](https://github.com/jeremyevans/roda), [:gem:](https://rubygems.org/gems/roda), [:book:](http://rubydoc.info/gems/roda)  - a routing tree web framework toolkit by Jeremy Evans
- [Hobbit :octocat:](https://github.com/patriciomacadden/hobbit), [:gem:](https://rubygems.org/gems/hobbit), [:book:](http://rubydoc.info/gems/hobbit) - a minimalistic microframework built on top of rack by Patricio Mac Adden
- [Brooklyn :octocat:](https://github.com/luislavena/brooklyn) - a small web tool on top of rack by Luis Lavena
- [Nancy](http://guilleiguaran.github.io/nancy), [:octocat:](https://github.com/guilleiguaran/nancy), [:gem:](https://rubygems.org/gems/nancy), [:book:](http://rubydoc.info/gems/nancy) - Sinatra's little daughter by Guillermo Iguaran
- [Camping](http://camping.io), [:octocat:](https://github.com/camping), [:gem:](https://rubygems.org/gems/camping), [:book:](http://www.rubydoc.info/gems/camping) - minature rails for stay-at-home moms; the 4k pocket full-of-gags web microframework
- [Scorched](http://scorchedrb.com), [:octocat:](https://github.com/Wardrop/Scorched), [:gem:](https://rubygems.org/gems/scorched), [:book:](http://rubydoc.info/gems/scorched)  -  light-weight, DRY as a desert, web framework by Tom Wardrop et al


<!--
   more
   Kenji  - https://github.com/kballenegger/kenji    ??
 -->



## "Full Stack" Macro Framework Alternatives

- [Lotus HQ](http://lotusrb.org) - [:octocat:](https://github.com/lotus), [:gem:](https://rubygems.org/gems/lotusrb), [:book:](http://rubydoc.info/gems/lotusrb)  - a complete web framework; bringing back object-oriented programming to web development, leveraging a stable API, minimal DSL and plain objects  by Luca Guidi et al
    - [News & Updates](http://lotusrb.org/blog)

<!-- new list -->

- [Pakyow HQ](http://pakyow.org) - [:octocat:](https://github.com/pakyow), [:gem:](https://rubygems.org/gems/pakyow) - an open-source framework for the modern web with a view-first development process that's friendly to everyone whether you're a designer or a developer
    - [News & Updates](http://pakyow.org/blog)

<!-- new list -->

- [Ramaze HQ](http://ramaze.net) - [:octocat:](https://github.com/Ramaze), [:gem:](https://rubygems.org/gems/ramaze), [:book:](http://rubydoc.info/gems/ramaze) - a simple, light and modular open-source web application framework by Michael Fellinger et al
    - [News & Updates](http://ramaze.net/blog)
 
## Thanks

Tony Arcieri • Josep M. Blanquer

## Meta

**License**

The awesome list is dedicated to the public domain. Use it as you please with no restrictions whatsoever.

**Questions? Comments?**

Send them along to the ruby-talk mailing list. Thanks!

