'use strict';

let pref = {
  url: 'https://beach-suggest.herokuapp.com/beach?q=',
  filter: function(response) {
    return response.map(function(data){
      return data.name + ' ' + data.id;
    })
  }
};

var beaches = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.whitespace,
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: pref
});

$('#search-box').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
  },
  {
    name: 'beaches',
    source: beaches
  }).on('typeahead:selected typeahead:autocompleted', function(e, datum) {
   
    let d = datum.match(/([0-9])\w+/g);
    console.log(d[0]);
    
  });
