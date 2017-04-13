var gulp = require('gulp'),
  sass = require('gulp-sass'),
  header = require('gulp-header'),
  autoprefixer = require('gulp-autoprefixer'),
  browserSync = require('browser-sync'),
  runSequence = require('run-sequence'),
  multilanguage = true,
  main_language = 'arabic',
  alternative_language = 'english',
  sass_tasks = multilanguage ? ['sass', 'sass_other'] : ['sass'],
  sequence_tasks = multilanguage ? ['sass', 'sass_other', 'browserSync'] : ['sass', 'browserSync'];
gulp.task('browserSync', function () {
  browserSync({
    server: {
      baseDir: 'source'
    }
  })
});
gulp.task('sass', function () {
  console.log('Running one language');
  return gulp.src('source/scss/*.scss')
    .pipe(header('$language: ' + main_language + ' ;\n'))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 7 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('source/ar/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});
gulp.task('sass_other', function () {
  console.log('Running Multilanguage');
  return gulp.src('source/scss/*.scss')
    .pipe(header('$language: ' + alternative_language + ' ;\n'))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 7 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('source/en/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});
gulp.task('watch', function () {
  gulp.watch('source/scss/**/*.scss', sass_tasks);
  gulp.watch('source/**/*.html', browserSync.reload);
  gulp.watch('source/**/js/*.js', browserSync.reload);
});
gulp.task('default', function (callback) {
  runSequence(sequence_tasks, 'watch', callback)
});
