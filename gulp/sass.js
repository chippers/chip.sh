const gulp = require('gulp')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const uncss = require('postcss-uncss')
const tilde = require('node-sass-tilde-importer')

gulp.task('sass', () =>
  gulp.src('./src/**/*.scss')
    .pipe(sass({outputStyle: 'compressed', importer: tilde}).on('error', sass.logError))
    .pipe(postcss([uncss({html: ['src/**/*.html']})]))
    .pipe(gulp.dest('dist'))
)
