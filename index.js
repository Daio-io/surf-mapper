'use strict';

const http = require('http');
const koa = require('koa');
const settings = require('./app/conf/app.settings');
const app = koa();
const server = http.createServer(app.callback());

server.listen(settings.port, function() {
  
  console.log('Surf Map Started on', settings.port);

});
