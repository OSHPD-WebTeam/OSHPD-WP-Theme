var gulp = require('gulp');
var watch = require('gulp-watch');

var cleanCSS = require('gulp-clean-css');
var less = require('gulp-less');

var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

var path = require('path');
 

 
gulp.task('default', function () {
//	gulp.start('minify-css');
	gulp.start('minify-js');
});
	
gulp.task('minify-css', function () {
	return gulp.watch('./less/**/*.less',function(){
		gulp.src('./less/style.less')
			.pipe(less({
				paths: [ path.join(__dirname, 'less', 'cagov', 'bootstrap') ]
			}))
			.pipe(cleanCSS({compatibility: 'ie8'}))
			.pipe(gulp.dest('./css'));
  });
});

gulp.task('minify-js', function () {
	return gulp.src('./js-src/*.js')
			.pipe(uglify())
			.pipe(concat('oshpd.js'))
			.pipe(gulp.dest('./js'));
});