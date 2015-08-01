'use strict';

const http = require('http');
const koa = require('koa');
const settings = require('./app/conf/app.settings');
const app = koa();

//** BOOTSTRAP MIDDLEWARE **//
require('./app/conf/app.bootstrap')(app);
//** ADD ROUTES TO APP **//
require('./app/conf/app.routes')(app);

const server = http.createServer(app.callback());

server.listen(settings.port, function() {
  
  console.log('Surf Map started on port:', settings.port);

});
