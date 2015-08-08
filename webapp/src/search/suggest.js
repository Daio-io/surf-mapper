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
  
  $('.tt-input').focus(function() {
    $('.tt-hint').css('width', '150%');
    $('.tt-input').css('width', '150%');
  }).blur(function() {
    $('.tt-hint').css('width', '50%');
    $('.tt-input').css('width', '50%');
  }).val("");
}

function _requestSurfCard(datum) {

  let spotId = datum.match(/([0-9])\d*/g);
  $.ajax({
    url: 'surfcard/' + spotId
  }).done(function(data) {

    if (data.status === 'success') {
      $('.tt-input').blur().val('');
      PinDropper.dropNewPin(data.response);
    }

  });

}
