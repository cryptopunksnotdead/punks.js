function parseCsv( str ) {
  const lines = str.split( /\r?\n/ );
  let rows = [];

  for( let line of lines ) {
      line = line.trim();

      // skip empty & comment lines
      if( line.length === 0 || line.startsWith('#') ) {
         continue;
      }
      values = line.split(',');

      values = values.map( (val, index) => val.trim() );
      console.log( values );

      rows.push( values );
  }

  return rows
}


class Spritesheet {
   constructor( img, names,
                tileWidth=24,
                tileHeight=24 ) {
     this.img   = img;
     this.names = this._build_names( names );
     this.tileWidth =  tileWidth;
     this.tileHeight = tileHeight;
   }
   static read( src, names,
                tileWidth=24,
                tileHeight=24 ) {
      let img = new Image();
      img.src = src;
      return new Spritesheet( img, names, tileWidth, tileHeight );
   }


   _build_names( str ) {
      // assume text records in comma-separated values (.csv)
      // e.g.
      //   0, Male 1
      //   1, Male 2
      //   ...
      //   11, Rosy Cheeks (m)

      const rows = parseCsv( str );
      let names = {};
      for( let row of rows ) {
         let id = parseInt( row[0] );
         let name = this._norm_name( row[1] );

         names[ name ] = id;
      }

      return names;
   }

  _norm_name( str ) {
    str = str.toLowerCase();
    str = str.replaceAll( /[ _-]/ig, '' );
    console.log( str );
    return str;
  }

  drawSprite( name, sel, zoom=1 ) {
    let el = (typeof sel === 'string') ?
                 document.querySelector( sel )
                :
              sel;

    let num =  this.names[ this._norm_name( name ) ];
    this._drawSprite( num, el, zoom );
  }

  pasteSprite( name, cx, zoom=1 ) {
     let num =  this.names[ this._norm_name( name ) ];
     this._pasteSprite( num, cx, zoom );
  }

  _pasteSprite( num, cx, zoom=1 ) {
    let cols = this.img.naturalWidth / this.tileHeight;
    let rows = this.img.naturalHeight / this.tileWidth;
    console.log( cols, rows );

    let dy = Math.floor( num / cols );
    let dx = num % cols;
    console.log( dx, dy );

    cx.imageSmoothingEnabled = false;
    cx.drawImage( this.img,
                  // source rect
                  dx*this.tileWidth, dy*this.tileHeight, this.tileWidth, this.tileHeight,
                  // dest rect
                  0, 0, this.tileWidth*zoom, this.tileHeight*zoom );
  }


  _drawSprite( num, el, zoom=1 ) {

     let canvas = document.createElement( 'canvas' );

    canvas.width = this.tileWidth*zoom;
    canvas.height =this.tileHeight*zoom;

    console.log( "==> Spritesheet.drawSprite" );
    console.log( canvas.width, canvas.height );

    let cx = canvas.getContext( "2d" );
    cx.clearRect( 0, 0, this.tileWidth, this.tileHeight );

    this._pasteSprite( num, cx, zoom );

    el.appendChild( canvas );
}

  draw( sel='span.sprite', zoom=1 ) {
    // note: use onload (async) callback to wait for (required) image download to complete
    this.img.onload = () => {
       console.log( "  image.onload callback " );
       let els = document.querySelectorAll( sel );
       // console.log( els );

       for( let el of Array.from( els ) ) {
         let name = el.dataset.name;
         console.log( name );

         this.drawSprite( name, el, zoom );
       }
       console.log( "done Spritesheet.draw()" );
      }
    }
}



class Generator {
  constructor( sheet ) {
    this.sheet   = sheet;
  }
  static use( sheet ) {
    return new Generator( sheet );
  }

  generate( sel, ...args ) {

     // check for opts
     let opts = {};

     if (typeof args[ args.length-1] === 'object' ) {
        opts = args.pop();
     }
     console.log( opts );

     let zoom = opts.zoom || 1;
     let background = opts.background || '#638596';
     let names = args;

     console.log( "generate", this.sheet.tileWidth,
                              this.sheet.tileHeight,
                              zoom,
                              names );


    let el = (typeof sel === 'string') ?
                 document.querySelector( sel )
                :
              sel;

    let canvas = el;
    canvas.width  = this.sheet.tileWidth*zoom;
    canvas.height = this.sheet.tileHeight*zoom;

    let cx = canvas.getContext( "2d" );

    cx.fillStyle = background;
    cx.fillRect(0, 0, this.sheet.tileWidth*zoom,
                      this.sheet.tileHeight*zoom );

    for(let name of names) {
       console.log( name );
       this.sheet.pasteSprite( name, cx, zoom );
    }
  }
}


