'use strict';

const locator = require('./locator.client');
const surfdata = require('./surfdata.client');
const surfcards = require('surfcards');

module.exports = {

  buildResponse: function(spotid) {

    let promises = [locator.getLocation(spotid), surfdata.getSurfData(spotid)];

    return Promise.all(promises).then(function(response) {
      let mapped = response.map(_mapData);
      let locator = mapped[0];
      let surfData = mapped[1];
      let cardData = _buildCardData(locator, surfData);
      let surfCard = surfcards.build(cardData);
      
      return {
        surfcard: surfCard,
        lat: locator[0].latitude,
        lng: locator[0].longitude
      }

    })
  }

};

function _mapData(data) {
  return JSON.parse(data);
}

function _buildCardData(_locator, _surfData) {

  let data = {
    location: _locator[0].location,
    subheader: _surfData[0].date,
    webcamLink: _locator[0].webcam || null,
    swell: [],
    time: [],
    windspeed: []
  };

  for (let i = 0; i < 6; i++) {
    data.swell.push(_surfData[i].minSwell + '-' + _surfData[i].maxSwell);
    data.time.push(_surfData[i].time);
    data.windspeed.push(_surfData[i].wind);
  }
  return data;
}