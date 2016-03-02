var gulp   = require("gulp"),
    rename = require("gulp-rename")
    concat = require("gulp-concat"),
	uglify = require("gulp-uglify")//,// // "gulp-inject-string": "^1.1.0"
    //inject = require("gulp-inject-string");


gulp.task("compile", function ()
{
	return gulp.src([
			"source.js"
		])
		.pipe(concat("localStorageShim.min.js"))
		.pipe(uglify())
		.pipe(gulp.dest("./"));
});

gulp.task("default", ["compile"], function() {
    whatchado = 'default';
	gulp.watch("./*.js", ["compile"]);

});