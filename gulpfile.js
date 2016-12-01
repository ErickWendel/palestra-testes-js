const gulp = require('gulp');
const test = require('gulp-mocha');


gulp.task('default', [ 'test', 'watch']);

gulp.task('watch', () => {
    return gulp.watch('*.js', ['test']);
});

gulp.task('test', () => {
    return gulp.src('*.js')
        .pipe(test({reporter: 'nyan'}));
});
