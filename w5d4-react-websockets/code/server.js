console.log("Hello World");

var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use(express.static('client'));

var io = require('socket.io')(server);

var db = [];

io.on('connection', function (socket) {

  socket.emit('message', "Welcome to our Chat Room... Currently live:")
  db.forEach(person => {
    socket.emit('message', person);
  });
  
  socket.on('message', function (payload) {
    var data = JSON.parse(payload)
    db.push(data.who);
    console.log("Full parsed data: ", data)

    // let person = msg.match(/(.+) said/)
    // console.log('Matched expression ',person[0])
    console.log('Received Message: ', data.what, ' from ',data.who, ' at ',data.when);
    io.emit('message', data.what);
  });
});

server.listen(8080, function() {
  console.log('Chat server running');
});