// let http = require('http');
const express = require('express');
const app = express();

// define app constants
const PORT = 3000;

app.set("view engine", "ejs");

// read about how to use a public directory...
app.use(express.static('public'));


app.get('/', function (req, res) {
  res.send(`<h1>Welcome to our Summer Events.</h1>
        <br />Go to <a href='/toronto'>Toronto</a> 
        or <a href='/montreal'>Montreal</a>`);
});

app.get('/toronto', function (req, res) {
  res.render('toronto');
})

app.get('/montreal', function(req, res) {
  res.render('montreal');
})

app.get('/city/:someCity', function(req, res) {
  console.log('New city: ', req.params.someCity);
  res.send('Comming to this city soon...');
})

// create a server with a responder function
// let server = http.createServer(function respondToRequests(request, response){
//     // respond to all requests in this function
//     console.log("Request: ", request.method, request.url)

//     if (request.url === '/toronto') {
//       response.statusCode = 200;
//       response.setHeader('content-type', 'text/html');
//       response.end(`Larry The Duck at Harbourfront<br />
//         <img src='https://pbs.twimg.com/media/DDl6BewXkAAIiES.jpg'>`);
//     } else if (request.url === '/montreal') {
//       response.statusCode = 200;
//       response.setHeader('content-type', 'text/html');
//       response.end(`Jazz Festival<br />
//         <img src='http://www.montrealjazzfest.com/Content/Images/static/open_graph.jpg'>`);
//     } else if (request.url === '/') {
//       response.statusCode = 200;
//       response.end(`<h1>Welcome to our Summer Events.</h1>
//         <br />Go to <a href='/toronto'>Toronto</a> 
//         or <a href='/montreal'>Montreal</a>`);
//     } else {
//       response.statusCode = 404;
//       response.end(`Don't know anything about that`);
//     }
// });

// // start the server
// server.listen(PORT, function onServerStart(){
//     console.log("Server listening on: http://localhost:%s", PORT);
// });

app.listen(PORT, function () {
  console.log('Example app listening on port 3000!')
})
