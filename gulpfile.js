var gulp         = require('gulp'),
	stylus       = require('gulp-stylus'),
	sourcemaps   = require('gulp-sourcemaps'),
	uglify       = require('gulp-uglify'),
	minify       = require('gulp-minify-css'),
	watch        = require('gulp-watch'),
	minifyhtml   = require('gulp-minify-html'),
	browsersync  = require('browser-sync').create(),
	plumber      = require('gulp-plumber'),
	lost         = require('lost'),
	rupture      = require('rupture'),
	fileinclude  = require('gulp-file-include'),
	nib          = require('nib'),
	autoprefixer = require('autoprefixer'),
	postcss      = require('gulp-postcss'),
	htmlinjector = require('bs-html-injector');

// create a default task and add the watch task to it
gulp.task('default', ['build-all'], function(){
	browsersync.init({ server: './' });

	gulp.watch('src/**/*.styl', ['build-css']);
	gulp.watch('src/**/*.js', ['build-js']);
	gulp.watch('src/**/*.html', ['build-html']);
});

// optimise all source code
gulp.task('build-all', ['build-css', 'build-js', 'build-html']);

// configure the stylus task
gulp.task('build-css', function(){
	return gulp.src('src/stylus/style.styl')
	  .pipe(plumber())
	  .pipe(sourcemaps.init())
	  .pipe(stylus({use: [rupture(), nib()]}))
	  .pipe(postcss([
			lost(),
			autoprefixer()
		]))
	  .pipe(minify())
	  .pipe(sourcemaps.write())
	  .pipe(gulp.dest('dist/css'))
	  .pipe(browsersync.stream());
});

// minify js files
gulp.task('build-js', function(){
	return gulp.src('src/js/**/*.js')
	  .pipe(plumber())
	  .pipe(sourcemaps.init())
	  .pipe(uglify())
	  .pipe(sourcemaps.write())
	  .pipe(gulp.dest('dist/js'))
	  .pipe(browsersync.stream());
});

// minify html files
gulp.task('build-html', function(){
	return gulp.src('src/index.html')
	  .pipe(plumber())
	  .pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
	  .pipe(minifyhtml({ conditionals: true, spare: true }))
	  .pipe(gulp.dest('./'))
	  .pipe(browsersync.stream());
});