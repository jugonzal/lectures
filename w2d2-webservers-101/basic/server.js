let http = require('http');

const PORT = 8000;

// request.method
// request.url
// response.end
// response.statusCode

let server = http.createServer(function (request, response){
  let route = request.method + ' ' + request.url;

  if (route === 'GET /') {
    response.end(`
      <html>
      <body>
        <h1>Juan's Weather Station</h1>
        <h3>Pick a City</h3>
        <ul>
          <li><a href='/toronto/today'>Toronto</a></li>
          <li><a href='/chicago/today'>Chicago</a></li>
        </ul>
      </body>
      </html>`)    
  }
  else if (route === 'GET /toronto/today') {
    response.end(`
      <html>
      <body>
        <h1>Juan's Weather Station</h1>
        <h3>Toronto</h3>
        <p>The weather in Toronto is 10 degrees and kind of cloudy</p>
      </body>
      </html>`)
  } else if (route === 'GET /toronto/tomorrow') {
    response.end("The weather tomorrow will be crappy, rainy.  Don't forget your umbrella")
  }   else {
    response.statusCode = 404
    response.end("We just sent our crew to find out.  Visit again, please.")
  }

});

server.listen(PORT, function (){
    console.log("Server listening on: http://localhost: ", PORT);
});