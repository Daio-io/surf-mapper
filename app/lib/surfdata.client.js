'use strict';

const got = require('got');
const SURF_QUERY_KEY = process.env.SURF_QUERY_KEY;

module.exports = {

  /**
   * Returns promise of surf data
   * @param spotid
   * @returns {promise}
   */
  getSurfData: function(spotid) {

    return got('https://surf-query.herokuapp.com/?apikey=' +
      SURF_QUERY_KEY + '&spotid=' +
      spotid + '&start=7&end=22').then(function(data) {

      return data.body;

    });

  }

};