let express = require( "express" );
let usersDB = require( "./data/users" );
let bodyParser = require( "body-parser" );
const methodOverride = require('method-override')

const PORT = 8080;

let app = express( );

function logPayload (req, res, next) {
  console.log("URL Params: ", req.params)
  console.log("Query Params: ", req.query)
  console.log("Body Payload: ", req.body)
  next()
}

app.set( "view engine" , "ejs" );
app.use( bodyParser.urlencoded( { extended : true } ) );
app.use(methodOverride('_method'))
app.use(logPayload)

app.get( "/" , function ( req , res ) {
	res.render( "filter" , { } );
});

app.get( "/users" , function ( req , res ) {
	res.render( "users" , { users : usersDB.getAll( ) });
	//console.log( usersDB.getAll( ) );
	//res.json( usersDB.getAll( ) );
	//.res.send( "the list of users should be here" );
});

app.post ("/users", function (req, res) {
  usersDB.add(req.body)
  redirect("/users")
})

app.get( "/users/name/:someName" , function ( req , res ) {
	res.render( "users" , { users : usersDB.findByName( req.params.someName ) });
});

app.get( "/users/:id" , function ( req , res ) {
	res.render( "user" , { user : usersDB.getById( req.params.id ) } );
});

app.get( "/new/user", function (req, res) {
  res.render( "new" )
});

app.put( "/users/:unique" , function ( req , res ) {
  usersDB.update(req.params.unique, req.body.username, req.body.email, req.body.phone)
  res.redirect(`/users/${req.params.unique}`)
});

app.listen( PORT , function onServerStart( ) {
	console.log ( "Express server started on port  ", PORT);
})