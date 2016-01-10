'use strict';

const got = require('got');

module.exports = {

  /**
   * Returns a promise of location data
   * @param spotid
   * @returns {promise}
   */
  getLocation: function(spotid) {
    
    return got('http://beach-locator.herokuapp.com/location/' + spotid)
      .then(function(data){
      return data.body.response;
    });

  }

};