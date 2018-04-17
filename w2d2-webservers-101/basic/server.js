let http = require('http');

const PORT = 3000;

// create a server with a responder function
let server = http.createServer(function whatShouldDoOnRequest (request, response){
    var fullRequest = request.method+' '+request.url;
    console.log("Request: ", fullRequest);
    // response.end("Thank you for your request")

    if (request.url == '/') {
      var page = "<html><body><h1>Sports LHL</h1><p>Where you will find a list of all games in <a href='/games/toronto'>Toronto</a> tonight</p></body></html>"
      response.end(page)
    } else if (request.url == '/games/toronto') {
      var page = "<html><body><h1>Sports LHL</h1><p>Here are the games in Toronto tonight</p>"
      page += "<ul>"
      page += "   <li>Raptors are playing Washinton</li>"
      page += "   <li>Jays are playing baseball</li>"
      page += "   <li>Wrong guys are playing curling</li>"
      page += "</ul>"
      page += "</body></html>"
      response.end(page)
    }

});

// start the server
server.listen(PORT, function onServerStart(){
    console.log("Server listening on: http://localhost:%s", PORT);
});