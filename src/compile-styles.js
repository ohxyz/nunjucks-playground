/* 
 * Compile scss files
 */

let path = require( 'path' );
let { spawn } = require( 'child_process' );
let globalConfig = require( './config.js' );


const SCSS_DIR = path.join( globalConfig.ROOT_PATH, 'scss' );
const OUTPUT_DIR = path.join( globalConfig.ROOT_PATH, 'static/css' )

function compileSass() {

    let inputFilePath = path.join( SCSS_DIR, 'main.scss' );
    let outputFilePath = path.join( OUTPUT_DIR, '0.css' );

    let compileProcess = spawn( 'sass', [ inputFilePath, outputFilePath ] );

    compileProcess.stdout.on( 'data', ( data ) => { 

        console.log( data.toString() );

    } );

    compileProcess.stderr.on( 'data', ( data ) => { 

        console.log( data.toString() );

    } );

    compileProcess.on( 'exit', ( code ) => {  

        console.log( `Sass compilation finished, exit code ${code} `);

    } );

}

module.exports = {

    compileSass,
};