const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const browserify = require('browserify');
const babelify = require('babelify');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');

// gulp.task('default', () =>
// 	gulp
// 		.src('src/js/main.js')
// 		.pipe(
// 			babel({
// 				presets: ['@babel/env'],
// 			})
// 		)
// 		.pipe(concat('all.js'))
// 		.pipe(gulp.dest('dist'))
// );

function javascript() {
	return browserify({
		entries: ['src/js/main.js'],
	})
		.transform(babelify, {
			presets: ['@babel/preset-env'],
		})

		.bundle()
		.pipe(source('main.js'))
		.pipe(buffer())
		.pipe(gulp.dest('dist'));
}

function html() {
	return gulp.src(`src/**/*.html`).pipe(gulp.dest('dist'));
}

// function js(done) {
// 	jsFiles.map(function (entry) {
// 		return browserify({
// 			entries: [constants.jsSRC + entry], // constants.jsSRC == "./src/js/"
// 		})
// 			.transform(babelify, { presets: ['@babel/preset-env'] })
// 			.transform('glslify')
// 			.bundle()
// 			.pipe(source(entry))
// 			.pipe(
// 				rename({
// 					extname: '.min.js',
// 				})
// 			)
// 			.pipe(buffer())
// 			.pipe(gulpif(options.has('production'), stripDebug()))
// 			.pipe(sourcemaps.init({ loadMaps: true }))
// 			.pipe(uglify())
// 			.pipe(sourcemaps.write('.'))
// 			.pipe(dest(constants.jsURL)) // constants.jsURL == "./dist/js/"
// 			.pipe(browserSync.stream());
// 	});
// 	done();
// }

// Watch files/folders
function watch(done) {
	development = true;

	// if (environment.name === 'live') {
	// 	development = false;
	// }
	// browsersync.init({
	// 	proxy: environment.ftp.url
	// });

	gulp.watch(`src/js/**/*.js`, javascript);
	gulp.watch(`src/**/*.html`, html);

	done();
}

gulp.task('default', gulp.series(watch));
