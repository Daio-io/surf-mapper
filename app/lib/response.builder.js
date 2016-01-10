'use strict';

const locator = require('./locator.client');
const surfdata = require('./surfdata.client');
const webcamClient = require('./cams.client');
const surfcards = require('surfcards');
const tooly = require('tooly');
const cardCache = require('./card.cache');
const settings = require('../conf/app.settings');

module.exports = {

  buildResponse: function(spotid) {

    let cached = cardCache.getCachedCard(spotid);
    if (tooly.existy(cached)) {

      return new Promise(function(resolve) {
        resolve(cached);
      })

    } else {
      let promises = [ locator.getLocation(spotid),
        surfdata.getSurfData(spotid),
        webcamClient.getWebcam(spotid) ];

      return Promise.all(promises).then(function(response) {
        let mapped = response.map(_mapData);
        let locator = mapped[0].response;
        console.log(locator);
        let surfData = mapped[1];
        let webcam = mapped[2];
        let cardData = _buildCardData(locator, surfData, webcam);
        let surfCard = surfcards.build(cardData);

        let res = {
          surfcard: surfCard,
          lat: locator[0].coords.lat,
          lng: locator[0].coords.long
        };

        cardCache.cacheCard(spotid, res);
        return res;

      })
    }
  }

};

function _mapData(data) {
  return JSON.parse(data);
}

function _buildCardData(_locator, _surfData, _webcam) {

  let webcamLink = _webcam['status'] === 'success' 
    ? _webcam.response.Webcam 
    : null;
 
  let data = {
    location: _locator[0].location,
    subheader: '',
    webcamLink: webcamLink,
    swell: [],
    time: [],
    windspeed: []
  };

  if (_surfData['status'] === 'success') {
    let surfData = _surfData['response'];
    data.subheader = surfData[0].date;
    for (let i = 0; i < 6; i++) {
      data.swell.push(surfData[i].minSwell + '-' + surfData[i].maxSwell);
      data.time.push(surfData[i].time);
      data.windspeed.push(surfData[i].wind);
    }
  }

  return data;
}