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
    response.end("Hello from the other siiiiide...");
});

// start the server
server.listen(PORT, function onServerStart(){
    console.log("Server listening on: http://localhost:", PORT);
});