# encoding: utf-8

###
#  to run use
#     ruby -I ./lib -I ./test test/test_union.rb


require 'helper'



class TestUnion < MiniTest::Test

include Safe

##  Union.new( :Message,
##             :Quit,
##             :Move, {x:0, y:0},
##             :Write, {text:''},
##             :ChangeColor, {r:0, g:0, b:0} )

data :Message,
       :Quit,
       :Move, {x:0, y:0},
       :Write, {text:''},
       :ChangeColor, {r:0, g:0, b:0}


def test_build

  pp Message
  pp Message.variants

  assert_equal true, Message.new.is_a?( Union )

  assert_equal [Quit, Move, Write, ChangeColor], Message.variants

  assert_equal true,  Message.include?( Quit )
  assert_equal true,  Message.include?( Move )
  assert_equal false, Message.include?( String )

  assert Quit().variant_of?( Message )
  assert Move(0,0).variant_of?( Message )
  assert Write("Hello").variant_of?( Message )
end # method test_build

def test_match
  ## msg = Quit()
  ## msg = Move(2,3)
  ## msg = Write("Hello")
  msg = ChangeColor(0, 160, 255)
  case msg
  when Quit
    puts "Quit has no data"
  when Move
    puts "Move in the x: #{msg.x} / y: #{msg.y} direction"
  when Write
    puts "Text message: #{msg.text}"
  when ChangeColor
    puts "Change color to red: #{msg.r} / green: #{msg.g} / blue: #{msg.b}"
  end

  Message.match msg,
  Quit: ->() {
    puts "Quit has no data"
  },
  Move: ->(x,y) {
    puts "Move in the x: #{x} / y: #{y} direction"
  },
  Write: ->(text) {
    puts "Text message: #{text}"
  },
  ChangeColor: ->(r,g,b) {
    puts "Change color to red: #{r} / green: #{g} / blue: #{b}"
  }
end # method test_match


end # class TestUnion
