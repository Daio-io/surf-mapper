'use strict';

const gulp = require('gulp');
const webpack = require('webpack-stream');
const del = require('del');
const minifyCss = require('gulp-minify-css');

const webpackConf = {
  output: {filename: 'bundle.js'},
  module: {
    loaders: [
      { loader: 'babel' }
    ]
  }
};

// Webpack js files into one bundle
gulp.task('build', ['clean', 'minify-css'], function() {
  return gulp.src('webapp/src/index.js')
    .pipe(webpack(webpackConf))
    .pipe(gulp.dest('static/dist/js/'));
});

gulp.task('minify-css', function() {
  return gulp.src('webapp/css/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('static/dist/css/'));
});

// Clean out the dist folders
gulp.task('clean', function() {
  del(['static/dist/css', 'static/dist/js']);
});

gulp.task('default', ['build'], function() {
});