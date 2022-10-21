

class ImageComposite {

  static async read( src,
                tileWidth=24,
                tileHeight=24 ) {
      let img = new Image();
      img.src = src;

      // check if there's a better way to wait for image to load?
      await new Promise( (resolve, reject) => {
          img.onload = () => {
            console.log( "  image.onload callback " );
            resolve( true );
            console.log( "done ImageComposite.ready()" );
         }
      });

      return new ImageComposite( img, tileWidth, tileHeight );
   }

   constructor( img,
                tileWidth=24,
                tileHeight=24 ) {
     this.img       =  img;
     this.tileWidth =  tileWidth;
     this.tileHeight = tileHeight;
   }



  drawCanvas( num, sel, zoom=1 ) {
    let canvas = (typeof sel === 'string') ?
                    document.querySelector( sel )
                     :
                    sel;

    canvas.width = this.tileWidth*zoom;
    canvas.height =this.tileHeight*zoom;

    let cx = canvas.getContext( "2d" );
    cx.clearRect( 0, 0, this.tileWidth, this.tileHeight );

    let cols = this.img.naturalWidth / this.tileHeight;
    let rows = this.img.naturalHeight / this.tileWidth;
    // console.log( cols, rows );

    let dy = Math.floor( num / cols );
    let dx = num % cols;
    // console.log( dx, dy );

    cx.imageSmoothingEnabled = false;
    cx.drawImage( this.img,
                  // source rect
                  dx*this.tileWidth, dy*this.tileHeight, this.tileWidth, this.tileHeight,
                  // dest rect
                  0, 0, this.tileWidth*zoom, this.tileHeight*zoom );
  }
}

