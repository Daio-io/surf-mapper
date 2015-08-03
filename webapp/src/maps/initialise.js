'use strict';

import {mapOptions} from './map.options.js';

export function initMap() {

  function initialize() {
    global.map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  }

  google.maps.event.addDomListener(window, 'load', initialize);

};