const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./data');
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.use(function (req,res,next) {
  console.log(`Request: ${req.method} ${req.url}`);
  next()
})

app.get('/', function (req, res) {
  // res.send('Hello!')
  res.render('index')
});

app.get('/articles', function(req, res) {
  console.log('Params ',req.url)
  res.render('articles', { articles: db.all() , pi: 3.14159265})
})

app.get('/articles/:id', function(req, res) {
  res.render('one', {article: db.one(req.params.id)})
})

// html += '<form action="/articles" method="post"><input type="text" name="filter"><input type="submit" value="Filter"></form>'
app.post('/articles', function(req, res) {
  console.log('Filter... ',db.search(req.body.filter))
  res.render('articles', {articles: db.search(req.body.filter)})
})


app.listen(PORT, function () {
  console.log('Example app listening on port '+PORT)
})



