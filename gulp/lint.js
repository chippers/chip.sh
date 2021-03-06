const gulp = require('gulp')
const standard = require('gulp-standard')

gulp.task('lint', () =>
  gulp.src(['./gulp/*.js', '!./node_modules/**/*.js'])
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: true,
      quiet: true
    }))
)
