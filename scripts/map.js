/*  map.js
 *  JavaScript file for Wesnoth Canvas
 *  last updated 8 Jun 12
 */

var mapData;

Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {         
      this.splice(i, 1);
      i--;
      }
    }
  return this;
};

Object.prototype.hasGroup = function (group) {
  if (this['group'] == group) {
    return true;
  } else {
    if ($.inArray(group, this['group']) != -1) {
      return true;
    } else {
      return false;
    }
  }
}

String.prototype.hexValue = function() {
  var that;
  that = this;
  if ($.inArray(this.substr(0,1),['1','2','3','4','5','6','7','8','9']) != -1 ) {
    that = this.substr(1,(this.length-1));
  }
  if (terrainTable[that] == undefined) {
    if (terrainTable[that.split('^')[0]]) {
      return that.split('^')[0];
    } else {
      return null;
    }
  } else {
  return that;
  }
};

String.prototype.isTerrain = function() {
  if (terrainTable[this] == undefined) {
    if (terrainTable[this.split('^')[0]]) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
};

function readMap(map) {
  $.ajax({
    async: false,
    dataType: 'text',
    url: map,
    success: function(data) {
      return parseMap(data);
    }
  });
};

function parseMap(data) {
  mapData = data.toString().split('\n');
  $.each(mapData, function(index) {
    mapData[index] = this.replace(/\s*/g,'').split(',');
    if (/=/.test(mapData[index])) {
      mapData[index] = '';            
    }
  });
  return mapData.clean('');
};
