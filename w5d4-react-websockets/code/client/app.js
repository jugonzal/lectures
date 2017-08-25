var socket = io();

$("button").on('click', function() {
  var text = $("#message").val();
  var who = $("#initials").val();

  var structured = {
    who: who,
    what: text,
    when: new Date()
  }

  // socket.emit('jjson',JSON.stringify(structured));
  socket.emit('message', JSON.stringify(structured));
  $('#message').val('');
  // $('<li>').text(who + " said " + text).appendTo('#history');
  
  return false;
});

$("h1").on('click', function() {
  alert("Clicked INPUT");  
});

socket.on('message', function (msg) {
  $('<li>').text(msg).appendTo('#history');
});
