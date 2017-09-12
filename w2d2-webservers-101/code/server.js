const express = require('express');
const app = express();

app.use(function(req, res, next){
    console.log(`New Request: ${req.method} ${req.url}`);
    next();
});

app.use(express.static('public'));

app.set("view engine", "ejs");


app.get('/', function (req, res) {
  res.send(`<h1>Welcome to our Fall Events.</h1>
        <br />Go to <a href='/toronto'>Toronto</a> 
        or <a href='/montreal'>Montreal</a> events`);
});

app.get('/toronto', function (req, res) {
  res.render('toronto');
})

app.get('/city/:name', function(req, res) {
  res.send('No info found on ' + req.params.name);
});

app.get('/montreal', function(req, res) {
  res.render('montreal');
})

app.get('/calgary', function(req,res) {
  res.status(500).send('Something broke!');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
