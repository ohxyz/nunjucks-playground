/*
 * Compile nunjucks templates
 *
 */
let path = require( 'path' );
let nunjucks = require( 'nunjucks' );
let globalConfig = require( './config.js' );
let fileSystem = require( 'fs' );

const TEMPLATES_PATH = path.join( globalConfig.ROOT_PATH, 'templates' );
const HTMLS_PATH = path.join( globalConfig.ROOT_PATH, 'static' );

let nunjucksConfig = {

    autoescape: true,
};

nunjucks.configure( TEMPLATES_PATH, nunjucksConfig );

function saveToFile( fileName ) {

    let inputFile = `${ fileName }.njk`;
    let outputFile = `${ fileName }.html`;

    let rendered_string = nunjucks.render( inputFile );
    let destFile = path.join( HTMLS_PATH, outputFile );

    fileSystem.writeFile( destFile, rendered_string, ( error ) => { 

        if ( error !== null ) {
            
            console.error( '[FAIL]', error.message );
        }
        else {

            console.log( '[SUCCESS]', `${ outputFile } created.` );
        }

    } );
}


/* START: Main */
{
    let fileNames = [ 'index', 'contact' ];

    fileNames.forEach( fileName => {

        saveToFile( fileName );

    } );
}
/* END: Main */