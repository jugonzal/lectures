const http = require('http');

// request.method
// request.url
// response.end
// response.statusCode

// define app constants
const PORT = 8000;

const routes = {
  '/weather/tomorrow': "Sunny with a hint of brisky wind",
  '/weather/dayafter': "Time to build your snowman",
  '/weather/halloween': "Spooky to be out there",
  '/weather': `<html>
  <body>
    <h1>LHL Weather Forecast</h1>
    <p>Welcome to our weather system. Select from one of these options:</p>
      <ul>
        <li><a href="/weather/tomorrow">Tomorrow</a></li>
        <li><a href="/weather/dayafter">Wednesday</a></li>
        <li><a href="/weather/halloween">Thursday</a></li>
      </ul>
  </body>
  </html>`
}

// create a server with a responder function
let server = http.createServer(function (request, response){
    console.log("Request: ", request.method, request.url)

    if (routes[request.url]) {
      response.end(routes[request.url])
    } else {
      response.statusCode = 404
      response.end("Hello from the other siiiiide...");

    }

});

// start the server
server.listen(PORT, function onServerStart(){
    console.log("Server listening on: http://localhost:", PORT);
});