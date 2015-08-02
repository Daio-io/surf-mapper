'use strict';

const gulp = require('gulp');
const webpack = require('gulp-webpack');

gulp.task('default', function() {
  return gulp.src('webapp/src/**/*.js')
    .pipe(webpack())
    .pipe(gulp.dest('webapp/dist/'));
});