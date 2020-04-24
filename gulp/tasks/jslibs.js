const gulp = require('gulp')
const plumber = require('gulp-plumber')
const concat = require('gulp-concat');
const terser = require('gulp-terser')
const rename = require('gulp-rename')

const jslibs = [
    'src/jslibs/jquery.js',
    // 'src/jslibs/swiper.js',
    'src/jslibs/swiper.js',
    'src/jslibs/iziModal.js',
  ];

module.exports = function vendors(cb) {
    return jslibs.length
    ? gulp.src(jslibs)
    .pipe(concat('libs.min.js'))
    // .pipe(terser())
    .pipe(gulp.dest('build/js'))
    : cb();
};