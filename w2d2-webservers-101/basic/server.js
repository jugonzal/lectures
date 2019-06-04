let http = require('http');

// request.method
// request.url
// response.end
// response.statusCode

// define app constants
const PORT = 8000;

// create a server with a responder function
let server = http.createServer(function (request, response){
    var route = request.method + request.url
    console.log("Request: ", request)
    // response.end("Hello from the other siiiiide...");
    if (route === 'GET/') {
      // home page
      response.end(`<html>
  <body>
    <h1>Weather Forecast AI</h1>
    <p>Please click on one of our cities:</p>
    <ul>
      <li><a href="/toronto">Toronto</a></li>
      <li><a href="/montreal">Montreal</a></li>
    </ul>
  </body>
</html>`)
    } else if (route === 'GET/toronto') {
      // weather in Toronto
      response.end("kind of cloudy, with a chance of showers")
    } else {
      response.statusCode = 404
      response.end("We are not sure about that")
    }
});

// start the server
server.listen(PORT, function onServerStart(){
    console.log("Server listening on: http://localhost:", PORT);
});