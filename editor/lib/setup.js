/////////////////////////////////////////////////
//  core pixel drawing tool machinery
//


function randomInt(max) {
  return Math.floor(Math.random() * max);
}
// console.log(randomInt(3));
// expected output: 0, 1 or 2

 function randomDesign() {
   let design = designs[ randomInt( designs.length) ];
   // note: auto-trim - leading and trailing empty lines & whitespaces
   return design.trim();
 }







 window.onload=()=>{
     var $canvas = $("#canvas");
     var emptyColor = "#ffffff"

     function initArray(w, h) {
   var imageArray = [];
   for (var i = 0; i < h; i++) {
       var row = [];
       imageArray.push(row);
       for (var j = 0; j < w; j++) {
     row.push(0);
       }
   }
   return imageArray;
     }

     function getActiveColorId() {
   return parseInt($("input:radio[name=color]:checked").val(), 10);
     }


     function getColorCode(colorId) {
         if (!colorId || colorId === 0) {
           return "#ffffff";
         } else {
           return "#" + $("#color" + colorId).val();
        }
     }


     function drawCanvas(array) {
   $canvas.html('')
   array.forEach(function(subArray, i) {
       var $row = $("<div class='row'></div>").appendTo($canvas);
       subArray.forEach(function(cell, j) {
     var color = getColorCode(cell)
     var $cell = $("<div class='cell' style='background-color:" + color + "'></div>").appendTo($row)
     $cell.on("mousedown", function(e) {
         var colorId = getActiveColorId();
         var colorCode = getColorCode(colorId)
         if (e.which === 1 && array[i][j] != colorId) {
       array[i][j] = colorId;
       $cell.css("background-color", colorCode);
         } else {
       array[i][j] = 0
       $cell.css("background-color", emptyColor);
         }
     });
     $cell.on("mouseenter", function(e) {
         var colorId = getActiveColorId();
         var colorCode = getColorCode(colorId);
         if (e.which === 1) {
       array[i][j] = colorId;
       $cell.css("background-color", colorCode)
         }
         if (e.which === 3) {
       array[i][j] = 0;
       $cell.css("background-color", emptyColor);
         }
         e.preventDefault();
         e.stopPropagation();
     })
       })
   })
     }
     // change to 24x24  (was 50x50)
     var a = initArray(24, 24);
     drawCanvas(a);
     $(".color").each(function() {
   var $input = $(this);
   $input.css("background-color", "#" + $input.val());
   $input.on("change keyup", function() {
       $input.css("background-color", "#" + $input.val());
   })
     })

     $("#reset").on("click", function() {
   a = initArray( 24, 24);
   drawCanvas(a);
     })



     $("#print").on("click", function() {
   var str = generateAscii( a, $("#chars").val() );
   console.log( str );
   $("#out").val( str );
     })

     $("#read").on("click", function() {
   var str = $("#out").val();
   a = parseAscii( str, $("#chars").val() );
   drawCanvas(a);
   console.log(a);
     })



     $("#redraw").on("click", function() {
   drawCanvas(a);
     })

     $("#palette").on("click", function() {
   generateColorPalette();
   drawCanvas(a);
     })

     $("#design").on("click", function() {
       var design = randomDesign();
       a = parseAscii( design, $("#chars").val() );
       drawCanvas( a );
       $("#png-out").prop("src", generatePNG());
       $("#out").val( design );
      })

     $("#png").on("click", function() {
               $("#png-out").prop("src", generatePNG());
   //window.open(generatePNG(), "_blank");;
     })


     $("#grid").on("change", function() {
   if (this.checked) {
       $canvas.addClass("grid");
   } else {
       $canvas.removeClass("grid");
   }
     })

     function selectColor(colorCode) {
   $("#c" + colorCode).prop("checked", true);
     }

     $(document).on('keydown', function(e) {
   var key = e.which;
   switch (key) {
       case 49: // 1
     selectColor(1);
     break;

       case 50: // 2
     selectColor(2);
     break;

       case 51: //3
     selectColor(3);
     break;

       case 52: //4
     selectColor(4);
     break;

       case 53: //5
     selectColor(5);
     break;

       case 54: //6
     selectColor(6);
     break;

       case 71: //g
     $("#grid").click();
     break;

       case 80: //p
     generateColorPalette();
     drawCanvas(a);
     break;

       case 82: //r
     drawCanvas(a);
     break
   }
   //console.log(key)
     })


     function setFieldColor(id, hexColor) {
   $("#color" + id).val(hexColor).css("background-color", "#" + hexColor);
     }

     function generateRandomColor() {
   var activeId = getActiveColorId();
   var color = randomHexColor();
   setFieldColor(activeId, color);

     }

     function generateColorPalette() {
   var hex = randomHexColor();
   var hsl = RGBToHSL(hexToRGB(hex));

   var h = hsl[0];
   var s = hsl[1];
   var l = hsl[2];
   var h1 = (h + 0) % 360;
   var h2 = (h + 0) % 360;
   var h3 = (h + 0) % 360;
   var h4 = (h + 0) % 360;
   var h5 = (h + 320) % 360

   var c1 = HSLToRGB(h1, 1, 0.1);
   var c2 = HSLToRGB(h2, 1, 0.2);
   var c3 = HSLToRGB(h3, 1, 0.45);
   var c4 = HSLToRGB(h4, 1, 0.7);
   var c5 = HSLToRGB(h5, 1, 0.8);

   setFieldColor(1, RGBToHex(c1));
   setFieldColor(2, RGBToHex(c2));
   setFieldColor(3, RGBToHex(c3));
   setFieldColor(4, RGBToHex(c4));
   setFieldColor(5, RGBToHex(c5));

     }

     function generatePNG(){
   var canvas = document.createElement("canvas");
   var data = a;
   var colors = [0,1,2,3,4,5,6].map(function(id){if(id){return "#" + $("#color"+id).val();}})

   var size = parseInt($("#pngPixelSize").val(), 10);
   canvas.width = size * data[1].length;
   canvas.height = size * data.length;
   var ctx = canvas.getContext('2d');
   for (var j = 0; j < data.length; j++) {
       var row = data[j];
       for (var i = 0; i < row.length; i++) {
     var color = colors[row[i]];
     if (color) {
         ctx.fillStyle = color;
         ctx.fillRect(i * size, j * size, size, size);
     }
       }
   }
   return canvas.toDataURL();
     }

  ////////////////////////////////
  // add random design on startup

  var design = randomDesign();
  a = parseAscii( design, $("#chars").val() );
  drawCanvas( a );
  $("#png-out").prop("src", generatePNG());
  $("#out").val( design );

 };   // onload function



