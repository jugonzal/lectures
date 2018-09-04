const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set("view engine", "ejs");
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.use(function (req,res,next) {
  console.log(`Request: ${req.method} ${req.url}`);
  next()
})

app.get('/', function (req, res) {
  res.render('index')
});

app.post('/contact', function(req, res) {
  console.log('Hello... ',req.body)

});

app.get('/games/toronto', function (req, res) {
  res.render('toronto',
    {events: [
      {team: 'Raptors', game: 'Washington', image: '/raptors.jpg'},
      {team: 'TFC', game: 'CONCACAF', image: '/tfc.png'},
      {team: 'Maple Leafs', game: 'Browns', image: '/ultimate.png'}
    ],
    var2 : 3.14159265 })
})

app.get('/games/montreal', function (req, res) {
  res.render('montreal')
})

app.get('/games/calgary', function(req,res) {
  res.status(404).send('Under Construction!');
})



app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})



