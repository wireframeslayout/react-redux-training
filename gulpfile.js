var gulp = require("gulp");
var plumber = require("gulp-plumber");
var rimraf = require('gulp-rimraf');
var less = require('gulp-less');
var webpack = require('gulp-webpack');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var browser = require('browser-sync');
var path = require('path');

var LessPluginAutoPrefix = require('less-plugin-autoprefix');
var autoprefix = new LessPluginAutoPrefix({ browsers: ["last 2 Versions"] });
var POD = process.env.NODE_ENV === "production";
var src = './src';
var dist = POD ? './production' : './dist';
var test = true;

gulp.task("server", function() {
  browser.init({
    server: {
      baseDir: dist
    }
  });
});

/**
Less
**/
gulp.task('less', function () {
  if (POD) {
    return gulp.src([
      src + '/assets/less/**/*.less',
      '!' + src + '/assets/less/**/_*.less',
      '!' + src + '/assets/less/app-like/**/*.less'
    ])
    .pipe(plumber())
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ],
      plugins: [autoprefix]
    }))
    .pipe(gulp.dest( dist + '/assets/css'))
  } else {
    return gulp.src([
      src + '/assets/less/**/*.less',
      '!' + src + '/assets/less/**/_*.less',
      '!' + src + '/assets/less/app-like/**/*.less'
    ])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ],
      plugins: [autoprefix]
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest( dist + '/assets/css'))
    .pipe(browser.reload({stream:true}))
  }
});

gulp.task('html', function () {
  gulp.src(src + '/**/*.html')
  .pipe(gulp.dest(dist))
  .pipe(browser.reload({stream:true}));
});

gulp.task('copy', function () {
  gulp.src(src + '/assets/img/**/*')
  .pipe(gulp.dest(dist + '/assets/img'))
  .pipe(browser.reload({stream:true}));
});

gulp.task('webpack', function () {
  gulp.src(src + '/assets/js/app.js')
    .pipe(webpack(require("./webpack.config.js")))
    .pipe(gulp.dest(dist + '/assets/js/'))
    .pipe(browser.reload({stream:true}))
});

// 展開前のファイル削除
gulp.task('build-init', function() {
  return gulp.src([dist,'!.gitkeep'], { read: false });
});

// ファイル展開
gulp.task("build", ['build-init'], function(){
  gulp.run(['less', 'copy', 'webpack', 'html']);
});

// gulp監視
gulp.task('default', ['build', 'server'], function() {

  // HTMLファイルを監視
  gulp.watch('src/**/*.html', ['html'])
  //Lessファイルを監視
  gulp.watch('src/assets/less/**/*.less', ['less'])
  // 画像ファイルのコピー
  gulp.watch('src/assets/img/**/*', ['copy'])
  // JSファイルの展開
  gulp.watch(['src/assets/js/**/*'], ['webpack'])

});
