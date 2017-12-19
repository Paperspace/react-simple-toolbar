var gulp  = require('gulp');
var babel = require('gulp-babel');

gulp.task('default', function () {
    return gulp.src('./src/**')
        .pipe(babel({
            presets: ['babel-preset-es2015', 'babel-preset-react', 'babel-preset-stage-0'].map(require.resolve),
        }))
        .pipe(gulp.dest('./lib'));
});
