const express = require( 'express' ),
      path    = require( 'path' ),
      port    = process.env.PORT || 8080;

const app = express();

// TODO: check this method
// const forceSSL = () => {
//     return ( req, res, next ) => {
//         if ( req.headers['x-forwarded-proto'] !== 'https' ) {
//             return res.redirect(
//                 ['https://', req.get( 'Host' ), req.url].join( '' )
//             );
//         }
//         next();s
//     };
// };
  
// app.use( forceSSL() );

app.use( express.static( __dirname + '/build' ) );

app.get( '*', ( req, res ) =>
    res.sendFile( path.resolve( __dirname + '/build/index.html' ) ) );

app.listen( port );