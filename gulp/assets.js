const gulp = require('gulp')

gulp.task('assets', () =>
  gulp.src(['assets/**'])
    .pipe(gulp.dest('dist'))
)
