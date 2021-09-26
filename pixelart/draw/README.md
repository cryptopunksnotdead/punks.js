# How to Draw Punks on Canvas (in JavaScript) from Scratch / Zero Using Punk Building Blocks in Pixel Art "ASCII" Text Format


## Step 1 -  Use the shared pixel art library and the shared punk pixel art designs

In your head of your web page add:

``` html
  <!-- i) pull in pixel art and punk drawing machinery / library code -->
  <script src="https://cryptopunksnotdead.github.io/sandbox/lib/pixelart.js"></script>

  <!-- ii) pull in some (shared) punk pixel art designs (e.g. alien, demon, etc.) -->
  <script src="https://cryptopunksnotdead.github.io/sandbox/designs.js"></script>
```

## Step 2 - For every punk that you want to draw add a canvas

Let's draw two punks - the first in the original 24x24 format (zoom=1)  
and the second with a 8x zoom. Add in the body of your web page
two canvas "placeholder" elements with (unique) ids (e.g. `punk` for the first and `punk8x` for the second):

``` html
   <canvas id='punk'></canvas>
8x <canvas id='punk8x'></canvas>
```


## Step 3- Draw the punks using any punk type or attribute from the punk building blocks and any zoom (original, 2x, 4x, etc) 

Add an inline script block that uses the `drawPunk( id, [design, design, design, ...], zoom=1)` 
method to draw the punk according to your specs on the canvas:

``` html
<script>
    drawPunk( '#punk',   [alien, headband] );
    drawPunk( '#punk8x', [zombie, knittedcap, lasereyes], 8 );
</script>
``` 

That's it.    Open up the web page and enjoy your punks.  Try [`punks.html`](https://cryptopunksnotdead.github.io/sandbox/draw/punks.html) to see an online live copy.


## Questions? Comments?

Post them on the [CryptoPunksDev reddit](https://old.reddit.com/r/CryptoPunksDev). Thanks.






---

Bonus:  All together now - for easy cut-n-paste and reference:

``` html
<head>
  <!-- step 1: pull in shared library and designs -->
   <!-- i) pull in pixel art and punk drawing machinery / library code -->
  <script src="https://cryptopunksnotdead.github.io/sandbox/lib/pixelart.js"></script>

  <!-- ii) pull in some (shared) punk pixel art designs (e.g. alien, demon, etc.) -->
  <script src="https://cryptopunksnotdead.github.io/sandbox/designs.js"></script>
</head>
<body>

  <!-- step 2: prepare two "placeholder" canvas with (unique) ids -->
  <canvas id='punk'></canvas>
  8x <canvas id='punk8x'></canvas>

  <!-- step 3: let's draw two punks -->
  <script>
    drawPunk( '#punk',  [alien, headband] );
    drawPunk( '#punk8x', [zombie, knittedcap, lasereyes], 8 );
  </script>
</body>
```

Save as [`punks.html`](punks.html) and open up in your browser to enjoy your punks.
Try [`punks.html`](https://cryptopunksnotdead.github.io/sandbox/draw/punks.html) to see an online live copy.

