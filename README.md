
# Safe (Algebraic) Union Data Types (With Enumerated Variants)

safedata gem / library - safe (algebraic) union data types with enumerated variants

* home  :: [github.com/s6ruby/safedata](https://github.com/s6ruby/safedata)
* bugs  :: [github.com/s6ruby/safedata/issues](https://github.com/s6ruby/safedata/issues)
* gem   :: [rubygems.org/gems/safedata](https://rubygems.org/gems/safedata)
* rdoc  :: [rubydoc.info/gems/safedata](http://rubydoc.info/gems/safedata)


## Usage

To be done





### What about Safe Enumeration (Integer) Types?

Yes, yes, yes. The `Enum` class from the enums library gets auto-required.
Use like:

``` ruby
Enum.new( :Color, :red, :green, :blue )
## or
enum :Color, :red, :green, :blue
## or
enum :Color, [:red, :green, :blue]
```

See the [enums library documentation for more »](https://github.com/s6ruby/enums)



## License

![](https://publicdomainworks.github.io/buttons/zero88x31.png)

The `safedata` scripts are dedicated to the public domain.
Use it as you please with no restrictions whatsoever.


## Questions? Comments?

Send them along to the [wwwmake forum](http://groups.google.com/group/wwwmake).
Thanks!
