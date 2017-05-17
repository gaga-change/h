const gulp = require('gulp'),
    less = require('gulp-less'),
    scss = require('gulp-scss'),
    cssmin = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber');
gulp.task('scss', function () {
    gulp.src(['src/**/*.scss', '!src/**/_*.scss'])
        // .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        // .pipe(sourcemaps.init())
        .pipe(scss())
        .pipe(cssmin())
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest('src'))
});
gulp.task('scssWatch', function () {
    gulp.watch('src/**/*.scss', ['scss']); //当所有scss文件发生改变时，调用scss任务
});