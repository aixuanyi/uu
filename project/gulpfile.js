var gulp = require("gulp");
var sass = require("gulp-sass");
gulp.task("styles",function(){
	return gulp.src("sass/*.scss")
	.pipe(sass({style:"nested"}))
	.pipe(gulp.dest("css"));
})
gulp.task("watch",function(){
	gulp.watch("sass/*.scss",["styles"]);
})
