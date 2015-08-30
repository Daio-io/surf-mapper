'use strict';

const gulp = require('gulp');
const webpack = require('webpack-stream');
const del = require('del');
const minifyCss = require('gulp-minify-css');
const webpackConf = require('./webpack.conf');

// Webpack js files into one bundle
gulp.task('build', ['clean', 'minify-css'], function() {
  return gulp.src('webapp/src/index.js')
    .pipe(webpack(webpackConf.build))
    .pipe(gulp.dest('static/dist/js/'));
});

gulp.task('minify-css', function() {
  return gulp.src('webapp/css/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('static/dist/css/'));
});

gulp.task('dist', function() {
  return gulp.src('static/dist/js/bundle.js')
    .pipe(webpack(webpackConf.uglify))
    .pipe(gulp.dest('static/dist/js/'));
});

// Clean out the dist folders
gulp.task('clean', function() {
  del(['static/dist/js']);
});

gulp.task('watch', function() {
  gulp.watch('webapp/css/*.css', ['build']);
  gulp.watch('webapp/src/**/*.js', ['build']);
});


gulp.task('default', ['build'], function() {
});