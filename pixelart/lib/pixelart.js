    //////////////
     // pixelart ascii format
     //   support comments starting with #
     //         and allow empty lines
     //    support leading trailing spaces (get auto-trimmed)
     //    auto-trim leading and trailing whitespaces & emptylines in design
     //

     function parseAscii( str ) {
      let ary = [];
      str.trim().split( "\n" ).forEach( line => {
           line = line.trim();
           if( line.startsWith( "#" ) || line.length == 0 ) {
             // do nothing; skip
           } else {
             values = line.split( /[ \t]+/ );
             ary.push( values );
           }
         } );
      return ary;
   }


   class Pixelart {
       constructor( pixels, options ) {
         this.pixels = pixels;

         this.colors = options.colors  || { '@': '#000000' }
         this.offset = options.offset  || [0,0];

         this.width  = pixels[0].length; // note: assume all rows the same for now
         this.height = pixels.length;

         console.log( `  width x height: ${this.width} x ${this.height}, offset: ${this.offset}` );
       }

       static parse( str, options ) {
          var pixels = parseAscii( str );
          return new Pixelart( pixels, options );
       }

       draw( ctx, zoom=1 ) {
         this.pixels.forEach( (row, y) => {
                   row.forEach( (pixel, x) => {

            if( pixel != '.' ) {  // auto-skip transparent for now - why? why not?
              ctx.fillStyle = this.colors[pixel];
              ctx.fillRect( x*zoom+this.offset[0]*zoom,
                            y*zoom+this.offset[1]*zoom, zoom, zoom );
            }
           });
         });
       }
   }


   function drawPunk( q, designs, zoom=1 ) {
    // convenience helper / hack; lets you pass in id of canvas element
    //   other assume canvas element passed in (use as is)
   let canvas =  (typeof q === 'string') ?  document.querySelector( q ) : q;

   // note: use width/height from first design
   canvas.width  = designs[0].width*zoom;
   canvas.height = designs[0].height*zoom;

   console.log( ` canvas width x height: ${canvas.width} x ${canvas.height}` );

   let ctx = canvas.getContext( '2d' );

   for( let design of designs ) {
      design.draw( ctx, zoom );
   }
}

