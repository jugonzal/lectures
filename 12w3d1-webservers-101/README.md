# Webservers 101

So far we've discussed how to connect to webservers using the HTTP protocol.   We learned to use `curl` and even write our very own mini-browser code in javascript.

Today we'll build our own webserver.   Welcome to the other side.

As a first step we'll be using the `HTTP` module to create a very simple webserver:

```
let http = require('http');

// define app constants
const PORT = 3000;

// create a server with a responder function
let server = http.createServer(function respondToRequests(request, response){
    console.log("Request: ", request.url)
    response.end("Hello from the other siiiiide...");
});

// start the server
server.listen(PORT, function onServerStart(){
    console.log("Server listening on: http://localhost:%s", PORT);
});
```

From this point we kept adding simple logic via `if {}` statements to respond differently to various `request.url` values.  This approach may not be very elegant but it worked.  Feel free to revisit the full [code we wrote](https://github.com/jugonzal/lectures/tree/master/12w3d1-webservers-101/basic/server.js) up to this point.

## Express.js

[Express.js](http://expressjs.com) is the most popular web server package for Node. It's simple, fast and barebones, including only what's necessary to handle http requests. We created a new version of our initial site in Express and realized that not much had changed. 

First, to make sure we can use Express:

`npm install express --save`

And then set up in your code:

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // This is where we deal with each request
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
```

We continued to enhance our server by adding new "routes" or URLs that the server should understand.  In each case we would simply add another snippet such as:

```javascript
app.get('/toronto', function(req, res) {
  res.render('toronto');
});
```

And as the code above suggests, we found very convenient to "use" a extension to Express that is capable of using EJS templates.  By doing so we can keep our javascript code in one place and our template files (mostly HTML) in a separate `views` folder, thanks to this one line:

```javascript
app.set('view engine', 'ejs');
```

You'll learn a lot more about how to use templates.  They are not just a place
to manage your static HTML, but can have logic within using the `<%  %>` tag.

All these extensions to Express are [middleware](http://expressjs.com/en/guide/using-middleware.html), which is a way of adding functionality to the server.  

Please look at the [code](https://github.com/jugonzal/lectures/tree/master/12w3d1-webservers-101/code/weather.js) we wrote in class to get a full Express server configured with some middleware to use EJS templates, server static files in a public directory and manage data from forms.

## Bonus: POST
We'll cover POST tomorrow, but in case you need it for any of the exercises today, here are a few notes about it:

Note that when submitting a form:

```html
<form action="/someURL" method="POST">
  <input name="name">
  <input type="submit">
</form>
```

you'll need to create a POST route on your server and use the `body-parser` library to get those values

```javascript
const bodyParser = require('body-parser');

// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/someURL', function(req, res) {
  console.log('Hello... ',req.body)
    // req.body will contain any fields submitted in the form
});
```

