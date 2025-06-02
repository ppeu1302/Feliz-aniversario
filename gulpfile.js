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
    return gulp.src('./src/images/**/*.*') // pega qualquer arquivo
        .pipe(newer('./dist/images'))
        .pipe(gulp.dest('./dist/images'));
}

// =========================
// Task de Watch
// =========================
function watch() {
    gulp.watch('./src/styles/**/*.scss', styles);
    gulp.watch('./src/images/**/*.*', images);
}

// =========================
// Exports
// =========================
exports.styles = styles;
exports.images = images;
exports.watch = watch;
exports.default = gulp.parallel(styles, images);
