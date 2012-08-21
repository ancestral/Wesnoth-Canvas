/*  grid.js
 *  JavaScript file for Wesnoth Canvas
 *  last updated 21 Aug 12
 */

var Wesnoth = Wesnoth || (function() {

var tile = new Image();
var hexSelect = dataDirectory + '../images/misc/hover-hex.png';
var brush = dataDirectory + '../images/editor/brush.png';

var canvas;
var effects;
var grid;
var currentHex;
var lastHex;
var status1;
var transitions;
var game;

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
      images[key].src = dataDirectory + 'core/images/terrain/' + value['symbol'];
    }
  });
  images['hover-hex'] = new Image(); images['hover-hex'].src = dataDirectory + '../images/misc/hover-hex.png';
  images['hexgrid'] = new Image(); images['hexgrid'].src = 'ui/hexgrid.png';
}

$(document).ready(function() {
  game = document.getElementById('game').getContext('2d');
  status1 = document.getElementById('status1').getContext('2d');
  effects = document.getElementById('effects').getContext('2d');
  transitions = document.getElementById('transitions').getContext('2d');
  
  //status.fillRect(0,0,status.width,status.height);
  
  $('#code').focus();
  
  $(document).bind('keyup', function(e) {
    if ($('#console').is(':visible')) { $('#console').focus(); }
  });

  /* 
   *  Reference: Keyboard Map
   *
   *              esc—— F1——— F2——— F3——— F4——— F5——— F6——— F7——— F8——— F9——— F10—— F11—— F12—— F13—————+
   *             |  27 | 112 | 113 | 114 | 115 | 116 | 117 | 118 | 119 | 120 | 121 | 122 | 123 |  ???  |
   *            ` ——— 1———— 2———— 3———— 4———— 5———— 6———— 7———— 8———— 9———— 0———— - ——— = ——— delete——+
   *           | 192 |  49 |  50 |  51 |  52 |  53 |  54 |  55 |  56 |  57 |  58 |  59 |  60 |   61  |
   *          tab———— Q———— W———— E———— R———— T———— Y———— U———— I———— O———— P———— [ ——— ] ——— \ ————+
   *         |   9   |  81 |  87 |  69 |  82 |  84 |  89 |  85 |  73 |  79 |  80 | 219 | 221 | 220 |
   *        caps————— A———— S———— D———— F———— G———— H———— J———— K———— L———— ; ——— ' ——— return————+
   *       |    20   |  65 |  83 |  68 |  70 |  71 |  72 |  74 |  75 |  76 | 186 | 222 |   13    |
   *      shift—————— Z———— X———— C———— V———— B———— N———— M———— , ——— . ——— / ——— shift—————————+
   *     |    16     |  90 |  88 |  67 |  86 |  66 |  78 |  77 | 188 | 190 | 191 |     16      |
   *    fn—— ctrl opt— command space—————————————————————————— command opt——+—————up————+—————+  
   *   |    | 17 | 18 |   91  |            32                 |   93  | 18 |     |  38 |     |
   *  +————+————+————+———————+———————————————————————————————+———————+————left——down——right—+
   *                                                                     |  37 |  40 |  39 |
   *                                                                    +—————+—————+—————+
   *
   */
  
  $(document).keydown(function(e) {
    var code = e.keyCode ? e.keyCode : e.which;   
    switch(code) {
      case 9:   if ($('#console').is(':visible')) { $('#console').hide(); }
                                 break;
      case 13:  if ($('#console').is(':visible')) { $('#console').val(''); }
                                 break;
      case 37:  moveLeft();      break;
      case 38:  moveUp();        break;
      case 39:  moveRight();     break;
      case 40:  moveDown();      break;
      case 192: toggleConsole(); break;
    }
  }); 
    
  $('#canvas').css("width", window.innerWidth - 48 + "px");
  $('#canvas').css("height", window.innerHeight - 72 + "px");
  $('#canvas').css("top", 48 + "px");
  $('#canvas').css("left", 24 + "px");
  
  $('#status1').css("left", 24 + "px");
  $('#status1').css("top", 24 + "px");
  
  loadMap(parseMap($('#code').val().trim()));  

  $('#console').css("left", 12 + "px");
  $('#console').css("top", window.innerHeight - 12 + "px");
  $('#console').css("width", window.innerWidth - 28 + "px");
  
  $(window).resize(function() {
    $('#canvas').css("width", window.innerWidth - 48 + "px");
    $('#canvas').css("height", window.innerHeight - 72 + "px");
    $('#console').css("top", window.innerHeight - 18 - $('#console').height() + "px");
    $('#console').css("width", window.innerWidth - 28 + "px");
  });
    
  $('#code').focusout(function() {
    try {
      loadMap(parseMap($('#code').val().trim()));
      $('#code').hide();
    } catch(err) {
      
    }
  });
  
  $('#console').focusout(function() {
    $('#console').hide();
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
      if ($.inArray(that.substr(0,1),['1','2','3','4','5','6','7','8','9']) !== -1 ) {
        that = that.substr(1,(that.length-1));
        flag = true;
      }
      // Check neighboring tiles. Even checks W, NW vertices; odd checks SW, W, NW and NE vertices.
            
      // Tiles with layers
      if (terrainTable[that] !== undefined) {
        draw(dataDirectory + 'core/images/terrain/' + terrainTable[that]['symbol'],col,row);
      } else if (terrainTable[that.split('^')[0]] !== undefined) {
        draw(dataDirectory + 'core/images/terrain/' + terrainTable[that.split('^')[0]]['symbol'],col,row);
        if (terrainTable['^' + that.split('^')[1]] !== undefined) {
          draw(dataDirectory + 'core/images/terrain/' + terrainTable['^' + that.split('^')[1]]['symbol'],col,row);
        }
      }
      
      if (flag === true) {
        draw(dataDirectory + '../images/editor/tool-overlay-starting-position.png',col,row);
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
  var mouseX;
  var mouseY;

  mouseX = e.offsetX;
  mouseY = e.offsetY;

  if (currentHex) {
    var yOffset = 0;
    if (((currentHex[0]) % 2) === 1) { yOffset = HEX_HEIGHT/2; }
      effects.clearRect((currentHex[0])*HEX_WIDTH*.75-(HEX_WIDTH*.25),(currentHex[1])*HEX_HEIGHT-yOffset,HEX_WIDTH,HEX_HEIGHT);
  }
  lastHex = currentHex;
  currentHex = whatHex(mouseX, mouseY);

  drawSelect(hexSelect,currentHex[0],currentHex[1]);
}

function moveLeft() {
  if ($('#game').position().left > -(HEX_WIDTH*3/4)) {
    $('.pane').css("left", 0);
  } else if ($('#game').position().left < 0) {
    $('.pane').css("left", $('#game').position().left + (HEX_WIDTH*3/4));
  }
}

function moveUp() {
  if ($('#game').position().top > -(HEX_WIDTH*.5)) {
    $('.pane').css("top", 0);
  } else if ($('#game').position().top < 0) {
    $('.pane').css("top", $('#game').position().top + (HEX_HEIGHT*.5));
  }
}

function moveRight() {
  var offX = ($('#game').position().left + $('#game').width()) - ($('#canvas').width());
  if (offX < (HEX_WIDTH*3/4)) {
    $('.pane').css("left", $('#game').position().left - offX);
  } else if (($('#game').position().left + $('#game').width()) > $('#canvas').width()) {
    $('.pane').css("left", $('#game').position().left - (HEX_WIDTH*3/4));
  }
}

function moveDown() {
  var offY = ($('#game').position().top + $('#game').height()) - ($('#canvas').height());
  if (offY < (HEX_HEIGHT*.5)) {
    $('.pane').css("top", $('#game').position().top - offY);
  } else if (($('#game').position().top + $('#game').height() - (HEX_HEIGHT*.5)) > $('#canvas').height()) {
    $('.pane').css("top", $('#game').position().top - (HEX_HEIGHT*.5));
  }
}

function toggleConsole() {
  $('#console').css("top", window.innerHeight - $('#console').height() - 18);
  $('#console').toggle();
}

function toggleCode() {
  $('#code').toggle();
  $('#code').focus();
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
  if (((col % 6) === 1) || ((col % 6) === 2)) {
    tileX = Math.floor((col+2)/3)-1;
    tileY = (Math.floor(row/2));
  }
  // Even columns
  else if (((col % 6) === 4) || ((col % 6) === 5)) {
    tileX = Math.floor((col+2)/3)-1;
    tileY = Math.floor((row+1)/2);
  }
  else if ((col % 3) === 0) { // shared area between columns
    if ((col % 6) === 3) { // between first and second columns
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
  if ((x % 2) === 1) { yOffset = HEX_HEIGHT/2; }
  game.drawImage(tile,x*HEX_WIDTH*.75-(HEX_WIDTH*.25),y*HEX_HEIGHT-yOffset);
}

function drawSelect(what,x,y) {
  tile.src = what;
  var xOffset = 0;
  var yOffset = 0;
  if ((x % 2) === 1) { yOffset = HEX_HEIGHT/2; }
  effects.drawImage(tile,x*HEX_WIDTH*.75-(HEX_WIDTH*.25),y*HEX_HEIGHT-yOffset);
  if (currentHex !== lastHex) {
    status1.clearRect(0,0,400,24);
    status1.shadowColor = "#000";
    status1.shadowOffsetX = 2;
    status1.shadowOffsetY = 2;
    status1.textAlign = "right";
    status1.font = "18px Gentium Basic";
    status1.fillStyle = "#eee";
    status1.fillText(x,18,16);
    status1.textAlign = "left";
    status1.fillText(',',19,16);
    status1.fillText(y,24,16);

    if (mapData[y][x].indexOf('^') >= 0) {
      status1.fillText(terrainTable[mapData[y][x].hexValue().split('^')[0]]['name'] + ', ' + terrainTable['^' + mapData[y][x].split('^')[1]]['name'],64,16);
    } else {
      status1.fillText(terrainTable[mapData[y][x].hexValue()]['name'],64,16);
    }
  }
}

function drawGrid(what,x,y) {
  tile.src = what;
  var xOffset = 0;
  var yOffset = 0;
  if ((x % 2) === 1) { yOffset = HEX_HEIGHT/2; }
  grid.drawImage(tile,x*HEX_WIDTH*.75-(HEX_WIDTH*.25),y*HEX_HEIGHT-yOffset);
}

function drawTransition(what,x,y) {
  tile.src = what;
  var xOffset = 0;
  var yOffset = 0;
  if ((x % 2) === 1) { yOffset = HEX_HEIGHT/2; }
  transitions.drawImage(tile,x*HEX_WIDTH*.75-(HEX_WIDTH*.25),y*HEX_HEIGHT-yOffset);
}

})();