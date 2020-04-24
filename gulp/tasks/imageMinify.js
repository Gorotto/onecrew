const gulp = require('gulp')
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin')

let images = [
  // dirs.source + '/img/*.{gif,png,jpg,jpeg,svg,ico}',
  // dirs.source + '/img/**/*.{gif,png,jpg,jpeg,svg,ico}',
  'src/blocks/**/img/*.{gif,png,jpg,jpeg,svg}'
  // '!' + dirs.source + '/blocks/sprite-png/png/*',
  // '!' + dirs.source + '/blocks/sprite-svg/svg/*',
];

module.exports = function imageMinify() {
  if(images.length) {
    return gulp.src(images)
    // .pipe(newer('build/img'))
    // .pipe(imagemin([
    //   imagemin.gifsicle({ interlaced: true }),
    //   imagemin.mozjpeg({
    //     quality: 75,
    //     progressive: true
    //   }),
    //   imagemin.optipng({ optimizationLevel: 5 }),
    //   imagemin.svgo({
    //     plugins: [
    //       { removeViewBox: true },
    //       { cleanupIDs: false }
    //     ]
    //   })
    // ]))
    .pipe(rename({dirname: ''}))
    .pipe(gulp.dest('build/img'))
  }
  else {
    console.log('Изображения не обрабатываются.');
    callback();
  }
}
