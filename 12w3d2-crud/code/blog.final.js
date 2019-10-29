const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const db = require('./data');
const PORT = 8000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(methodOverride('_method'));

//middleware that runs for every request
app.use(function (req,res,next) {
  console.log(`Request: ${req.method} ${req.url}`);
  next()
})

app.get('/', function (req, res) {
  res.render('index', { posts: db.all() })
});

// app.get('/posts', function(req, res) {
//   console.log('Params ',req.url)
//   res.render('articles', { articles: db.all() })
// })

app.get('/posts/new', function(req, res) {
  res.render('new')
})

app.get('/posts/:id', function(req, res) {
  console.log('retrieving post ', req.params.id);
  // if not found Id... redirect somewhere else
  res.render('one', { post: db.one(req.params.id)})
})

app.put('/posts/:id', function(req, res) {
  console.log('updating post ', req.params.id);
  console.log('Body parsed ', req.body);
  db.update(req.params.id, req.body);
  res.redirect('/posts/'+req.params.id)
  // if not found Id... redirect somewhere else
})

app.post('/posts', function(req, res) {
  console.log('adding new post...', req.body)
  db.add(req.body)
  res.redirect('/')
})

// app.get('/edit/:id', function(req, res) {
//   console.log('updating post ', req.params.id);
//   console.log('Original request ',req.headers);
//   console.log('Body parsed ', req.body);
//   res.send('Got it')
//   // if not found Id... redirect somewhere else
// })

app.get('/posts/:id/edit', function(req, res) {
  res.render('edit', { post: db.one(req.params.id)})
})



// html += '<form action="/articles" method="post"><input type="text" name="filter"><input type="submit" value="Filter"></form>'
// app.post('/articles', function(req, res) {
//   console.log('Filter... ',db.search(req.body.filter))
//   res.render('articles', {articles: db.search(req.body.filter)})
// })


app.listen(PORT, function () {
  console.log('Example app listening on port '+PORT)
})



