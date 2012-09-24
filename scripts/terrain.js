/*  terrain.js
 *  JavaScript file for Wesnoth Canvas
 *  last updated 24 Sep 12
 */

var tmap = {};

function createTransitionMap(map) {
  tmap = {};
  $.each(map, function(row) {
    $.each(map[row], function(col) {
      var that = this;
      
      /* If the hex coordinates are:
       * 
       *  [even, any]:  NW: -1,-0  N: -0,-1  NE: +1,+0
       *                SW: -1,+1  S: +0,+1  SE: +1,+1
       *                
       *  [odd,  any]:  NW: -1,-1  N: -0,-1  NE: +1,-1
       *                SW: -1,+0  S: +0,+1  SE: +1,+0
       */
      
      tmap[col + ',' + row] = {};
      
      // This hex’s terrain value
      if (tmap[col + ',' + row][that.hexValue()]) {
        tmap[col + ',' + row][that.hexValue()] += 1;
      } else {
        tmap[col + ',' + row][that.hexValue()] = 1;
      }
            
      if (col.isEven()) {
        // SE
        if (row < map.length -1 && col < map[0].length -1)
        tmap[col + ',' + row][map[row+1][col+1].hexValue()] ?
          tmap[col + ',' + row][map[row+1][col+1].hexValue()] += 2 :
          tmap[col + ',' + row][map[row+1][col+1].hexValue()] = 2;
        // S
        if (row < map[0].length -1)
        tmap[col + ',' + row][map[row+1][col].hexValue()] ?
          tmap[col + ',' + row][map[row+1][col].hexValue()] += 4 :
          tmap[col + ',' + row][map[row+1][col].hexValue()] = 4;
        // SW
        if (col > 0 && row < map.length -1)
        tmap[col + ',' + row][map[row+1][col-1].hexValue()] ?
          tmap[col + ',' + row][map[row+1][col-1].hexValue()] += 8 :
          tmap[col + ',' + row][map[row+1][col-1].hexValue()] = 8;
        // NW
        if (col > 0)
        tmap[col + ',' + row][map[row][col-1].hexValue()] ?
          tmap[col + ',' + row][map[row][col-1].hexValue()] += 16 :
          tmap[col + ',' + row][map[row][col-1].hexValue()] = 16;
        // N
        if (row > 0)
        tmap[col + ',' + row][map[row-1][col].hexValue()] ?
          tmap[col + ',' + row][map[row-1][col].hexValue()] += 32 :
          tmap[col + ',' + row][map[row-1][col].hexValue()] = 32;
        // NE
        if (col < map[0].length -1)
        tmap[col + ',' + row][map[row][col+1].hexValue()] ?
          tmap[col + ',' + row][map[row][col+1].hexValue()] += 64 :
          tmap[col + ',' + row][map[row][col+1].hexValue()] = 64;
      } else {
        // SE
        if (col < map[0].length -1)
        tmap[col + ',' + row][map[row][col+1].hexValue()] ?
          tmap[col + ',' + row][map[row][col+1].hexValue()] += 2 :
          tmap[col + ',' + row][map[row][col+1].hexValue()] = 2;
        // S
        if (row < map.length -1)
        tmap[col + ',' + row][map[row+1][col].hexValue()] ?
          tmap[col + ',' + row][map[row+1][col].hexValue()] += 4 :
          tmap[col + ',' + row][map[row+1][col].hexValue()] = 4;
        // SW
        if (col > 0)
        tmap[col + ',' + row][map[row][col-1].hexValue()] ?
          tmap[col + ',' + row][map[row][col-1].hexValue()] += 8 :
          tmap[col + ',' + row][map[row][col-1].hexValue()] = 8;
        // NW
        if (col > 0 && row > 0)
        tmap[col + ',' + row][map[row-1][col-1].hexValue()] ?
          tmap[col + ',' + row][map[row-1][col-1].hexValue()] += 16 :
          tmap[col + ',' + row][map[row-1][col-1].hexValue()] = 16;
        // N
        if (row > 0)
        tmap[col + ',' + row][map[row-1][col].hexValue()] ?
          tmap[col + ',' + row][map[row-1][col].hexValue()] += 32 :
          tmap[col + ',' + row][map[row-1][col].hexValue()] = 32;
        // NE
        if (col < map[0].length -1 && row > 0)
        tmap[col + ',' + row][map[row-1][col+1].hexValue()] ?
          tmap[col + ',' + row][map[row-1][col+1].hexValue()] += 64 :
          tmap[col + ',' + row][map[row-1][col+1].hexValue()] = 64;
      }
    });
  });
  return tmap;
}