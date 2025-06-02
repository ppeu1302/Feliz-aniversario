const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const newer = require('gulp-newer');

// =========================
// Task de CSS (SASS)
// =========================
function styles() {
    return gulp.src('./src/styles/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/styles'));
}

// =========================
// Task de Imagens
// =========================
function images() {
    return gulp.src('./src/images/**/*.*')
        .pipe(newer('./dist/images'))
        .pipe(gulp.dest('./dist/images'));
}

// =========================
// Task de HTML
// =========================
function html() {
    return gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./dist'));
}

// =========================
// Task de Watch
// =========================
function watch() {
    gulp.watch('./src/styles/**/*.scss', styles);
    gulp.watch('./src/images/**/*.*', images);
    gulp.watch('./src/**/*.html', html);
}

// =========================
// Exports
// =========================
exports.styles = styles;
exports.images = images;
exports.html = html;
exports.watch = watch;
exports.build = gulp.parallel(styles, images, html);
exports.default = exports.build;
