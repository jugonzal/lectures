const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const db = require('./data');
const PORT = 8000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(methodOverride('_method'));

app.get('/', function (req, res) {
  res.render('index', {posts: db.all()})
});

app.get('/posts/:postId', function(req, res) {
  res.render('one', {post: db.one(req.params.postId)})
})

app.get('/new', function(req,res) {
  res.render('new')
})

app.post('/posts', function(req, res) {
  console.log('Adding new article ',req.body)
  db.add(req.body)
  res.redirect('/')
})

app.get('/edit/:postId', function(req, res) {
  res.render('edit', {post: db.one(req.params.postId)})
})

app.put('/posts/:postId', function(req, res) {
  db.update(req.params.postId, req.body)
  res.redirect('/')
})

app.listen(PORT, function () {
  console.log('Example app listening on port '+PORT)
})



