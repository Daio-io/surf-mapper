'use strict';

module.exports = function() {
  
  function initialize() {
    let mapOptions = {
      center: { lat: 51.477427, lng: -3.693906},
      zoom: 8
    };
    let map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  }

  google.maps.event.addDomListener(window, 'load', initialize);
  
};