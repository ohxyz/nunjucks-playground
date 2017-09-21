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
let compileTemplates = require( './src/compile-templates.js' );


gulp.task( 'compile-styles', () => { 

    compileStyles.compileSass();
} );

gulp.task( 'compile-templates', () => { 
    
    compileTemplates.compileNunjucks();

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
        .pipe( gulp.dest( htmlDest ) );

} );


/* Main */
{

    let devTasks = [

        'compile-styles',
        'compile-templates'
    ];

    let deployTasks = [

        'minify-css',
        'minify-html'
    ];

    gulp.task( 'default', devTasks );
    gulp.task( 'dev', devTasks );

    gulp.task( 'deploy', [ 'dev' ], () => { 

        gulp.start( deployTasks );

    } );
}



