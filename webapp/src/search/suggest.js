'use strict';

import {prefs} from './suggest.prefs.js';

export var Suggest = {

  init: function() {

    let beaches = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.whitespace,
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      prefetch: prefs
    });

    _configueSearchBox(beaches);
    beaches.initialize();
    return beaches;
  }
};

function _configueSearchBox(_beaches) {

  $('#search-box').typeahead({
      hint: true,
      highlight: true,
      minLength: 1
    },
    {
      name: 'beaches',
      source: _beaches
    }).on('typeahead:selected typeahead:autocompleted', function(e, datum) {

      // Test query adding marker - work to be refactored and moved into a module
      let spotId = datum.match(/([0-9])\w+/g);
      $.ajax({
        url: 'surfcard/' + spotId
      }).done(function(data) {

        let infowindow = new google.maps.InfoWindow({
          content: data.surfcard
        });

        let position = new google.maps.LatLng('53.4722454', '-2.2235922');

        let marker = new google.maps.Marker({
          position: position,
          map: global.map,
          animation: google.maps.Animation.DROP
        });

        global.map.panTo(marker.getPosition());
        infowindow.open(global.map, marker);
        
      });

    });

}
