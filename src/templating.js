/* Start of file */
let path = require( 'path' );
let nunjucks = require( 'nunjucks' );
let globalConfig = require( './config.js' );
let fileSystem = require( 'fs' );

const TEMPLATES_PATH = path.join( globalConfig.ROOT_PATH, 'templates' );
const HTMLS_PATH = path.join( globalConfig.ROOT_PATH, 'htmls' );

let nunjucksConfig = {

    autoescape: true,
};

nunjucks.configure( TEMPLATES_PATH, nunjucksConfig );

/* START: Main */
if ( require.main === module ) {

    let fileNames = [ 'index', 'contact' ];

    fileNames.forEach( fileName => {

        saveToFile( fileName );

    } );
}
/* END: Main */


/* START: Defines functions, utils, etc */

function saveToFile( fileName ) {

    let inputFile = `${ fileName }.njk`;
    let outputFile = `${ fileName }.html`;

    let rendered_string = nunjucks.render( `${ fileName }.njk` );
    let destFile = path.join( HTMLS_PATH, `${ fileName }.html` );

    fileSystem.writeFile( destFile, rendered_string, error => { 

        if ( error !== null ) {
            
            console.error( '[FAIL]', error.message );
        }
        else {

            console.log( '[SUCCESS]', `${ outputFile } created.` );
        }

    } );
}

/* END: Defines functions, utils, etc */



/* End of file */