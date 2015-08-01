'use strict';

const statusRoutes = require('../status/status.router');

module.exports = function(app) {
  
    app.use(statusRoutes.routes());

};