let http = require('http');

// request.method
// request.url
// response.end
// response.statusCode

// define app constants
const PORT = 8000;

const weather = {
  'GET /toronto': `
  <html>
    <body>
      <h1>Weather in Toronto</h1>
      <p>is sunny with a chance of clouds</p>
    </body>
  </html>`,
  'GET /montreal': 'Weather in Montreal is hot and humid'
}

// create a server with a responder function
let server = http.createServer(function (request, response){
  let route = `${request.method} ${request.url}`;
  console.log("route: ", route);

  if (weather[route]) {
    response.end(weather[route])
  }

  // if (route === 'GET /toronto') {
  //   response.end("Weather in Toronto is sunny with a chance of clouds");
  // } else if (route === 'GET /montreal') {
  //   response.end("Weather in Montreal is hot and humid")
  // } else {
  //   response.end("No weather information")
  // }
});

// start the server
server.listen(PORT, function onServerStart(){
    console.log("Server listening on: http://localhost:", PORT);
});