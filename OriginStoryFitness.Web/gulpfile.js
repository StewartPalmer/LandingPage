/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. https://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');


gulp.task('default', function () {
    // place code for your default task here
});


gulp.task('styles', function () {
    gulp.src('wwwroot/dev/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./wwwroot/dev/css/'));
});

gulp.task('minify-css', () => {
    return gulp.src('./wwwroot/dev/css/main_stylesheet.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('./wwwroot/css/'));
});