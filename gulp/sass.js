const gulp = require('gulp')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const uncss = require('postcss-uncss')
const tilde = require('node-sass-tilde-importer')

gulp.task('sass', ['js', 'html'], () =>
  gulp.src('./src/**/*.scss')
    .pipe(sass({outputStyle: 'compressed', importer: tilde}).on('error', sass.logError))
    .pipe(gulp.dest('dist'))
)

gulp.task('sass:uncss', ['sass'], () =>
  gulp.src('./dist/**/*.css')
    .pipe(postcss([uncss({html: ['dist/**/*.html']})]))
    .pipe(gulp.dest('dist'))
)
