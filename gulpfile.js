'use strict';

const gulp = require('gulp');
const webpack = require('webpack-stream');

gulp.task('build', function() {
  return gulp.src('webapp/src/**/*.js')
    .pipe(webpack({output: {filename: 'build.js'}}))
    .pipe(gulp.dest('static/dist/js/'));
});

gulp.task('default', ['build'], function() {});