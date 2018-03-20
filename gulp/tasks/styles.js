var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    mixins = require('postcss-mixins'),
    hexrgba = require('postcss-hexrgba'),
    sourcemaps = require('gulp-sourcemaps'),
    cssnext = require('postcss-cssnext');

gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([
          require('postcss-partial-import')({prefix: '_', extension: '.css'}),
          cssnext()
        ]))
        .on('error', function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./app/temp/styles'));
});