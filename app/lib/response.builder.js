'use strict';

const locator = require('./locator.client');
const surfdata = require('./surfdata.client');
const surfcards = require('surfcards');

module.exports = {
  
  buildResponse: function(spotid){
    
    let promises = [locator.getLocation(spotid), surfdata.getSurfData(spotid)];
    
    return Promise.all(promises).then(function(response){

      let mapped = response.map(_mapData);

      let locator = mapped[0];
      let surfData = mapped[1];
     
      let cardData = _buildCardData(locator, surfData);
      
      return surfcards.build(cardData);

    })
  }
  
};

function _mapData(data){
  return JSON.parse(data);
};

function _buildCardData(_locator, _surfData) {
  
  let data = {
    location: _locator[0].location,
    swell: [],
    time: [],
    windspeed: []
  };

  for (let i = 0; i < 5; i++){
    data.swell.push(_surfData[i].minSwell + '-' + _surfData[i].maxSwell);
    data.time.push(_surfData[i].time);
    data.windspeed.push(_surfData[i].wind);
  }
  
  return data;
  
}