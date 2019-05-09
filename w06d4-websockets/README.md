## Websockets

Today we played with WebSockets using a very minimalistic approach. We've started with something super bare-bones - just sending messages to the server and broadcasting them back to the client - and then we've built a (really fun and messy!) real-time chat application.

Websockets are a bidirectional protocol (vs. HTTP, which is request-response). This means messages can be sent both from server *and* client in real-time. This means the server **doesn't need to wait for a request to send a response**. This allows for real-time communication. We also talked about the fact that the connections with clients are stateful... so once the connection is open, you can figure out all the message that came from the same client. This is very much opposed to the way that HTTP works.

* Client-side
  * Just use the native [WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications) (no need for socket.io these days)
* Server-side
  * Use the bare-bones `ws` package - https://github.com/websockets/ws

## Regular Expressions

But perhaps the more important lesson today was that if your are given *just a string* to pass a message, you can pack all kinds of wonderful data within by _tokenizing_ the content.  The simplest example just added a timestamp to a message string:

```javascript
msg = 'Hey I am starting lecture now'
msg += '|' + (new Date())
```

By simple adding the `|` delimiter, we are able to parse the contents of that string and make sense of its various parts. This is pretty much what `JSON.stringify()` and `JSON.parse()` are doing but with a little more sophisticated tokenizing.  

This led us to research Regular Expressions as a tool to build smarter parsers of content.  I used [regexr.com](https://regexr.com/) as a tool to practice/test regular expressions, but perhaps you need to read the [MDN Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) documentation to arm yourself with a few tricks.

I am going to suggest you use [RegexKoans](https://github.com/frenchroasted/RegexKoans), a great tutorial to build up your skills.  Perhaps one day you will be able to write a perfectly reliable phone-capture regex: not `[0-9]{3}\-[0-9]{3}\-[0-9]{4}` but `^([0-9]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$`

## `¯\_(ツ)_/¯`

The code discussed in class can be found inside [`/code`](https://github.com/jugonzal/lectures/tree/master/w06d4-websockets/code). The server-side code is in [`/code/server.js`](https://github.com/jugonzal/lectures/tree/master/w06d4-websockets/code/server.js) and the client-side is in [`/code/public/js/app.js`](https://github.com/jugonzal/lectures/tree/master/w06d4-websockets/code/public/js/app.js).
