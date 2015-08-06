'use strict';

const mapsApiKey = process.env.MAPS_KEY;
const tooly = require('tooly');
const builder =  require('../lib/response.builder');

exports.getHome = function *() {

  yield this.render('home',
    {
      title: 'Surf-Map',
      mapskey: mapsApiKey
    }
  );

};


exports.getSurfCard = function *() {

  let spotid = this.params.spotid;
  if (tooly.existy(spotid)){
    
    this.body = yield builder.buildResponse(spotid);
    
  } else{
    this.body = {status: fail, message: "Location does not exist"};
  }

};