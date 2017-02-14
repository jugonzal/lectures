
let http = require('http');

// define app constants
const PORT = 3000;

// create a server with a responder function
let server = http.createServer(function respondToRequests(request, response){
        // respond to all requests in this function
    console.log("Request: ", request.url)
    if (request.url == '/') {
      //HOME PAGE
      response.end('<H1>Linked IN</H1><p>Hello from the other siiiiiiide!</p><p>Go to our <a href="/about">About</a> page or our <a href="/careers">Careers</a> page');
    } else if (request.url == '/about') {
      //ABOUT PAGE
      response.end('<H1>Linked IN</H1><p>We founded this company many years ago</p>');
    } else if (request.url == '/careers') {
      // WE ARE HIRING !
      response.end('<H1>Linked IN</H1><p>We want YOU! <img src="https://www.marketslant.com/sites/default/files/field/image/uncle-sam-we-want-you1.jpg"></p>');
    } else {
      response.statusCode = 404;
      response.end('Not Found. Go.');
    }
});

// start the server
server.listen(PORT, function onServerStart(){
    console.log("Server listening on: http://localhost:%s", PORT);
});