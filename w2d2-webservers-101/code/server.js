const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.use(express.static('public'))

app.use(function(req, res, next){
    console.log(`Log Method: ${req.method}`);
    // req.method='PUT'
    next();
});

app.use(function(req, res, next){
    console.log(`Log URL: ${req.url}`);
    next();
});


app.get('/', function (req, res) {
  res.render('index');
});

app.put('/', function (req, res) {
  res.send('You should not PUT stuff here')
})

app.get('/games/toronto', function (req, res) {
  res.render('toronto',
    {events: [
      {team: 'Raptors', game: 'Washington'},
      {team: 'TFC', game: 'CONCACAF'}
    ],
    var2 : 3.14159265 })
})

app.get('/games/montreal', function(req, res) {
  res.render('montreal')
})

app.get('/games/calgary', function(req,res) {
  res.status(404).send('Under Construction!');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})



