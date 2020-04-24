const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const shorthand = require('gulp-shorthand')
const concat = require('gulp-concat');

module.exports = function csslibs() {
    return gulp.src('src/css-libs/*.css')
      .pipe(concat('libs.min.css'))                  
      .pipe(shorthand())
      .pipe(cleanCSS())                                 // сжимаем и оптимизируем
      .pipe(gulp.dest('build/css'))            // Выгружаем результата в папку app/css
}
