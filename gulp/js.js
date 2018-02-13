const gulp = require('gulp')
const parcel = require('gulp-parcel')

gulp.task('js', () =>
  gulp.src(['src/index.js'], {read: false})
    .pipe(parcel())
    .pipe(gulp.dest('dist'))
)
