'use strict';

const ENV = process.env.NODE_ENV;
const ROOT = require('app-root-path');

module.exports = Object.freeze({
  
  port: process.env.PORT || 3000,
  appRoot: ROOT.path,
  hbs: {
    cacheEnabled: (ENV === 'live')
  },
  assets: {
    cache: ENV === 'live' ? 86400000 : 0
  }
  
});
  
  