'use strict';

const settings = require('./app.settings');
const hbs = require('koa-handlebars');
const serve = require('koa-static');

module.exports = function(app) {

  app.use(serve(settings.appRoot + '/static', {maxage: settings.assets.cache}));
  
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