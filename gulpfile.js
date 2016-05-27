var gulp = require('gulp');
    // rename = require('gulp-rename'),
    // traceur = require('gulp-traceur'),
    // webserver = require('gulp-webserver');
var del = require('del');
var tsc = require('gulp-typescript');
var tsProject = tsc.createProject("tsconfig.json");
// var tscConfig = require('./tsconfig.json');

var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var merge = require('merge-stream');

// // clean the contents of the distribution directory
// gulp.task('clean', function () {
//   return del(['dist']);
// });

gulp.task('less', function () {
  var lessStream = gulp.src('./less/app.less')
    .pipe(less())
    .pipe(concat('./less/styles.less'));

  return merge(lessStream)
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('styles'));
});

// run init tasks
gulp.task('build', [ /*'clean',*/ 'less' ]);
