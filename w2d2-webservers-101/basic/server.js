let http = require('http');

const PORT = 3000;

// create a server with a responder function
let server = http.createServer(function whatToDoOnRequest (request, response){
    var fullRequest = request.method+' '+request.url;
    console.log("Request: ", fullRequest);
    response.end("GOT IT!")
});

// start the server
server.listen(PORT, function onServerStart(){
    console.log("Server listening on: http://localhost:%s", PORT);
});