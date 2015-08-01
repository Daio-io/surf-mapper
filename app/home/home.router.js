'use strict';

const router = require('koa-router')();
const homeHandlers = require('./home.handlers');

router.get('/', homeHandlers.getHome);

module.exports = router;