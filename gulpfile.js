;ldfg;k;kg;dk;;dfkgb

// TM-GULP.JS-CRASH-COURSE  JAN15TUE2019

//TOP LEVEL FUNCTIONS
// gulp.task() - define the task at hand 
// gulp.src() - the location  path of the target to be .pipe() 
// gulp.dest()  - the destination of the target after being . pipe()
// gulp.watch()  - the files/folders to watch for changes

//GULP SYNTAX:
const gulp = require('gulp');
// var imagemin = require('gulp-imagemin');

gulp.task = ('displayThisMessage', function(){
        return  console.log('this is what i want my gulp-task to do');
});

// const gulp = require('imagemin', function(){
//       gulp.src('/img/*', function(){
//         .pipe( imagemin)
//         .pipe(gulp.dest('dist'))
//     })
// });


const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');


//RENDER A MESSAGE TO THE DISPLAY
gulp.task('message', function(){
    return console.log('this is my callback message');
});


//RENDEER A MESSAGE TO THE DISPLAY W/ 'DEFAULT'
// gulp.task('default', function(){
//     return console.log('plz return my callback function');
// });