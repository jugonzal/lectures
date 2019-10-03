const express = require('express');
const app = express();
// not needed anymore as express has its own
// const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const db = require('./data');
const PORT = 8000;

app.set("view engine", "ejs");

// will only use as needed
// app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(methodOverride('_method'));

//middleware that runs for every request
// app.use(function (req,res,next) {
//   console.log(`Request: ${req.method} ${req.url}`);
//   next()
// })
// instead use morgan for logs at the server
const logger = require('morgan');
app.use(logger('dev'));

// delegate all API routes to a module
const api = require('./routes/api');
app.use('/api', api);
// app.use('/api/v2', api2);

app.get('/', function (req, res) {
  res.render('index', { posts: db.all() })
});

app.get('/posts/new', function(req, res) {
  res.render('new')
})

app.get('/posts/:id', function(req, res) {
  console.log('retrieving post ', req.params.id);
  // if not found Id... redirect somewhere else
  res.render('one', { post: db.one(req.params.id)})
})

// Notice the use of the body parser 
app.put('/posts/:id', express.urlencoded({ extended: true }), function(req, res) {
  console.log('updating post ', req.params.id);
  console.log('Body parsed ', req.body);
  db.update(req.params.id, req.body);
  res.redirect('/posts/'+req.params.id)
  // if not found Id... redirect somewhere else
})

app.post('/posts', express.urlencoded({ extended: true }), function(req, res) {
  console.log('adding new post...', req.body)
  db.add(req.body)
  res.redirect('/')
})

app.get('/posts/:id/edit', function(req, res) {
  res.render('edit', { post: db.one(req.params.id)})
})

app.listen(PORT, function () {
  console.log('Example app listening on port '+PORT)
})



