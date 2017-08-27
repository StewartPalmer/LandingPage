/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. https://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('default', function () {
    // place code for your default task here
});




gulp.task('styles', function () {
    gulp.src('wwwroot/assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./wwwroot/assets/css/'));
});