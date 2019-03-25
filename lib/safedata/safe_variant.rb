# encoding: utf-8

module Safe


class Variant
end

class VariantUnit < Variant
end

class VariantStruct < Variant
end



class Variant
  def self.build_class( class_name, **attributes )

    ## todo/fix:
    ## check if valid class_name MUST start with uppercase letter etc.
    ##  todo/fix: check if constant is undefined in Safe namespace!!!!

    if attributes.size == 0    ## build a Variant of Unit Style
      klass = Class.new( VariantUnit )

      ## add global "Kernel" convenience converter function
      ##   todo/fix: use singelton class
      Kernel.class_eval( <<RUBY )
        def #{class_name}()
           #{class_name}.new
        end
RUBY
    else                       ## build a Variant of Struct Style
      klass = Class.new( VariantStruct ) do
        attributes.each do |key,value|
          define_method( key ) do
            instance_variable_get( "@#{key}" )
          end
          if value == false  ## note: for Bool add getter with question mark (e.g. voted? etc.)
            define_method( "#{key}?" ) do
              instance_variable_get( "@#{key}" )
            end
          end
        end
      end

      klass.define_singleton_method( :attributes ) do
        attributes
      end

      Kernel.class_eval( <<RUBY )
        def #{class_name}( *args )
           #{class_name}.new( *args )
        end
RUBY
    end

    ## note: use Safe (module) and NOT Object for namespacing
    ##   use include Safe to make all structs global
    Safe.const_set( class_name, klass )   ## returns klass (plus sets global constant class name)
  end # method build_class

  class << self
    alias_method :old_new, :new       # note: store "old" orginal version of new
    alias_method :new,     :build_class    # replace original version with create
  end
end # class Variant



class Variant


  ## todo: find a better name - tagged? union? tag? part_of? include? etc.
  ##  check if variant of (tagged) union class
  def variant_of?( klass )
    raise ArgumentError( "class expected; got #{klass.inspect}") unless klass.is_a? Class

    ## todo - how to check if class is derived from Safe::Union ???
    if klass.respond_to?( :include? )
      klass.include?( self.class )
    else
      false
    end
  end
  alias_method :member?, :variant_of?
end



class VariantUnit    ## singelton - has no args - like TrueClass and TRUE

  def self.new() old_new(); end

  def ==( other )
     if other.is_a?( self.class )
       true
     else
       false
     end
  end
  alias_method :eql?, :==

end  # class VariantUnit


class VariantStruct    ## like a (immutable) struct - has args

  ## add self.new too - note: call/forward to "old" orginal self.new of Event (base) class
  def self.new( *args )
    if args.size != attributes.size
      ## check for required args/params - all MUST be passed in!!!
      raise ArgumentError.new( "[Variant] wrong number of arguments for #{name}.new - #{args.size} for #{attributes.size}" )
    end
    old_new( *args )
  end

  alias_method :old_freeze, :freeze   # note: store "old" orginal version of freeze
  def freeze
    old_freeze    ## same as calling super
    self.class.attributes.keys.each do |key|
      instance_variable_get( "@#{key}" ).freeze
    end
    self   # return reference to self
  end

  def initialize( *args )
    self.class.attributes.keys.zip( args ).each do |key, arg|
      instance_variable_set( "@#{key}", arg )
    end
    freeze
    self  ## note: return reference to self for chaining method calls
  end


  def ==( other )
     if other.is_a?( self.class )
       self.class.attributes.keys.all? do |key|
         __send__( key ) == other.__send__( key )
       end
     else
       false
     end
  end
  alias_method :eql?, :==

end  # class VariantStruct

end # module Safe
