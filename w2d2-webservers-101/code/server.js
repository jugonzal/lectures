const express = require('express');
const app = express();

var countVisitors = 0;

app.use(function(req, res, next){
    console.log(`Saw a new Request fly by... ${++countVisitors}`);
    next();
});

app.use(function(req, res, next){
    console.log(`Log Request: ${req.method} ${req.url}`);
    next();
});

app.set("view engine", "ejs");

app.get('/', function (req, res) {
  res.send(`
        <html>
          <body>
            <h1>AWESOME Event Website</h1>
            <p>Welcome to my awesome website</p>
            <ul>
              <li>Events in <a href="/toronto">Toronto</a></li>
              <li>Events in <a href="/montreal">Montreal</a></li>
            </ul>
          </body>
        </html>
      `);
});

app.get('/toronto', function (req, res) {
  res.render('toronto')
})

app.get('/montreal', function(req, res) {
  res.render('montreal',{eventName: 'Awesome EVENTS' })
})

app.get('/calgary', function(req,res) {
  res.status(404).send('Under Construction!');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})



