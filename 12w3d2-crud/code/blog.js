const express = require('express');
const app = express();
const db = require('./data');
const methodOverride = require('method-override');
const PORT = 8000;

app.set("view engine", "ejs");
// app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))

app.get('/', function(req, res) {
  res.redirect('/articles')
})

app.get('/articles', function (req, res) {
  res.render('index', { posts: db.all() })
});

app.get('/articles/:postId', function (req, res) {
  res.render('one', { post: db.all()[req.params.postId] })
})

app.get('/new', function(req, res) {
  res.render('new')
})

app.post('/articles', express.urlencoded({extended: false}), function(req, res) {
  db.add(req.body)
  res.redirect('/')
})

app.get('/edit/:postId', function(req, res) {
  res.render('edit', { post: db.one(req.params.postId) })
})

app.put('/articles/:postId',express.urlencoded({extended: false}), function(req, res) {
  db.update(req.params.postId, req.body)
  res.redirect('/articles/'+req.params.postId)
})

app.listen(PORT, function () {
  console.log('Example app listening on port '+PORT)
})



