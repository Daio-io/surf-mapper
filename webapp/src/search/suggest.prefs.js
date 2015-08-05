'use strict';

export var prefs = {
  url: 'https://beach-suggest.herokuapp.com/beach?q=',
  filter: function(response) {
    return response.map(_mapData);
  }
};

function _mapData(data){
  return {name: data.name, id: data.id}
}