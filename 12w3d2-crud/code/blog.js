const express = require('express');
const app = express();
const db = require('./data');
const methodOverride = require('method-override');
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
app.use(methodOverride('_method'));


app.get('/', function(req, res) {
  res.redirect('/posts')
})

app.get('/posts', function (req, res) {
  res.render('index', {posts: db.all()})
});

app.get('/posts/:id', function(req, res) {
  if (req.params.id < db.count()) {
    res.render('one', { post: db.one(req.params.id) })
  } else {
    res.status(404).send("No no...  you probably meant <a href='/posts'> the list of posts</a>")
  }
  // res.send('Post: ' + db.one(req.params.id).body)
})

app.put('/posts/:id', function(req, res) {
  db.update(req.params.id, req.body)
  res.redirect('/posts/'+req.params.id)
})

app.post('/posts', function(req, res) {
  // console.log('someone posted a post ', req.body)
  db.add(req.body)
  res.redirect('/posts')
})

app.get('/new', function(req, res) {
  res.render('new')
})

app.get('/edit/:id', function(req, res) {
  res.render('edit', { post: db.one(req.params.id) })
})

app.listen(PORT, function () {
  console.log('Example app listening on port '+PORT)
})



