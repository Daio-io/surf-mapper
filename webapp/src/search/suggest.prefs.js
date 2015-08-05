'use strict';

export var prefs = {
  url: 'https://beach-suggest.herokuapp.com/beach?q=',
  filter: function(response) {
    return response.map(_stringfyNameAndId)
  }
};

function _stringfyNameAndId(data){
  return data.name + ' ' + data.id;
}