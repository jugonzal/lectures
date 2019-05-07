let http = require('http');

const PORT = 8000;

// request.method
// request.url
// response.end
// response.statusCode

let server = http.createServer(function (request, response){
  var route = request.method + ": " + request.url;

  if (route === 'GET: /') {
    response.end(`
      <html>
      <body>
        <h1>Weather Forecast AI</h1>
        <p>Please click on one of our cities:</p>
        <ul>
          <li><a href="/weather/toronto">Toronto</a></li>
          <li><a href="/weather/montreal">Montreal</a></li>
        </ul>
      </body>
      </html>
      `);
  } else if (route === 'GET: /weather/toronto') {
    response.end("Today is kind of rainy...")
  } else if (route === 'GET: /weather/montreal') {
    response.end("We think it is still snowing")
  } else {
    response.statusCode = 404;
    response.end("Honestly, we don't know");
  }
});

server.listen(PORT, function (){
  console.log("Server listening on: http://localhost: ", PORT);
});