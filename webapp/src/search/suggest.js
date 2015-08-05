'use strict';

import {prefs} from './suggest.prefs.js';

export var Suggest = {

  init: function() {

    let beaches = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.whitespace('name'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      identify: function(obj) { return obj.name; },
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

      let d = datum.match(/([0-9])\w+/g);
      console.log(d[0]);

    });

}
