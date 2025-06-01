const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Função pra compilar o SCSS
function styles() {
  return gulp.src('./src/styles/**/*.scss') // pega todos scss dentro da pasta
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./build/styles'));
}

// Task default (executa só uma vez)
exports.default = styles;

// Task de watch (fica observando mudanças)
exports.watch = function() {
    gulp.watch('./src/styles/**/*.scss', gulp.parallel(styles));
};
