'use strict';

import {prefs} from './suggest.prefs.js';
import {PinDropper} from '../maps/pin.dropper.js'

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
      _requestSurfCard(datum);
    });

  $(window).keydown(function(e) {
    let isVisible = $('.search-container').css('display');
    if (e.keyCode === 32 && isVisible === 'none') {
      $('.search-container').show();
      $('.tt-input').focus();
    } else if (e.keyCode === 27 && isVisible !== 'none') {
      $('.search-container').hide();
    }
  });

}

function _requestSurfCard(datum) {

  let spotId = datum.match(/([0-9])\d*/g);
  $.ajax({
    url: 'surfcard/' + spotId
  }).done(function(data) {

    if (data.status === 'success') {
      $('.search-container').hide();
      PinDropper.dropNewPin(data.response);
    }

  });

}
