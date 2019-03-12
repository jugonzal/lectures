let http = require('http');

const PORT = 8000;

let server = http.createServer(function (request, response){
  let route =  request.method + ' ' + request.url;
  console.log('Route: ', route);
  // switch (route) {
  //   case 'GET /toronto':
  //     response.end('It is mildly cold in Toronto today.');
  //     break;
  // }
  if (route === 'GET /toronto') {
    response.end('It is mildly cold in Toronto today.')
  } else if (route == 'GET /montreal') {
    response.end('We think it must be very cold in Montreal. Probably.')
  } else if (route  == 'GET /') {
    response.end(`
      <html>
      <body>
        <h1>Juan's meteorological service</h1>
        <p>Welcome and please select one of the following citiers:<p>
        <ul>
          <li><a href='/toronto'>Toronto</a></li>
          <li><a href='/montreal'>Montreal</a></li>
        </ul>
      </body>
      </html>`)
  } else {
    response.statusCode = 404;
    response.end('I have never been there...')
  }
});

server.listen(PORT, function (){
    console.log("Server listening on: http://localhost: ", PORT);
});