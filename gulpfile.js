var src_path  = "src/",
    dist_path = "dist/";

var gulp         = require('gulp'),
	stylus       = require('gulp-stylus'),
	sourcemaps   = require('gulp-sourcemaps'),
	uglify       = require('gulp-uglify'),
	minify       = require('gulp-cssnano'),
	minifyhtml   = require('gulp-htmlmin'),
	browsersync  = require('browser-sync').create(),
	plumber      = require('gulp-plumber'),
	lost         = require('lost'),
	rupture      = require('rupture'),
	nib          = require('nib'),
	autoprefixer = require('autoprefixer'),
	postcss      = require('gulp-postcss'),
	pug          = require('gulp-pug');

// Start compiling code as soon as gulp is called, and watch for file changes
gulp.task('default', ['build-all'], function(){

	// Start the browsersync server
	browsersync.init({
		server: "./"
	});

	// Watch for changes inside src folder
	gulp.watch(src_path + '**/*.styl', ['build-css']);
	gulp.watch(src_path + '**/*.js', ['build-js']);
	gulp.watch(src_path + '**/*.pug', ['build-html']);
});

// Optimise all source code
gulp.task('build-all', ['build-css', 'build-js', 'build-html']);

// Compile stylus into compressed css
gulp.task('build-css', function(){
	return gulp.src(src_path + 'stylus/style.styl')
	  .pipe(plumber())
	  .pipe(sourcemaps.init())
	  .pipe(stylus({use: [rupture(), nib()]}))
	  .pipe(postcss([
			lost(),
			autoprefixer()
		]))
	  // Compress compiled css
	  .pipe(minify())
	  .pipe(sourcemaps.write())
	  // Output compiled + compressed file to dist
	  .pipe(gulp.dest(dist_path + 'css'))
	  // Update browser
	  .pipe(browsersync.stream());
});

// Compile js files and compress them
gulp.task('build-js', function(){
	return gulp.src(src_path + 'js/**/*.js')
	  // Forces gulp to output errors to terminal
	  .pipe(plumber())
	  .pipe(sourcemaps.init())
	  // Compress js files
	  .pipe(uglify())
	  .pipe(sourcemaps.write())
	  // Output file to dist/
	  .pipe(gulp.dest(dist_path + 'js'))
	  // Update browser
	  .pipe(browsersync.stream());
});

// Compile pug files and compress them
gulp.task('build-html', function(){
	return gulp.src(src_path + 'index.jade')
	  // Forces gulp to output errors to terminal
	  .pipe(plumber())
	  .pipe(pug())
	  .pipe(minifyhtml())
	  // Output file to main directory
	  .pipe(gulp.dest('./'))
	  // Update browser
	  .pipe(browsersync.stream());
});