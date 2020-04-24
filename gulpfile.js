const gulp = require('gulp')
const fs = require('fs');
const notify = require('gulp-notify');
const serve = require('./gulp/tasks/serve')
const pug2html = require('./gulp/tasks/pug2html')
const styles = require('./gulp/tasks/styles')
const csslibs = require('./gulp/tasks/csslibs')
const vendors = require('./gulp/tasks/jslibs')
const script = require('./gulp/tasks/script')
const fonts = require('./gulp/tasks/fonts')
const imageMinify = require('./gulp/tasks/imageMinify')
const clean = require('./gulp/tasks/clean')
const copyDependencies = require('./gulp/tasks/copyDependencies')
const lighthouse = require('./gulp/tasks/lighthouse')
const svgSprite = require('./gulp/tasks/svgSprite')



const dev = gulp.parallel(pug2html, styles, csslibs, vendors, script, fonts, imageMinify, svgSprite)

const build = gulp.series(clean, copyDependencies, dev)

module.exports.start = gulp.series(build, serve)
module.exports.build = build

module.exports.lighthouse = gulp.series(lighthouse)

function fileExist(path) {
  const fs = require('fs');
  try {
    fs.statSync(path);
  } catch(err) {
    return !(err && err.code === 'ENOENT');
  }
}
