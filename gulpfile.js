'use strict';

const gulp = require('gulp');
const webpack = require('webpack-stream');
const del = require('del');
const webpackConf = {
  output: {filename: 'build.js'},
  module: {
    loaders: [
      { loader: 'babel' }
    ]
  }
};

// Webpack js files into one bundle
gulp.task('build', ['clean'], function() {
  return gulp.src('webapp/src/index.js')
    .pipe(webpack(webpackConf))
    .pipe(gulp.dest('static/dist/js/'));
});

// Clean out the dist folders
gulp.task('clean', function() {
  del(['static/dist/js']);
});

gulp.task('default', ['build'], function() {
});