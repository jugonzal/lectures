var httpServer = require('http');

function homePage () {
  return 'Welcome to my Site. Go <a href="/left">left</a> or go <a href="/right">right</a>'
}

var server = httpServer.createServer(function (request, response) {
  // var ip = response.socket.remoteAddress;
  // var port = response.socket.remotePort;

  // console.log('Request: ', request)
  // response.end(`This is stuff I know about you:
  //   Your IP address is ${ip}
  //   your source port is ${port}
  //   your client seems to be a ${request.headers['user-agent']}
  //   you typed this host ${request.headers.host}
  //   you asked for this URL ${request.url} with method ${request.method}`);

  var page = '<html><body>'

  if (request.url === '/') {
    page += homePage()
  } else if (request.url === '/left') {
    page += 'Welcome to the LEFT'
  } else if (request.url === '/right') {
    page += 'Welcome to the RIGHT'
  } else {
    page +='You are lost... Go back <a href="/">Home</a>'
  }

  page += '</body></html>'
  response.end(page)

});

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(8000);
console.log('Server listening...')