'use strict';

const mapsApiKey = process.env.MAPS_KEY;

exports.getHome = function *() {

  yield this.render('home',
    {
      title: 'Surf-Map',
      mapskey: mapsApiKey
    }
  );

};