'use strict';

const statusRoutes = require('../status/status.router');
const homeRoutes = require('../home/home.router');

module.exports = function(app) {

  app.use(homeRoutes.routes());
  app.use(statusRoutes.routes());

};