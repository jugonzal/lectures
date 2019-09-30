let http = require('http');

// request.method
// request.url
// response.end
// response.statusCode

// define app constants
const PORT = 8000;

// create a server with a responder function
let server = http.createServer(function (request, response){
    console.log("Request: ", request.method, request.url)

    let route = request.method + request.url
    if (route == 'GET/toronto' ) {
      response.end("Weather in Toronto is cloudy");
    } else if (route == 'GET/montreal') {
      response.end("Weather in Montreal is snowy")
    } else if (route == 'GET/' ) {
      response.end("<html><body><h1>Weather Forecast</h1><p>Welcome to your weather forecast. Pick from one of our cities:</p><ul><li><a href='/toronto'>Toronto</a></li><li><a href='/montreal'>Montreal</a></li></ul></body></html>")
    } else {
      response.end("We do not know yet")
    }

});

// start the server
server.listen(PORT, function onServerStart(){
    console.log("Server listening on: http://localhost:", PORT);
});