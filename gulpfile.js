/* required methods */
var gulp 			= require('gulp');
var concat 			= require('gulp-concat');
var rename 			= require('gulp-rename');
var uglify 			= require('gulp-uglify');
var runSequence 	= require('run-sequence');
var watch 			= require('gulp-watch');
var sass 			= require('gulp-sass');
var browserSync 	= require('browser-sync');

/* tasks */
gulp.task('devjs', function ()
{
	return gulp.src('src/js/*.js')
		.pipe(concat('main.js'))
		.pipe(gulp.dest('dist/js'));
});


gulp.task('depsjs', function ()
{
	return gulp.src(['modernizr.js',
		'jquery.js',
		'bootstrap.js'])
		.pipe(concat('deps.js'))
		.pipe(gulp.dest('src'));
});

gulp.task('depsDist', function ()
{
	return gulp.src(['src/deps.js','src/d3-tip.js'])
		.pipe(rename('deps.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

gulp.task('sass', function ()
{
	return gulp.src(['src/scss/styles.scss','src/sass/app.scss','src/sass/super.scss'])
		.pipe(sass())
		.on('error', console.error.bind(console))
		.pipe(gulp.dest('dist/css'));
});

gulp.task('sass-watch', ['sass'], browserSync.reload);

gulp.task('watch', function ()
{
	browserSync({
		server: {
			baseDir: '/'
		}
	});
	gulp.watch('src/js/*.js', ['devjs']);
	gulp.watch('src/s*ss/*.scss', ['sass-watch']);
});

gulp.task('default', function (callback)
{
	runSequence('sass', 'depsjs', 'depsDist', callback);
});