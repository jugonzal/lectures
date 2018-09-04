let http = require('http');

// define app constants
const PORT = 3000;

// create a server with a responder function
let server = http.createServer(function respondToRequests(request, response){
    console.log("Request: ", request.method, request.url)

    if (request.url === '/') {
      response.end(`
        <html>
          <body>
            <img style="float: right" height="50px" src="https://pbs.twimg.com/profile_images/378800000328970347/40e96c650dad499b060a4f24ddc68c6e_400x400.png">
            <h1>Lighthouse Labs</h1>
            <h2>Fall <a href="/courses">Courses</a></h2>
          </body>
        </html>
        `); 
    } else if (request.url === '/courses') {
      response.end(`
       <html>
          <body>
            <h1>Lighthouse Labs</h1>
            <h2>Fall Courses</h2>
            <ul>
              <li>Web Bootcamp</li>
              <li>iOS Bootcamp</li>
            </ul>
          </body>
        </html>
         `)
    } else {
      response.end('Big 404')
    }
});

// start the server
server.listen(PORT, function onServerStart(){
    console.log("Server listening on: http://localhost:%s", PORT);
});