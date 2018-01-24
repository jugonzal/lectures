const express = require('express');
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const morgan = require('morgan');

// Initialize express
const app = express();

// Use EJS for views
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: false})); // forms
app.use(methodOverride('_method'))

// I'm also adding a logging middleware so we can see what's going on
// with our server. More info: https://github.com/expressjs/morgan
app.use(morgan('dev'));  // or 'combined' for a more detailed log

const DB = [{
  title: "Greatest Hits",
  artist: "Queen",
  year: 1989
},{
  title: "Time Out",
  artist: "Dave Brubeck",
  year: 1959
}]


function create (newLP) {
  DB.push(newLP)
}

create({
  title: "Kind of Blue",
  artist: "Miles Davis",
  year: 1966
})

console.log(DB);

function read (query, value) {
  for (let lp of DB) {
    if (lp[query] == value) {
      //lp.year
      //lp.artist
      return lp;
    }
  }
}

console.log(read('year',1966))

// Routing functions go here
app.get('/', (req, res) => {
  res.redirect('/lps');
});

app.get('/create',(req, res) => {
  res.render('create');
})

app.get('/lps', (req, res) => {
  res.render('index',{database: DB});
})

app.post('/lps', (req, res) => {
  console.log('Added LP for ',req.body.title)
  create(req.body)
  res.redirect('/lps')
})

app.get('/lps/:aYear', (req, res) => {
  console.log('Found LP for ', read('year',req.params.aYear))
  res.render('show',read('year',req.params.aYear))
})

app.put('/lps/:aYear', (req, res) => {
  console.log("I should edit ",req.params.aYear," with ",req.body)
  res.redirect('/lps')
});

app.delete('/lps/:aYear', (req, res) => {
  console.log("Remind me to delete ",req.params.aYear)
  res.redirect('/lps')
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
