/*  grid.js
 *  JavaScript file for Wesnoth Canvas
 *  last updated 8 Jun 12
 */

var tile = new Image();
var topSelect = 'images/misc/hover-hex-top.png';
var botSelect = 'images/misc/hover-hex-bottom.png';
var brush = 'images/editor/brush.png';

var canvas;
var effects;
var grid;
var hexes;

var HEX_HEIGHT = 72;
var HEX_WIDTH = 72;

var MAP_HEIGHT;
var MAP_WIDTH;

var debug = 0;

preload(terrainTable);

function preload(arrayOfImages) {
  var images = [];
  $.each(arrayOfImages, function(key, value) {
    if (value['symbol']) { 
      images[key] = new Image();
      images[key].src = 'images/terrain/' + value['symbol'];
    }
  });
  images['hover-hex-top'] = new Image(); images['hover-hex-top'].src = 'images/misc/hover-hex-top.png';
  images['hover-hex-bottom'] = new Image(); images['hover-hex-bottom'].src = 'images/misc/hover-hex-bottom.png';
  images['hexgrid'] = new Image(); images['hexgrid'].src = 'ui/hexgrid.png';
}

$(document).ready(function() {
  canvas = document.getElementById('game').getContext('2d');
  effects = document.getElementById('effects').getContext('2d');
  transitions = document.getElementById('transitions').getContext('2d');
  
  $('#code').css('width', $(window).width() - 22 + "px");
    
  $('#mapChoice').change(function() {
    loadMap(readMap('maps/' + ($('#mapChoice option:selected').html())));
  });
  
  $('#show-hide').click(function() {
    if ($('#show-hide').html() == 'Show Map Code') {
      $('#show-hide').html('Hide Map Code');
      $('#code').show();
      $('#code').focus(); 
      $('#code').css('width', $(window).width() - 22 + "px");
    }
    else {
      $('#show-hide').html('Show Map Code');
      $('#code').hide();
    }
    
      //$('#code').focus(); 
      //$('#code').css('width', $(window).width() - 22 + "px");
  });
    
  $('#code').focusout(function() {
    try {
      loadMap(parseMap($('#code').val().trim()))
    } catch(err) {
      
    };
  });
  
  document.addEventListener('mousemove', mouseMove, true);
});

function loadMap(map) {
  MAP_WIDTH = map[0].length;
  MAP_HEIGHT = map.length;
  $.each([ 'game', 'effects', 'transitions' ], function() {
    document.getElementById(this).width = (HEX_WIDTH*.75*MAP_WIDTH)-(HEX_WIDTH*.25);
    document.getElementById(this).height = (HEX_HEIGHT*MAP_HEIGHT)-(HEX_HEIGHT*.5);
  });
  // Rows are index, columns are i
  $.each(map, function(row) {
    $.each(map[row], function(col) {
      var that = this;
      var flag = false;
      // Starting points
      if ($.inArray(that.substr(0,1),['1','2','3','4','5','6','7','8','9']) != -1 ) {
        that = that.substr(1,(that.length-1));
        flag = true;
      }
      // Check neighboring tiles. Even checks W, NW vertices; odd checks SW, W, NW and NE vertices.
            
      // Tiles with layers
      if (terrainTable[that] != undefined) {
        draw('images/terrain/' + terrainTable[that]['symbol'],col,row);
      } else if (terrainTable[that.split('^')[0]] != undefined) {
        draw('images/terrain/' + terrainTable[that.split('^')[0]]['symbol'],col,row);
        if (terrainTable['^' + that.split('^')[1]] != undefined) {
          draw('images/terrain/' + terrainTable['^' + that.split('^')[1]]['symbol'],col,row);
        }
      }


      if (flag == true) {          draw('images/editor/tool-overlay-starting-position.png',col,row);
      }
    });
  });

/* This will paint hexes on the map. I'm turning it off for now.
  for(var j=0;j<MAP_HEIGHT;j++) {
    for(var i=0;i<MAP_WIDTH;i++) {
      drawGrid('ui/hexgrid.png',i,j);
    }
  }
*/
}


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

  if (hexes) {
    var yOffset = 0;
    if (((hexes[0]) % 2) == 1) { yOffset = HEX_HEIGHT/2; }
      effects.clearRect((hexes[0])*HEX_WIDTH*.75-(HEX_WIDTH*.25),(hexes[1])*HEX_HEIGHT-yOffset,HEX_WIDTH,HEX_HEIGHT);
  }
  
  hexes = whatHex(mouseX, mouseY);

  if ((hexes[0] == undefined) || (hexes[1] == undefined)) {
    $('#hex').html('&nbsp;');  
  } else {
    $('#hex').html('(' + hexes[0] + ',' + hexes[1] + ')');
    if((hexes[0] >= 0) && (hexes[1] >= 0)) {
      var eWidth = effects.width
      //effects.clearRect(0,0,document.getElementById('effects').width,document.getElementById('effects').height);
      drawSelect(topSelect,hexes[0],hexes[1]);
      drawSelect(botSelect,hexes[0],hexes[1]);
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
  var col = Math.floor((x+(HEX_WIDTH*.25))/(HEX_WIDTH/4));
  var row = Math.floor(y/(HEX_HEIGHT/2));

  var tileX;
  var tileY;

  // Odd columns
  if (((col % 6) == 1) || ((col % 6) == 2)) {
    tileX = Math.floor((col+2)/3)-1;
    tileY = (Math.floor(row/2));
  }
  // Even columns
  else if (((col % 6) == 4) || ((col % 6) == 5)) {
    tileX = Math.floor((col+2)/3)-1;
    tileY = Math.floor((row+1)/2);
  }
  else if ((col % 3) == 0) { // shared area between columns
    if ((col % 6) == 3) { // between first and second columns
      if (barycentricTest(x,y,(col*HEX_WIDTH/4)-(HEX_WIDTH*.25),(Math.floor((row+1)/2)*HEX_HEIGHT),(col*HEX_WIDTH/4)-(HEX_WIDTH*.25),((Math.floor(row/2))*HEX_HEIGHT)+(HEX_HEIGHT/2),((col+1)*HEX_WIDTH/4-(HEX_WIDTH*.25)),((Math.floor(row/2))*HEX_HEIGHT)+(HEX_HEIGHT/2))) {
        tileX = (col/3)-1;
        tileY = (Math.floor(row/2));
      } else {
        tileX = (col/3);
        tileY = Math.floor((row+1)/2);
      }
    } else {
      if (barycentricTest(x,y,(col*HEX_WIDTH/4)-(HEX_WIDTH*.25),((Math.floor(row/2))*HEX_HEIGHT)+(HEX_HEIGHT/2),(col*HEX_WIDTH/4)-(HEX_WIDTH*.25),(Math.floor((row+1)/2)*HEX_HEIGHT),((col+1)*HEX_WIDTH/4)-(HEX_WIDTH*.25),(Math.floor((row+1)/2)*HEX_HEIGHT))) {
        tileX = (col/3)-1;
        tileY = Math.floor((row+1)/2);
      } else {
        tileX = (col/3);
        tileY = (Math.floor(row/2));
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
  canvas.drawImage(tile,x*HEX_WIDTH*.75-(HEX_WIDTH*.25),y*HEX_HEIGHT-yOffset);
}

function drawSelect(what,x,y) {
  tile.src = what;
  var xOffset = 0;
  var yOffset = 0;
  if ((x % 2) == 1) { yOffset = HEX_HEIGHT/2; }
  effects.drawImage(tile,x*HEX_WIDTH*.75-(HEX_WIDTH*.25),y*HEX_HEIGHT-yOffset);
}

function drawGrid(what,x,y) {
  tile.src = what;
  var xOffset = 0;
  var yOffset = 0;
  if ((x % 2) == 1) { yOffset = HEX_HEIGHT/2; }
  grid.drawImage(tile,x*HEX_WIDTH*.75-(HEX_WIDTH*.25),y*HEX_HEIGHT-yOffset);
}

function drawTransition(what,x,y) {
  tile.src = what;
  var xOffset = 0;
  var yOffset = 0;
  if ((x % 2) == 1) { yOffset = HEX_HEIGHT/2; }
  transitions.drawImage(tile,x*HEX_WIDTH*.75-(HEX_WIDTH*.25),y*HEX_HEIGHT-yOffset);
}
