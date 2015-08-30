'use strict';

module.exports = {

  build: {
    output: {filename: 'bundle.js'},
    module: {
      loaders: [ { loader: 'babel' } ]
    }
  },
  
  uglify: { 
    output: {filename: 'bundle.min.js'},
    module: {
      loaders: [ { loader: 'uglify' } ]
    }
  }
};