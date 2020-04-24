const gulp = require('gulp')
const plumber = require('gulp-plumber')
const pug = require('gulp-pug')
const pugLinter = require('gulp-pug-linter')
const htmlbeautify = require('gulp-html-beautify');
const htmlValidator = require('gulp-w3c-html-validator')
const bemValidator = require('gulp-html-bem-validator')

module.exports = function pug2html() {
  return gulp.src([
      'src/pages/*.pug',
      // 'src/pug/mixins.pug',
    ])
  // return gulp.src('src/pages/*.pug')
    .pipe(plumber())
    .pipe(pugLinter({ reporter: 'default' }))
    .pipe(pug())
    .pipe(htmlbeautify())
    .pipe(htmlValidator())
    // .pipe(bemValidator())
    .pipe(gulp.dest('build'))
}
