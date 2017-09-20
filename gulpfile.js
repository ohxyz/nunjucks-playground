/*
 * Tasks run by Gulp
 */

let gulp = require( 'gulp' );
let gulpCleanCss = require( 'gulp-clean-css' );
let gulpUglify = require( 'gulp-uglify' );
let gulpRename = require( 'gulp-rename' );
let gulpConcat = require( 'gulp-concat' );
let gulpHtmlmin = require( 'gulp-htmlmin' );

let compileStyles = require( './src/compile-styles.js' );


gulp.task( 'compile-sass', () => { 

    compileStyles.compileSass();

} );

gulp.task( 'minify-css', () => {

    let cssFiles = 'src/static/css/*.css';
    let cssDest = 'dist/style';
    let renameOptions = { suffix: '.min' }; 

    gulp.src( cssFiles )
        .pipe( gulpCleanCss() )
        .pipe( gulpRename( renameOptions ) )
        .pipe( gulp.dest( cssDest ) ); 

} );

gulp.task( 'minify-html', () => { 

    let htmlFiles = 'src/static/*.html';
    let htmlDest = 'dist';
    let options = {

        collapseWhitespace: true
    };

    gulp.src( htmlFiles )
        .pipe( gulpHtmlmin( options ) )
        .pipe( gulp.dest( htmlDest ) )

} );


/* Main */
{
    let defaultTasks = [

        'compile-sass',
        'minify-css',
        'minify-html'
    ];

    gulp.task( 'default', defaultTasks );
}