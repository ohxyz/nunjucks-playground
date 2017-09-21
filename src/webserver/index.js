/* START */
let path = require( 'path' );
let nj = require( 'nunjucks' );
let express = require( 'express' );
let globalConfig = require( '../config.js' );

const staticFilesPath = path.join( globalConfig.ROOT_PATH, 'static' );
const PORT = 3000;

let webApp = express();

webApp.use( express.static( staticFilesPath ) );

webApp.listen( PORT, () => { 

    console.log( `Web server at ${PORT}` );
    
} );

/* END */
