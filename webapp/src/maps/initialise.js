'use strict';

const mapOptions = require('./map.options.js');

module.exports = function() {

  function initialize() {
    global.map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  }

  google.maps.event.addDomListener(window, 'load', initialize);

};