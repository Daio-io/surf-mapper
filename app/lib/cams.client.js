'use strict';

const got = require('got');

module.exports = {

  /**
   * Returns a promise of webcam link data
   * @param spotid
   * @returns {promise}
   */
  getWebcam: function(spotid) {

    return got('http://surf-cams.herokuapp.com/id/' + spotid)
      .then(function(data){
        return data.body;
      });

  }

};