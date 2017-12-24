const gulp = require('gulp')
const rev = require('gulp-rev')
const revdel = require('gulp-rev-delete-original')
const collect = require('gulp-rev-collector')

gulp.task('hash', ['hash:rename', 'hash:replace'])

gulp.task('hash:rename', ['build'], () =>
  gulp.src(['dist/**/*.{css,jpg}'])
    .pipe(rev())
    .pipe(revdel())
    .pipe(gulp.dest('dist'))
    .pipe(rev.manifest({path: 'manifest.json'}))
    .pipe(gulp.dest('dist'))
)

gulp.task('hash:replace', ['build', 'hash:rename'], () =>
  gulp.src(['dist/manifest.json', 'dist/**/*.{html,json,css,js}'])
    .pipe(collect())
    .pipe(gulp.dest('dist'))
)
