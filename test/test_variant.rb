# encoding: utf-8

###
#  to run use
#     ruby -I ./lib -I ./test test/test_variant.rb


require 'helper'



class TestVariant < MiniTest::Test

include Safe

Variant.new( :None )
Variant.new( :Some, value: 0 )

def test_build
  pp None
  pp None()
  pp Some
  pp Some.attributes
  pp Some( 0 )

  assert None().is_a?( Variant )
  assert None().is_a?( None )

  assert Some( 0 ).is_a?( Variant )
  assert Some( 0 ).is_a?( Some )

  ##  assert None().is_a? VariantUnit
  ##  assert Some( 0 ).is_a? VariantStruct
end

end # class TestVariant
