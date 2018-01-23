let http = require('http');

const PORT = 3000;

// create a server with a responder function
let server = http.createServer(function whatToDoOnRequest (request, response){
    var fullRequest = request.method+' '+request.url;
    console.log("Request: ", fullRequest);

    if (request.url == '/') {
      response.end(`
        <html>
          <body>
            <h1>AWESOME Event Website</h1>
            <p>Welcome to my awesome website</p>
            <ul>
              <li>Events in <a href="/toronto">Toronto</a></li>
              <li>Events in <a href="/montreal">Montreal</a></li>
            </ul>
          </body>
        </html>
      `)
    } else if (request.url == '/toronto') {
      response.end(`
        <html>
          <body>
            <h1>AWESOME Event Website</h1>
            <p>Events in Toronto</p>
            <ul>
              <li>TIFF</li>
              <li>Christmas Market</li>
            </ul>
          </body>
        </html>
      `)
    } else if (request.url == '/montreal') {
      response.end(`
        <html>
          <body>
            <h1>AWESOME Event Website</h1>
            <p>Events in Montreal</p>
            <ul>
              <li>Jazz Festival</li>
              <li>High fives for everyone</li>
              <li>Igloofest</li>
              <li>Nuit Blance</li>
            </ul>
          </body>
        </html>
      `)
    } else {
      response.statusCode = 404;
      response.statusMessage = 'Not found';
      response.end('under construction')    }
});

// start the server
server.listen(PORT, function onServerStart(){
    console.log("Server listening on: http://localhost:%s", PORT);
});