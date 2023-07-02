'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function bs() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
};

exports.bs = bs;
exports.watch = function () {
  gulp.watch('./sass/**/*.scss', gulp.series('bs'));
};