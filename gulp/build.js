const gulp = require('gulp')

gulp.task('build', ['js', 'html', 'sass', 'sass:uncss', 'assets'])
