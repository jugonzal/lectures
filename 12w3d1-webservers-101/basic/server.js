let http = require('http');

// request.method
// request.url
// response.end
// response.statusCode

// define app constants
const PORT = 8000;

const routes = {
  'GET/weather/toronto': {city: 'Toronto', forecast: 'SO nice'}

  `<h1>Toronto</h1><p>Weather in ${variable} today is SO nice</p>`,
  'GET/weather/ottawa': '<h1>Ottawa</h1><p>Weather in Ottawa today is windy, but sunny</p>',
  'GET/weather/calgary': '<h1>Calgary</h1><p>Weather in Calgary today is wintery',
  'GET/': `<h1>Weather Mehtwork</h1>
  <ul>
    <li>
      <a href="/weather/toronto">Toronto</a>
    </li>
    <li>
      <a href="/weather/ottawa">Ottawa</a>
    </li>
    <li>
      <a href="/weather/calgary">Calgary</a>
    </li>
  </ul>`
}

// create a server with a responder function
let server = http.createServer(function (request, response){
    let route = request.method + request.url;
    console.log("Request: ", route);
    if (routes[route]) {
      response.end(routes[route])
    } else {
      response.end("We are updating our forecast...");
    }
});

// start the server
server.listen(PORT, function onServerStart(){
    console.log("Server listening on: http://localhost:", PORT);
});