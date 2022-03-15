
const admin = require( 'firebase-admin' );
const express = require( 'express' );

const app = express();
app.use( express.json() );
const serviceAccount = require( './fir-24393-firebase-adminsdk-rgz7s-08b0781402.json' );

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fir-24393-default-rtdb.firebaseio.com"
});
// const message = {
//   notification: {
//     title: 'Hello World',
//     body: JSON.stringify( { id: '123' } )
//   },
//   data: { id: '123' },
//   token: 'eaDXre0aTvqy_snKtt69dG:APA91bGBkoa5ofFc4rOdDgqcVzNK1yS_U2gab9PwmTlpXURf-AxtmNpJda5dL74UzkVfZYcdv2uciEQPhWmRdBqAAGFQd9_YovHGW_9cgOKYDHFgvBxN9Zx2lmcVKdJnlvB-_D4828Hn'

// };
// admin.messaging().send( message ).then( ( result ) => {
//   console.log( '====================================' );
//   console.log( { result } );
//   console.log( '====================================' );
// } ).catch( ( err ) => {
//   console.log( { err } );
// } );

app.post( '/send', ( req, res ) => {
  console.log(req.query); 
  const message = {
    notification: {
      title: req.query.nameGV || '',
      body: req.query.noidung || ''
    }, 
    data:{
      note:'Nhậu'
    },
    token: req.query.token

  };
  admin.messaging().send( message ).then( ( result ) => {
     
    } ).catch( ( err ) => {
      console.log( { err } );
    } );
  res.send( 'Thanh cong' );
} );
// get api
app.get( '/get', ( req, res ) => {
  res.send( ' day thay cong' );
} );
const PORT = process.env.PORT ||5000;
app.listen( PORT, () => {
  console.log( 'listening on port 3000' );
} );
