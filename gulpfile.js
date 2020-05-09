const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const csso = require('gulp-csso');
const server = require('browser-sync');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const terser = require('gulp-terser');


gulp.task('scss', function(){
    return gulp
    .src('./sass/style.scss')
    .pipe(sass())
    .pipe(autoprefixer({
        overrideBrowserList:['last 2 versions'],
        cascade: false
    }))
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./build/styles/'))
    .pipe(server.stream())
})

gulp.task('clean', function(){
    return del('./build/')
})

gulp.task('html', function(){
    return gulp
    .src('*.html')
    .pipe(gulp.dest('./build'))
    .pipe(server.stream())
})

gulp.task('image',function(){
    return gulp
    .src('./img/*.{jpg,png,svg}')
    .pipe(gulp.dest('./build/img'))
})

gulp.task('scripts',function(){
    return gulp
    .src('./js/**/*.js')
    .pipe(concat('all.js'))
    .pipe(terser())
    .pipe(rename('all.min.js'))
    .pipe(gulp.dest('./build/js'))
    .pipe(server.stream())
})

gulp.task('watch', function(){
    server.init({
        server: 'build/'
    });
    gulp.watch('*.html', gulp.series('html'));
    gulp.watch('img/*.{jpg,png,svg}', gulp.series('image'));
    gulp.watch('sass/**/*.scss', gulp.series('scss'));
    gulp.watch('js/**/*.js', gulp.series('scripts'));
})

gulp.task('default', gulp.series('clean', 'image', 'html', 'scss','scripts', 'watch'))