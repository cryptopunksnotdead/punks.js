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
      // console.log( values );

      rows.push( values );
  }

  return rows
}


// change/rename to Meta or such - why? why not?
class Dataset {

static async read_csv( url ) {
      // get csv records
     const res = await fetch( url );
      // console.log( res );

      const text = await res.text();
      // console.log( text );
      const recs = parseCsv( text );

      return new Dataset( recs );
 }

 constructor( recs ) {
   this.recs   = recs;
   // console.log( recs );
}

 recs() { return this.recs; }
}



class Collection {

   static async read( img_src, dataset_url ) {
       let composite = await ImageComposite.read( img_src );
       let dataset   = await Dataset.read_csv( dataset_url );

      return new Collection( composite, dataset );
   }

   constructor( composite, dataset ) {
      this.composite = composite;

    // note: skip header row (0)
    this.recs      = [];
    for (let i=1; i < dataset.recs.length; i++) {
       let rec = dataset.recs[i];
       // console.log( rec );
       this.recs.push( rec );
    }
    // console.log( recs );
    console.log( this.recs.length, "record(s)" );
   }

   composite()         { return this.composite; }
   recs()              { return this.recs; }
}

