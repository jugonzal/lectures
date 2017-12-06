const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
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
app.use(bodyParser.urlencoded({extended: false})); // forms
// app.use(bodyParser.json()); // JSON

app.use(methodOverride('_method'))

// I'm also adding a logging middleware so we can see what's going on
// with our server. More info: https://github.com/expressjs/morgan
app.use(morgan('dev'));

let DB = [{ 
  number: 1,
  name: 'Mr Blue Sky',
  artist: 'Electric Light Orchestra',
  year: 1972
}, {
  number: 2,
  name: 'Black Sabbath',
  artist: 'Black Sabbath',
  year: 1978  
}]

function create (track) {
  DB.push(track)
}

function read (criteria, value) {
  for (let i = 0; i< DB.length; i++) {
    if (DB[i][criteria] == value) {
      return DB[i]
    } 
  }
}

create({
  number: 3,
  name: 'Cowboy Bebop',
  artist: 'Seatbelts',
  year: 1995
})
console.log(read('year',1995))


// Routing functions go here
app.get('/', (req, res) => {
  res.redirect('/tracks');
});

app.get('/tracks', (req, res) => {
  res.render('index', {tracks: DB});
});

app.get('/tracks/new', (req, res) => {
  res.render('new');
});

app.post('/tracks', (req, res) => {
  console.log("New Track", req.body.name)
  create({
    number: req.body.number,
    name: req.body.name,
    artist: req.body.artist,
    year: req.body.year
  })
  res.redirect('/tracks')
})

app.get('/tracks/:id', (req, res) => {
  res.render('show',{track: read("number",req.params.id)});
});

app.put('/tracks/:id', (req, res) => {
  console.log("I should edit ",req.params.id)
  res.redirect('/tracks')
});

app.delete('/tracks/:id', (req, res) => {
  
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
