
# Safe (Algebraic) Union Data Types (With Enumerated Variants)

safedata gem / library - safe (algebraic) union data types with enumerated variants

* home  :: [github.com/s6ruby/safedata](https://github.com/s6ruby/safedata)
* bugs  :: [github.com/s6ruby/safedata/issues](https://github.com/s6ruby/safedata/issues)
* gem   :: [rubygems.org/gems/safedata](https://rubygems.org/gems/safedata)
* rdoc  :: [rubydoc.info/gems/safedata](http://rubydoc.info/gems/safedata)


## Usage

``` ruby
Union.new( :Message, :Quit,
                     :Move, {x:0, y:0},
                     :Write, {text:''},
                     :ChangeColor, {r:0, g:0, b:0} )
# -or-
data :Message, [:Quit,
                :Move, {x:0, y:0},
                :Write, {text:''},
                :ChangeColor, {r:0, g:0, b:0}]
# -or-
data :Message, :Quit,
               :Move, {x:0, y:0},
               :Write, {text:''},
               :ChangeColor, {r:0, g:0, b:0}


msg = Quit()
# -or-
msg = Move(2,3)
# -or-
msg = Write("Hello")
# -or-
msg = ChangeColor(0, 160, 255)


Message.match msg,
  Quit:        ->()      { puts "Quit has no data" },
  Move:        ->(x,y)   { puts "Move in the x: #{x} / y: #{y} direction" },
  Write:       ->(text)  { puts "Text message: #{text}" },
  ChangeColor: ->(r,g,b) { puts "Change color to red: #{r} / green: #{g} / blue: #{b}" }

...
```

<!--
  # use / add "alternative" match block - why? why not?
# -or-

Message.match( msg ) {
  on Quit        {         puts "Quit has no data" }
  on Move        { |x,y|   puts "Move in the x: #{x} / y: #{y} direction" }
  on Write       { |text|  puts "Text message: #{text}" }
  on ChangeColor { |r,g,b| puts "Change color to red: #{r} / green: #{g} / blue: #{b}" }
}
-->


``` ruby
data :Shape, :Circle,    { radius: 0 },
             :Square,    { side: 0 },
             :Rectangle, { height: 0, width: 0 }

shape = Circle(15)
# -or-
shape = Square(10)
# -or-
shape = Rectangle(5, 10)

def Shape.area( shape )
      match shape, 
          Circle:    ->(radius) { Math.PI * radius * radius },
          Square:    ->(s)      { s * s }
          Rectangle: ->(h, w)   { h * w }
end


circle = Circle(15)
puts "Area of circle that has radius #{circle.radius}: #{Shape.area(circle)}"

square = Square(10)
puts "Area of square that has side #{square.side}: #{Shape.area(square)}"

rect = Rectangle(5, 10)
puts "Area of rectangle that has height #{rect.height} and width #{rect.width} is #{Shape.area(rect)}"
```


``` ruby
## Result Data Types

data :Result, :Ok  { msg: '' },        # rust-like "short" form
              :Err { msg: ''}

data :Result, :Success { msg: '' },    # haskell-like "long" form 
              :Failure { msg: '' }


## Optional / Maybe Data Types

data :Optional,  :Some { value: T }    # note: T is a TypeVar
                 :None

data :Maybe,     :Just { value: T }
                 :Nothing

...
```







### What about Safe Enumeration (Integer) Types?

Yes, yes, yes. The `Enum` class from the enums library gets auto-required.
Use like:

``` ruby
Enum.new( :Color, :red, :green, :blue )
# -or-
enum :Color, :red, :green, :blue
# -or-
enum :Color, [:red, :green, :blue]
```

See the [enums library documentation for more »](https://github.com/s6ruby/enums)




## More Safe Data Structures (Array, Hash, Struct)

[Safe Data Structures (Array, Hash, Struct)](https://github.com/s6ruby/safestruct) - Say goodbye to null / nil (and maybe) and the Billion-Dollar mistake. Say hello to zero and the Billon-Dollar fix.



## License

![](https://publicdomainworks.github.io/buttons/zero88x31.png)

The `safedata` scripts are dedicated to the public domain.
Use it as you please with no restrictions whatsoever.


## Questions? Comments?

Send them along to the [wwwmake forum](http://groups.google.com/group/wwwmake).
Thanks!
