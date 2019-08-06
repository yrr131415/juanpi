var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var minifyCSS = require("gulp-minify-css");
var imagemin = require("gulp-imagemin");
var babel = require("gulp-babel");
var sass = require("gulp-sass");


//监听
gulp.task("watchall",async ()=>{
	
	gulp.watch("*.html",async ()=>{
		gulp.src("*.html")
		.pipe(gulp.dest("D:\phpstudy\WWW\juanpi"));
});

	gulp.watch("js/*.js",async ()=>{
		gulp.src("js/*.js")
		.pipe(babel({
			presets:['es2015']
		}))
		.pipe(concat("cendors.js"))
		.pipe(gulp.dest("D:\phpstudy\WWW\juanpi\\js"))
		.pipe(uglify())
		.pipe(rename("cendor.min.js"))
		.pipe(gulp.dest("D:\phpstudy\WWW\juanpi\\js"));
});

	gulp.watch("css/*.css",async ()=>{
		gulp.src("css/*.css")
		.pipe(concat("cendors.css"))
		.pipe(gulp.dest("D:\phpstudy\WWW\juanpi\\css"))
		.pipe(minifyCSS())
		.pipe(rename("cendors.min.css"))
		.pipe(gulp.dest("D:\phpstudy\WWW\juanpi\\css"))
});

	gulp.watch("img/**/*",async ()=>{
		gulp.src("image/**/*")
		.pipe(gulp.dest("D:\phpstudy\WWW\juanpi\\img"));
});

	gulp.watch("sass/**/*",async ()=>{
		gulp.src("sass/**/*")
		.pipe(sass())
		.pipe(gulp.dest("D:\phpstudy\WWW\juanpi\\css"));
});


})