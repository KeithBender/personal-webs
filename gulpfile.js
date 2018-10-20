'use strict'

const gulp = require('gulp');
const terser = require('gulp-terser');
const concat = require('gulp-concat');
const css = require('gulp-clean-css');
const minify = require('gulp-minify');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

const sassFiles = 'scss/*.scss';

gulp.task('cssMin', () => {
    return gulp.src('./css/*.css')
        .pipe(css())
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('./css'));
});

gulp.task('sassCSS', () => {
    return gulp.src(sassFiles)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('jsLib', () => {
    return gulp.src('./js/lib/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('lib.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./js'));
});
gulp.task('scripts', () => {
    return gulp.src(['./js/lib.js', './js/main.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write())
        .pipe(minify())
        .pipe(gulp.dest('./js'));
});

gulp.task('watch', () => {
    gulp.watch(sassFiles, gulp.series('sassCSS'));
});

gulp.task('build', gulp.series("sassCSS", "cssMin", "scripts"));


gulp.task('default', gulp.series('build'));