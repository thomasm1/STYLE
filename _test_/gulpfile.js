/* required methods */
const gulp 			= require('gulp');
const rename 			= require('gulp-rename');
const uglify 			= require('gulp-uglify');
const concat 			= require('gulp-concat');
const runSequence 	= require('run-sequence');
const watch 			= require('gulp-watch');
const sass 			= require('gulp-sass');
const browserSync 	= require('browser-sync'); 
//  compass = require('gulp-compass'),
//  plumber = require('gulp-plumber'), 

/* tasks */
gulp.task('devjs', function ()
{
return gulp.src('src/js/*.js')
  .pipe(concat('gulpfile.js'))
  .pipe(gulp.dest('src'));
});


gulp.task('depsjs', function ()
{
return gulp.src(['bower_components/modernizr/modernizr.js',
  'bower_components/jquery/dist/jquery.js',
  'bower_components/bootstrap/dist/js/bootstrap.js'])
  .pipe(concat('deps.js'))
  .pipe(gulp.dest('src'));
});

gulp.task('depsDist', function ()
{
return gulp.src(['src/deps.js'])
  .pipe(rename('deps.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('bin'));
});

gulp.task('sass', function ()
{
return gulp.src(['src/css/styles.scss'])
  .pipe(sass())
  .on('error', console.error.bind(console))
  .pipe(gulp.dest('src/css'));
});

gulp.task('sass-watch', ['sass'], browserSync.reload);

gulp.task('watch', function ()
{
browserSync({
  server: {
	  baseDir: 'src/'
  }
});
gulp.watch('src/js/*.js', ['devjs']);
gulp.watch('src/css/*.scss', ['sass-watch']);
});

gulp.task('default', function (callback)
{
runSequence('depsjs', 'depsDist', callback);
});

