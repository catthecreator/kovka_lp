// var gulp = require('gulp'),
//     sass = require('gulp-sass');

// gulp.task('sass', function () {
// //    return gulp.src('sass/**/*.{sass,scss}')
//     return gulp.src('sass/style.scss')
//         .pipe(sass({
//             outputStyle: 'expanded'
//         }).on('error', sass.logError))
//         .pipe(gulp.dest('css'))
// });

// gulp.task('watch', function () {
//     gulp.watch('sass/**/*.{sass,scss}', gulp.parallel('sass'));
// });

// gulp.task('default', gulp.parallel('watch'))

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
//compile scss into css
function style() {
    // return gulp.src('./sass/**/*.{sass,scss}')
    return gulp.src('./sass/style.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}
function watch() {
    browserSync.init({
        server: {
           baseDir: ".",
           index: "/index.html"
        }
    });
    gulp.watch('./sass/**/*.{sass,scss}', style)
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}
exports.style = style;
exports.watch = watch;