# encoding: utf-8

module Safe


class Union
  def self.build_class( class_name, *args )

    ## todo/fix:
    ## check if valid class_name MUST start with uppercase letter etc.
    ##  todo/fix: check if constant is undefined in Safe namespace!!!!

    ## todo: fix quick and dirty split
    ## split args into variants
    variants = {}
    variant_name = nil
    args.each do |arg|
      if arg.is_a?(Symbol) || arg.is_a?(String)
        variant_name = arg
        variants[ variant_name ] = {}
      else  ## assume Hash
        variants[ variant_name ] = arg
      end
    end

    pp variants

    variant_classes = []
    variants.each do |k,v|
      variant_class_name = k
      variant_attributes = v
      variant_class = Variant.new( variant_class_name, variant_attributes )
      pp variant_class
      variant_classes << variant_class
    end


    klass = Class.new( Union ) do
      define_singleton_method( :new ) do
        old_new()
      end
      define_singleton_method( :variants ) do
        variant_classes
      end
    end


    ## note: use Safe (module) and NOT Object for namespacing
    ##   use include Safe to make all structs global
    Safe.const_set( class_name, klass )   ## returns klass (plus sets global constant class name)
  end # method build_class



  def self.include?( klass )
    puts "[Union] #{name}.include?:"
    pp klass
    variants.include?( klass )
  end

  def self.match( o, clauses )
    puts "[Union] #{name}.match:"
    pp o
    pp clauses
  end


  class << self
    alias_method :old_new, :new       # note: store "old" orginal version of new
    alias_method :new,     :build_class    # replace original version with create
  end
end # class Union


module SafeHelper
  def data( class_name, *args )
    ###
    ##  data :Message, [:Quit,
    ##                  :Move, {x:0,y:0},
    ##                  ...
    ##                 ]
    ##  -or-
    ##  data :Message, :Quit,
    ##                 :Move, {x:0,y:0},
    ##                 ...

    if args[0].is_a?( Array )
      new_args = args[0]
    else
      new_args = args
    end

    Union.new( class_name, *new_args )
  end

end # module SafeHelper
end # module Safe
