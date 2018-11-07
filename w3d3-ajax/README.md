##Asynchronous Javascript via XMLHttpRequest

Hey all,

Today we revisited an important milestone in the history of web application: the post [Ajax: A New Approach to Web Applications](http://adaptivepath.org/ideas/ajax-new-approach-web-applications/) written by _Jesse James_.  

He proposed using a small gem from the native javascript toolkit called [`XMLHTTPRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest) to make web pages more interactive.  These days it is impossible to think of a good web application that doesn't use AJAX.

BTW, you can find the [full code for our lecture in my github](https://github.com/jugonzal/lhl-lectures/tree/master/w3d3-ajax).

XHR calls aren't very straightforward to make...

```javascript
function reqListener () {
  $articles = document.querySelector("#articles")
  console.log(this.responseText)
  $articles.innerHTML = this.responseText
}

const oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "article.html");
oReq.send();
```

...so to make our lives easier we will be using the jQuery library to make AJAX easier.

## jQuery AJAX

Here is how to do a [jQuery AJAX](http://api.jquery.com/jQuery.ajax/) call:

```javascript
$.ajax('http://localhost:5000/breweries')
.done((response) => {
  console.log(response)
})
.fail(() => {
  console.err('The call failed')
})
```

or the shorthand for handling JSON:

```javascript
$.getJSON('/articles.jso')
.then( data => { 
    console.log(data.length) 
    } )
.catch( error => console.log("BOOOO... ",error))
```

A bonus is that the response from the server is automatically turned into JS objects and you don't have to manually convert `response` via `JSON.parse()`.

When dealing with AJAX requests there exists a min of 3 outcomes:

* The call was successful (happy path)
* The call was successfully BUT the request failed (i.e. The server responded that you didn't something you weren't supposed to do.)
* The call failed (for example the internet went down)

Also you can use the `jQuery.get()`, `jQuery.getJSON()`, `jQuery.post()` calls, but they are just helper functions that call `jQuery.ajax` behind the scenes.

The jQuery documentation is usually very good, so you should learn to navigate the various ways to use [ajax from jQuery](http://api.jquery.com/jquery.ajax/)

During the lecture we had "the talk" about Promises.  This [Introduction to Promises](https://developers.google.com/web/fundamentals/primers/promises) from Google may be a good place to read about them, 
particularly in the context of using them with AJAX.

We also talk about the security implications of using AJAX. The correct way to 
look for information about this topic is [AJAX CORS](https://stackoverflow.com/questions/5750696/how-to-get-a-cross-origin-resource-sharing-cors-post-request-working)
or _cross origin resource sharing_.

Cheers.
