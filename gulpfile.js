var gulp  = require('gulp');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var connect = require('gulp-connect');
var files = ['./styles/**/*.scss', 'index.html'];

gulp.task('styles', function() {
  gulp.src('styles/*.scss')
    .pipe(sourcemaps.init())
      .pipe(sass({ style: 'expanded' }))
      .pipe(autoprefixer('last 2 version'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('styles'))
    .pipe(connect.reload())
});

gulp.task('html', function () {
  gulp.src('*.html')
    .pipe(connect.reload())
});

gulp.task('css', function () {
  gulp.src('styles/application.css')
    .pipe(connect.reload())
});

gulp.task('watch', function(){
  gulp.watch('./styles/**/*.scss', ['css']);
  gulp.watch('*.html', ['html']);
});

gulp.task('connect', function() {
  connect.server({livereload: true});
})

gulp.task('build', ['styles']);
gulp.task('default', ['build', 'connect', 'watch']);