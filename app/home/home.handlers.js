'use strict';

const mapsApiKey = process.env.MAPS_KEY;
const tooly = require('tooly');
const builder =  require('../lib/response.builder');
const bundle = process.env.NODE_ENV === 'live' ? 'bundle.min.js' : 'bundle.js';

exports.getHome = function *() {

  yield this.render('home',
    {
      title: 'Surf Mapper',
      mapskey: mapsApiKey,
      bundle: bundle
    }
  );

};


exports.getSurfCard = function *() {

  let spotid = this.params.spotid;
  if (tooly.existy(spotid)){
    
    this.body = { status: "success",
      response: yield builder.buildResponse(spotid)
    }
    
  } else{
    this.body = {status: "failed", 
      response: "Location " + spotid + " does not exist"};
  }

};