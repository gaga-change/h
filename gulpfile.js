let gulp        = require('gulp');
let browserSync = require('browser-sync').create();
let sass        = require('gulp-sass');
let cssmin      = require('gulp-minify-css');
let debug       = require('gulp-debug');
let notify      = require('gulp-notify');
let plumber     = require('gulp-plumber');
let rename      = require('gulp-rename');
let reload      = browserSync.reload;
let config      = require('./config.json');

const root = config.root_path + config.parse_path + '/'; // 'src/demoX' | 'src' | ''
console.log(root);
const port = config.port;

// 静态服务器 + 监听 scss/html 文件
gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: root,
    port: port || "8080"
  });
  gulp.watch(root + "/scss/**/*.scss", ['sass']);
  gulp.watch(root + "**/*.html").on('change', reload);
});

// scss编译后的css将注入到浏览器里实现更新
gulp.task('sass', function () {
  return gulp.src(root + "/scss/**/*.scss")
  .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
  .pipe(sass())
  .pipe(gulp.dest(root + 'css'))
  .pipe(reload({stream: true}));
});

// css压缩版
gulp.task('sass-min', function () {
  return gulp.src(root + "/scss/**/*.scss")
  .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
  .pipe(sass())
  .pipe(cssmin())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest(root + 'css'))
  .pipe(reload({stream: true}));
});

gulp.task('default', ['serve']);