const express = require('express');
// const bodyParser = require('body-parser');
const morgan = require('morgan');

// Initialize express
const app = express();

// Use EJS for views
app.set("view engine", "ejs");

// As we discussed before, Express is a very barebones library.
// We can add different functionality using middlewares, which are functions
// that process requests before they're handed to your routing functions.
// See: http://expressjs.com/en/guide/using-middleware.html

// To work with forms and JSON data, we need to configure Express
// to use the bodyParser middleware to convert those types of data
// into JS objects inside our functions.
// app.use(function(req, res, next) {
//   console.log(req.url);
//   next()
// })

// app.use(bodyParser.urlencoded({extended: false})); // forms
// app.use(bodyParser.json()); // JSON

// I'm also adding a logging middleware so we can see what's going on
// with our server. More info: https://github.com/expressjs/morgan
app.use(morgan('dev'));
app.use('/static', express.static('public'))


// Routing functions go here
app.get('/', function (req, res) {
  res.send('Welcome to Express Weather!')
});

app.get('/toronto', function(req, res) {
  res.render('toronto',{city: "Toronto"})
})

app.get('/montreal',function(req, res) {
  res.render('toronto',{city: "Montreal"})
})

app.get('/city/:someCity', (req, res) => {
 console.log("Req Params: ", req.params)
  let templateVars = { 
   city: req.params.someCity,
   forecast: "MetaWeather-LightCloud.png" }
  res.render('toronto',templateVars)
});

// app.post('/pay', function(req, res) {
//   console.log('Hello... ',req.body)
//   res.send("Thank you for your payment...")
//     // req.body will contain any fields submitted in the form
// });


// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
