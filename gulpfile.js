const gulp = require("gulp"),
    sass = require("gulp-sass"),
    sourcemaps = require("gulp-sourcemaps"),
    browserSync = require("browser-sync").create(),
    source = "./process/",
    dest = "./builds/bootstrap/";

sass.compiler = require("node-sass");

function html() {
    return gulp.src(dest + "**/*.html");
}

function js() {
    return gulp.src(dest + "**/*.js");
}

function watch() {
    gulp.watch(dest + "js/**/*.js", js).on("change", browserSync.reload);
    gulp.watch(dest + "index.html", html).on("change", browserSync.reload);
}

function server() {
    browserSync.init({
        notify: false,
        server: {
            baseDir: dest
        }
    });

    gulp.watch(dest + "js/**/*.js", js).on("change", browserSync.reload);
    gulp.watch(dest + "index.html", html).on("change", browserSync.reload);
}

var build = gulp.series(gulp.parallel(js, html), server, watch);

gulp.task("default", build);
