var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload

gulp.task('default', ['browser-sync', 'sass'], function() {
    gulp.watch("sass/*.sass", ['sass']).on('change', reload);;
    gulp.watch("*.html").on('change', reload);
})

gulp.task('sass', function() {
    return gulp.src('./sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
})

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        notify: false
    });
});
