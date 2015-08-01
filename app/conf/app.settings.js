'use strict';

module.exports = Object.freeze({
  
  port: process.env.PORT || 3000,
  hbs: {
    cacheEnabled: (process.env.NODE_ENV === 'live')
  }
  
});
  
  