'use strict';

const settings = require('./app.settings');
const hbs = require('koa-handlebars');

module.exports = function(app) {

  app.use(hbs(
    {
      layoutsDir: 'layouts',
      viewsDir: 'layouts/views',
      partialsDir: 'layouts/partials',
      defaultLayout: 'main',
      cache: settings.hbs.cacheEnabled
    }
  ));
  
};