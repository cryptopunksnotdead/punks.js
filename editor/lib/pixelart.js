///////////////////////////////////////////
//   support functions for parsing and generating pixel matrix


      // use ascii art image chars => .@xo^~%*+=:    -- .~:+=o*x^%#@
     function mapColorToAscii( x, chars ) {
        return chars[x];
     }

     function generateAscii( ary, chars ) {
        let str = ary.map( (row, i) =>
                       row.map( (x) =>
                             mapColorToAscii( x, chars )
                        ).join(" ")
                    ).join("\n");
        return str;
     }




     function mapAsciiToColor( x, chars ) {
       let pos = chars.indexOf( x );
       if( pos == -1 ) {
          // assume number (as string) - convert to number
          return parseInt( x, 10 );
       }
       else {
         return pos;
       }
     }


     //////////////
     // pixelart ascii format
     //   support comments starting with #
     //         and allow empty lines
     //    support leading trailing spaces (get auto-trimmed)
     //    auto-trim leading and trailing whitespaces & emptylines in design
     //

     function parseAscii( str, chars ) {
       let ary = [];
       str.trim().split( "\n" ).forEach( line => {
            line = line.trim();
            if( line.startsWith( "#" ) || line.length == 0 ) {
              // do nothing; skip
            } else {
              values = line.split( /[ \t]+/ ).map( x => mapAsciiToColor( x, chars ));
              ary.push( values );
            }
          } );
       return ary;
    }


