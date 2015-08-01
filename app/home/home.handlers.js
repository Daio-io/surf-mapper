'use strict';

exports.getHome = function *() {

  yield this.render('home', {title: 'Surf-Map'});

};