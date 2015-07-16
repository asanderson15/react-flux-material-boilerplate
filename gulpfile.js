var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var bower = require("gulp-bower");
var browserify = require("browserify");
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
    browserify('./src/js/app.js')
      .transform(babelify)
      .bundle()
      .pipe(source('app.js'))
      .pipe(gulp.dest('dist/js'));
});

gulp.task("babel", function () {
  return gulp.src("src/js/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist/js/"));
});

gulp.task("html", function () {
  return gulp.src("src/**/*.html")
    .pipe(gulp.dest("dist/"));
});

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('src/lib/'))
  return bower()
    .pipe(gulp.dest('dist/lib/'));
});

gulp.task('default', ['bower', 'html', 'browserify'], function() {
  return gulp.watch('src/**/*.*', ['bower', 'html', 'browserify']);
});
