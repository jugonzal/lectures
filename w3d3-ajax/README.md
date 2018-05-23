##Asynchronous Javascript via XMLHttpRequest

Hey all,

Today we revisited an important milestone in the history of web application: the post [Ajax: A New Approach to Web Applications](http://adaptivepath.org/ideas/ajax-new-approach-web-applications/) written by _Jesse James_.  

He proposed using a small gem from the native javascript toolkit called [`XMLHTTPRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest) to make web pages more interactive.  These days it is impossible to think of a good web application that doesn't use AJAX.

XHR calls aren't very straightforward to make...
```js
function reqListener () {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://www.example.org/example.txt");
oReq.send();
```

...so to make our lives easier we will be using the jQuery library to make AJAX easier.

## jQuery AJAX

Here is how to do a [jQuery AJAX](http://api.jquery.com/jQuery.ajax/) call:
```js
$.ajax('http://localhost:5000/breweries')
.done((response) => {
  console.log(response)
})
.fail(() => {
  console.err('The call failed')
})
```

A bonus is that the response from the server is automatically turned into JS objects and you don't have to manually convert `response` via `JSON.parse()`.

When dealing with AJAX requests there exists a min of 3 outcomes:

* The call was successful (happy path)
* The call was successfully BUT the request failed (i.e. The server responded that you didn't something you weren't supposed to do.)
* The call failed (for example the internet went down)

Also you can use the `jQuery.get()`, `jQuery.getJSON()`, `jQuery.post()` calls, but they are just helper functions that call `jQuery.ajax` behind the scenes.

The jQuery documentation is usually very good, so you should learn to navigate the various ways to use [ajax from jQuery](http://api.jquery.com/jquery.ajax/)

Cheers.
