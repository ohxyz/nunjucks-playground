/* START */
let path = require( 'path' );
let nj = require( 'nunjucks' );
let express = require( 'express' );
let globalConfig = require( '../config.js' );

const HTMLS_PATH = path.join( globalConfig.ROOT_PATH, 'htmls' );
const PORT = 3000;

let webApp = express();

webApp.use( express.static( HTMLS_PATH ) );

webApp.listen( PORT, () => { 

    console.log( `Web server at ${PORT}` );
    
} );

/* END */
