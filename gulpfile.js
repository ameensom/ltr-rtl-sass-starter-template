var config = require('./config'),
  gulp = require('gulp'),
  handlebars = require('gulp-compile-handlebars'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  header = require('gulp-header'),
  gulpif = require('gulp-if'),
  autoprefixer = require('gulp-autoprefixer'),
  csscomb = require('gulp-csscomb'),
  minifyCss = require("gulp-minify-css"),
  browserSync = require('browser-sync'),
  runSequence = require('run-sequence'),
  tasks_list = [];
var tasksCreator = function (config) {
  var scssTaskTemplate = function (i) {
    return function () {
      return gulp.src('source/scss/*.scss')
        .pipe(header('$language: ' + config.languages[i].languageCode + ';\n'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpif(config.autoPrefixer, autoprefixer(config.autoPrefixerOptions)))
        .pipe(gulpif(config.beautifyCSS, csscomb()))
        .pipe(gulpif(config.minifyCSS, minifyCss()))
        .pipe(gulp.dest('build/' + config.languages[i].outputfolder + '/css'))
        .pipe(browserSync.reload({
          stream: true
        }));
    };
  };
  for (var i = 0; i < config.languages.length; i++) {
    gulp.task(config.languages[i].taskName, scssTaskTemplate(i));
    tasks_list.push(config.languages[i].taskName);
  }
  tasks_list.push('browserSync');
  gulp.task('watch', function () {
    if (tasks_list.indexOf('browserSync') != -1) {
      tasks_list.splice(tasks_list.indexOf('browserSync'), 1);
    }
    gulp.watch('source/scss/**/*.scss', tasks_list);
    gulp.watch('build/**/*.html', browserSync.reload);
    gulp.watch('build/**/js/*.js', browserSync.reload);
  });
};
gulp.task('browserSync', function () {
  gulp.src('source/index.handlebars')
    .pipe(handlebars(config.languages))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('build'));
  browserSync({
    server: {
      baseDir: 'build'
    }
  });
});
gulp.task('default', function (callback) {
  tasksCreator(config);
  runSequence(tasks_list, 'watch', callback);
});
