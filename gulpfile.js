var gulp = require('gulp');
var webserver = require('gulp-webserver');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('webserver', function () {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      host: '0.0.0.0',
    }));
});

// Fonts
gulp.task('fonts', function () {
  return gulp.src(['node_modules/font-awesome/fonts/*'])
    .pipe(gulp.dest('fonts/'));
});

// Sass
gulp.task('sass', function () {
  return gulp.src('./scss/style.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

// Basic usage 
gulp.task('scripts', function () {
  // Single entry point to browserify 
  gulp.src('scripts/script.js')
    .pipe(browserify())
    .pipe(gulp.dest('./js'));
});

gulp.task('uglify', function () {
  return gulp.src('./js/script.js')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./js'));
});