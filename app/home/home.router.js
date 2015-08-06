'use strict';

const router = require('koa-router')();
const homeHandlers = require('./home.handlers');

router.get('/', homeHandlers.getHome);
router.get('/surfcard/:spotid', homeHandlers.getSurfCard);

module.exports = router;