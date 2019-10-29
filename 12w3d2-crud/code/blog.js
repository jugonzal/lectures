const express = require('express');
const app = express();
const methodOverride = require('method-override');
const db = require('./data');
const morgan = require('morgan')
const PORT = 8000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

app.use(methodOverride('_method'));

app.use(morgan('dev'))

app.get('/', function(req, res) {
  res.redirect('/posts')
})

app.get('/posts', function (req, res) {
  res.render('index', { posts: db.all() })
});

app.get('/posts/:id', function(req, res) {
  // res.send('Post: ' + db.one(req.params.id).body)
  res.render('one', { post: db.one(req.params.id), count: db.count() })
})

app.get('/new', function(req, res) {
  res.render('new')
})

app.get('/edit/:id', function(req, res) {
  res.render('edit', { post: db.one(req.params.id) })
})

// app.post('/test', function(req, res) {
//   console.log("Received: ", req.url, req.body)
//   res.render('new')
// })

app.post('/posts', function(req, res) {
  console.log('someone posted a post ', req.body)
  db.add(req.body)
  res.redirect('/posts')
})

app.put('/posts/:id', function(req, res) {
  console.log('someone changed a post ', req.body)
  db.update(req.params.id, req.body)
  res.redirect('/posts/'+req.params.id)
})


app.listen(PORT, function () {
  console.log('Example app listening on port '+PORT)
})



