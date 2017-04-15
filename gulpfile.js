var config = require('./config'),
  gulp = require('gulp'),
  handlebars = require('gulp-compile-handlebars'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  header = require('gulp-header'),
  autoprefixer = require('gulp-autoprefixer'),
  browserSync = require('browser-sync'),
  runSequence = require('run-sequence'),
  taskConfig,
  tasks_list = [];
var tasksCreator = function (config) {
  var taskTemplate = function (i) {
    return function () {
      return gulp.src('source/scss/*.scss')
        .pipe(header('$language: ' + config.languages[i].languageCode + ';\n'))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
          browsers: ['last 7 versions'],
          cascade: false
        }))
        .pipe(gulp.dest('source/' + config.languages[i].outputfolder + '/css'))
        .pipe(browserSync.reload({
          stream: true
        }));
    };
  };
  for (var i = 0; i < config.languages.length; i++) {
    gulp.task(config.languages[i].taskName, taskTemplate(i));
    tasks_list.push(config.languages[i].taskName);
  }
  tasks_list.push('browserSync');
};
gulp.task('watch', function () {
  if (tasks_list.indexOf('browserSync') != -1) {
    tasks_list.splice(tasks_list.indexOf('browserSync'), 1);
  }
  gulp.watch('source/scss/**/*.scss', tasks_list);
  gulp.watch('source/**/*.html', browserSync.reload);
  gulp.watch('source/**/js/*.js', browserSync.reload);
});
gulp.task('browserSync', function () {
  gulp.src('source/index.handlebars')
    .pipe(handlebars(config.languages))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('source'));
  browserSync({
    server: {
      baseDir: 'source'
    }
  });
});
gulp.task('default', function (callback) {
  tasksCreator(config);
  runSequence(tasks_list, 'watch', callback);
});
