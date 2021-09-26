/////////////////////////////////////////
//   support functions for colors



function randomHex256() {
  var n = Math.floor(Math.random() * 256);
  //console.log(n);
  return ("0" + n.toString(16)).slice(-2);
    }

function randomHexColor() {
  return randomHex256() + randomHex256() + randomHex256();
    }

function RGBToHSL(r, g, b) {
  if (Array.isArray(r)) {
      g = r[1];
      b = r[2];
      r = r[0];
  }
  var r = r / 255;
  var g = g / 255;
  var b = b / 255;
  var cMax = Math.max(r, g, b);
  var cMin = Math.min(r, g, b);
  var delta = cMax - cMin;
  if (delta == 0) {
      var h = 0;
  } else if (cMax == r) {
      var h = 60 * (((g - b) / delta) % 6);
  } else if (cMax == g) {
      var h = 60 * ((b - r) / delta + 2);
  } else if (cMax == b) {
      var h = 60 * ((r - g) / delta + 4);
  }
  if (h < 0) {
      h += 360;
  }
  var l = (cMax + cMin) / 2;

  if (delta == 0) {
      var s = 0;
  } else {
      var s = delta / (1 - Math.abs(2 * l - 1));
  }
  //console.log("H:", h, " S:", s, " L:", l);
  return [h, s, l]
    }

function HSLToRGB(h, s, l) {
  if (Array.isArray(h)) {
      s = h[1];
      l = h[2];
      h = h[0];
  }
  var c = (1 - Math.abs(2 * l - 1)) * s;
  var x = c * (1 - Math.abs((h / 60) % 2 - 1));
  var m = l - c / 2;
  if (h >= 0 && h < 60) {
      var r = c;
      var g = x;
      var b = 0;
  } else if (h >= 60 && h < 120) {
      var r = x;
      var g = c;
      var b = 0;
  } else if (h >= 120 && h < 180) {
      var r = 0;
      var g = c;
      var b = x;
  } else if (h >= 180 && h < 240) {
      var r = 0;
      var g = x;
      var b = c;
  } else if (h >= 240 && h < 300) {
      var r = x;
      var g = 0;
      var b = c;
  } else if (h >= 300 && h < 360) {
      var r = c;
      var g = 0;
      var b = x;
  }
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);
  return [r, g, b]
    }


function RGBToHex(r, g, b) {
  if (Array.isArray(r)) {
      g = r[1];
      b = r[2];
      r = r[0];
  }
  return ("0" + r.toString(16)).slice(-2) + ("0" + g.toString(16)).slice(-2) + ("0" + b.toString(16)).slice(-2);
    }

function hexToRGB(hex) {
  return [parseInt(hex.slice(0, 2), 16),
    parseInt(hex.slice(2, 4), 16),
    parseInt(hex.slice(4, 6), 16)
  ]

    }


function testColor() {
  var rch = randomHexColor();
  var rc = hexToRGB(rch);
  var hsl = RGBToHSL(rc);
  var rgb = HSLToRGB(hsl)
  var hx = RGBToHex(rgb);
  console.log(rch);
  console.log(rc);
  console.log(hsl);
  console.log(rgb);
  console.log(hx);
    }

