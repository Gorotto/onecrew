const gulp = require('gulp')

const imageMinify = require('./imageMinify')
const svgSprite = require('./svgSprite')
const styles = require('./styles')
const csslibs = require('./csslibs')
const jslibs = require('./jslibs')
const pug2html = require('./pug2html')
const script = require('./script')
const copyDependencies = require('./copyDependencies')

const server = require('browser-sync').create()

module.exports = function serve(cb) {
    server.init({
        server: 'build',
        port: 8080,
        notify: true,
        open: false,
        cors: true
    })


    let stylePaths = [
      'src/scss/style.scss',
      'src/scss/variables.scss',
      'src/scss/elements.scss',
      'src/scss/grid.scss',
      'src/blocks/**/*.scss',
    ];


    // gulp.watch(stylePaths, gulp.series(styles, cb => gulp.src('build/css').pipe(server.stream()).on('end', cb)));
    gulp.watch(stylePaths, gulp.series(styles)).on('change', server.reload)
    gulp.watch('src/blocks/**/img/*.{gif,png,jpg,jpeg,svg}', gulp.series(imageMinify)).on('change', server.reload)
    gulp.watch('src/sprite/*.svg', gulp.series(svgSprite)).on('change', server.reload)
    // gulp.watch('src/styles/**/*.scss', gulp.series(styles, cb => gulp.src('build/css').pipe(server.stream()).on('end', cb)))
    gulp.watch('src/css-libs/*.css', gulp.series(csslibs)).on('change', server.reload)
    gulp.watch('src/js/**/*.js', gulp.series(script)).on('change', server.reload)
    // gulp.watch('src/jslibs/*.js', gulp.series(jslibs)).on('change', server.reload)
    gulp.watch('src/**/*.pug', gulp.series(pug2html))
    // gulp.watch('src/pages/*.pug', gulp.series(pug2html))
    gulp.watch('build/*.html').on('change', server.reload)

    gulp.watch('package.json', gulp.series(copyDependencies)).on('change', server.reload)

    return cb()
}
