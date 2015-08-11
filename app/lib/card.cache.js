'use strict';

const settings = require('../conf/app.settings');
const NodeCache = require('node-cache');
const surfCache = new NodeCache();

module.exports = {
  
  cacheCard: function(_spotid, _data) {
    surfCache.set(_spotid, _data,  settings.response.cache);
  },
  
  getCachedCard(_spotid) {
    return surfCache.get(_spotid);
  }
  
};