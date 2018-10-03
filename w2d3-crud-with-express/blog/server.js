const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override')

const db = require('./data');
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.use(function (req,res,next) {
  console.log(`Request: ${req.method} ${req.url}`);
  next()
})

app.get('/', function (req, res) {
  // res.send('Hello!')
  res.redirect('/articles')
});

app.get('/new', function (req, res) {
  res.render('new')
})

app.get('/articles', function(req, res) {
  console.log('Params ',req.url)
  res.render('articles', { articles: db.all()})
})

app.get('/articles/search/:keyword', function(req, res) {
  res.render('articles', {articles: db.search(req.params.keyword)})  
})

app.get('/articles/:id', function(req, res) {
  res.render('one', {article: db.one(req.params.id)})
})

app.put('/articles/:id', function(req, res) {
  console.log("PUT payload: ", req.body)
  db.update(req.params.id, req.body.title)
  res.redirect('/articles')
})

// html += '<form action="/articles" method="post"><input type="text" name="filter"><input type="submit" value="Filter"></form>'
app.post('/articles', function(req, res) {
  try {
    db.add (req.body)
  } catch (err) {
    console.log("something went wrong ", err)
  }
  res.redirect('/articles')
})


app.listen(PORT, function () {
  console.log('Example app listening on port '+PORT)
})



