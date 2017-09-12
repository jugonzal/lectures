let http = require('http');

const PORT = 3000;

var routes = {
  'GET /': `
  <h1>Welcome</h1>
  <h2>To our Web Server</h2>
  Click on <a href="list">this link</a> to get the list`,

  'GET /list': `
  <ul>
    <li>a</li>
    <li>b</li>
    <li>c</li>
  </ul>`
}



// create a server with a responder function
let server = http.createServer(function respondToRequests(request, response){
    var fullRequest = request.method+' '+request.url;
    console.log("Request: ", fullRequest);

    response.setHeader('content-type', 'text/html');

    if (routes[fullRequest]) {
      response.end(routes[fullRequest])
    } else {

    // if (fullRequest == 'GET /') {
    //   response.end("<h1>Welcome</h1>");
    // } else if (fullRequest == 'GET /list') {
    //   response.end("<ul><li>a</li><li>b</li><li>c</li></ul>")
    // } else {
      response.statusCode = 404;
      response.end("404!");
    }

});

// start the server
server.listen(PORT, function onServerStart(){
    console.log("Server listening on: http://localhost:%s", PORT);
});