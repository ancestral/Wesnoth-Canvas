/* map.js
 * JavaScript file for Wesnoth Canvas
 * last updated 30 Apr 12
 */
 
Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {         
      this.splice(i, 1);
      i--;
      }
    }
  return this;
};

function readMap(map) {
  var mapData;
  $.ajax({
    async: false,
    url: map,
    success: function(data) {
      mapData = data.split('\n');
      $.each(mapData, function(index) {
        mapData[index] = this.replace(/\s*/g,'').split(',');
        if (/=/.test(mapData[index])) {
          mapData[index] = '';            
        }
      });
    }
  });
  return mapData.clean('');
}
