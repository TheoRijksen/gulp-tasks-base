var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    nested = require('postcss-nested'),
    hexrgba = require('postcss-hexrgba'),
    sourcemaps = require('gulp-sourcemaps'),
    cssnext = require('postcss-cssnext');

gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([
          require('postcss-partial-import')({prefix: '_', extension: '.css'}),
          hexrgba(),
          cssnext(),
          nested()
        ]))
        .on('error', function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./app/temp/styles'));
});