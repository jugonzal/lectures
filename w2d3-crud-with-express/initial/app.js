const express = require('express');
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const morgan = require('morgan');
const db = require('./app-db')

// Initialize express
const app = express();

// Use EJS for views
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: false})); // forms
app.use(methodOverride('_method'))

// I'm also adding a logging middleware so we can see what's going on
// with our server. More info: https://github.com/expressjs/morgan
app.use(morgan('dev'));  // or 'combined' for a more detailed log



// Routing functions go here
app.get('/', (req, res) => {
  res.redirect('/lps')
});

app.get('/lps', (req, res) => {
  res.render('index',{database: db.all()})
})

app.get('/lps/1989')

app.get('/lps/year/:year', (req, res) => {
  res.render('show',db.read('year',req.params.year))
})

app.get('/create', (req, res) => {
  res.render('create')
})

app.post('/lps', (req, res) => {
  db.create(req.body)
  res.redirect('/lps')
})

app.put('/lps/:year', (req, res) => {
  console.log("I should edit ",req.params.year," with ",req.body)
  res.redirect('/lps')
})

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
