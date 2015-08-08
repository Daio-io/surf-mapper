'use strict';

const locator = require('./locator.client');
const surfdata = require('./surfdata.client');
const surfcards = require('surfcards');
const tooly = require('tooly');
const NodeCache = require('node-cache');
const surfCache = new NodeCache();
const settings = require('../conf/app.settings');

module.exports = {

  buildResponse: function(spotid) {

    let cached = surfCache.get(spotid);
    console.log(cached);
    if (tooly.existy(cached)) {
      return new Promise(function(resolve) {
        resolve(cached);
      })
    } else {
      let promises = [locator.getLocation(spotid), surfdata.getSurfData(spotid)];

      return Promise.all(promises).then(function(response) {
        let mapped = response.map(_mapData);
        let locator = mapped[0];
        let surfData = mapped[1];
        let cardData = _buildCardData(locator, surfData);
        let surfCard = surfcards.build(cardData);

        let res = {
          surfcard: surfCard,
          lat: locator[0].latitude,
          lng: locator[0].longitude
        };
        
        _cacheResponse(spotid, res);
        return res;

      })
    }
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

function _cacheResponse(_spotId, _res) {

  surfCache.set(_spotId, _res,  settings.response.cache);

}