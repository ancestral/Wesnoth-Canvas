/* grid.js
 * JavaScript file for Wesnoth Canvas
 * last updated 27 Apr 12
 */

var tile = new Image();
var green = 'images/terrain/grass/green.png';
var desert = 'images/terrain/sand/desert.png';
var hills = 'images/terrain/hills/regular.png';
var cave = 'images/terrain/cave/floor.png';
var forest = 'images/terrain/forest/deciduous-summer3.png';
var light = 'images/terrain/light.png';
var topSelect = 'images/misc/hover-hex-top.png';
var botSelect = 'images/misc/hover-hex-bottom.png';

var canvas;
var effects;

preload([ green, desert, hills, cave, forest, light ]);

function preload(arrayOfImages) {
  $(arrayOfImages).each(function(){
    (new Image()).src = this;
  });
}

function init() {
  var canvas = document.getElementById('game').getContext('2d');
  var effects = document.getElementById('effects').getContext('2d');
  
  var MAP_HEIGHT = 6;
  var MAP_WIDTH = 3;
  var HEX_HEIGHT = 72;
  var HEX_WIDTH = 72;
  
  draw(green,0,0);
  draw(desert,0,1);
  draw(hills,0,2);
  draw(cave,0,3);
  draw(green,0,4);
  draw(desert,0,5);
  
  draw(hills,1,0);
  draw(cave,1,1);
  draw(green,1,2);
  draw(desert,1,3);
  draw(hills,1,4);
  draw(cave,1,5);
  
  draw(green,2,0);
  draw(desert,2,1);
  draw(hills,2,2);
  draw(cave,2,3);
  draw(hills,2,4);
  draw(desert,2,5);
  
  draw(green,3,0);
  draw(green,3,1);
  draw(hills,3,2);
  draw(hills,3,3);
  draw(green,3,4);
  draw(green,3,5);
  
  drawLayer(forest,0,2);
  drawLayer(forest,1,2);
    
  document.addEventListener('mousemove', mouseMove, true);
  
  function mouseMove(e) {
    var mouseX, mouseY;

    if(e.offsetX) {
      mouseX = e.offsetX;
      mouseY = e.offsetY;
    }
    else if(e.layerX) {
      mouseX = e.layerX;
      mouseY = e.layerY;
    }  
    
    var hexes = whatHex(mouseX, mouseY);
    
    if ((hexes[0] == undefined) || (hexes[1] == undefined)) {
      $('#hex').html('&nbsp');  
    } else {
      $('#hex').html('(' + hexes[0] + ',' + hexes[1] + ')');
      if((hexes[0] != 0) && (hexes[1] != 0)) {
        effects.clearRect(0,0,800,600); //effects.width,effects.height);
        drawSelect(topSelect,hexes[0]-1,hexes[1]-1);
        drawSelect(botSelect,hexes[0]-1,hexes[1]-1);
      }
    }
  }
  
  function barycentricTest(x0, y0, x1, y1, x2, y2, x3, y3) {
    /*
              1---·      2---3
              |\  |      |??/|
              |?\ |  OR  |?/ |
              |??\|      |/  |
              2---3      1---·
    */
    var b0 =  ((x2 - x1) * (y3 - y1)) - ((x3 - x1) * (y2 - y1));
    var b1 = (((x2 - x0) * (y3 - y0)) - ((x3 - x0) * (y2 - y0))) / b0;
    var b2 = (((x3 - x0) * (y1 - y0)) - ((x1 - x0) * (y3 - y0))) / b0;
    var b3 = (((x1 - x0) * (y2 - y0)) - ((x2 - x0) * (y1 - y0))) / b0;
    
    if ((b1 >= 0) && (b2 >= 0) && (b3 >= 0)) {
      return true;
    } else {
      return false;
    }
  }
  
  function whatHex(x,y) {
    var col = Math.floor(x/(HEX_WIDTH/4));
    var row = Math.floor(y/(HEX_HEIGHT/2));
    
    var tileX;
    var tileY;

    // Odd columns
    if (((col % 6) == 1) || ((col % 6) == 2)) {
      tileX = Math.floor((col+2)/3);
      tileY = (Math.floor(row/2)+1);
    }
    // Even columns
    else if (((col % 6) == 4) || ((col % 6) == 5)) {
      tileX = Math.floor((col+2)/3);
      tileY = Math.floor((row+1)/2);
    }
    else if ((col % 3) == 0) { // shared area between columns
      if ((col % 6) == 3) { // between first and second columns
        if (barycentricTest(x,y,(col*HEX_WIDTH/4),(Math.floor((row+1)/2)*HEX_HEIGHT),(col*HEX_WIDTH/4),((Math.floor(row/2))*HEX_HEIGHT)+(HEX_HEIGHT/2),((col+1)*HEX_WIDTH/4),((Math.floor(row/2))*HEX_HEIGHT)+(HEX_HEIGHT/2))) {
          tileX = (col/3);
          tileY = (Math.floor(row/2)+1);
        } else {
          tileX = (col/3)+1;
          tileY = Math.floor((row+1)/2);
        }
      } else {
        if (barycentricTest(x,y,(col*HEX_WIDTH/4),((Math.floor(row/2))*HEX_HEIGHT)+(HEX_HEIGHT/2),(col*HEX_WIDTH/4),(Math.floor((row+1)/2)*HEX_HEIGHT),((col+1)*HEX_WIDTH/4),(Math.floor((row+1)/2)*HEX_HEIGHT))) {
          tileX = (col/3);
          tileY = Math.floor((row+1)/2);
        } else {
          tileX = (col/3)+1;
          tileY = (Math.floor(row/2)+1);
        }
      }
    }
    return [tileX, tileY];
  }
    
  function draw(what,x,y) {
    tile.src = what;
    var xOffset = 0;
    var yOffset = 0;
    if ((x % 2) == 1) { yOffset = HEX_HEIGHT/2; }
    canvas.drawImage(tile,x*HEX_WIDTH*.75,y*HEX_HEIGHT+yOffset)
  }
  
  function drawSelect(what,x,y) {
    tile.src = what;
    var xOffset = 0;
    var yOffset = 0;
    if ((x % 2) == 1) { yOffset = HEX_HEIGHT/2; }
    effects.drawImage(tile,x*HEX_WIDTH*.75,y*HEX_HEIGHT+yOffset)
  }
  
  function drawLayer(what,x,y) {
    tile.src = what;
    canvas.drawImage(tile,(x*HEX_WIDTH*.75)-.5*HEX_WIDTH,y*HEX_HEIGHT+(x*HEX_HEIGHT/2)-.5*HEX_HEIGHT);
  }
}