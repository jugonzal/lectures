# Introduction to HTTP

## About HTTP
Hello all.   The objective today was to get you to understand the "behind the
scenes" of the web.   What happens when you type a given address in your browser?

We learned about the ancient ways in which kids would share files through random
servers before the web existed, all of which was possible in the 80s, but not
very friendly.  The most important breakthrough came with the introduction of 
HTTP, which allowed browsers to simplify the task of finding and retrieving 
resources from all over the web.


## HTTP

Here is the original specifications for HTTP:

https://tools.ietf.org/html/rfc2068

While the document is very arid and dense, we learned a few things from it:

- what are the acceptable URI, or resource identifiers.
- the fact that we can *change* the web by using other methods such as POST or DELETE
- the fact that a server can respond in one of many different ways, 200, 300, 400, 500
- the fact that a server is stateless
- the fact that a server can send a response in different formats: HTML, JSON


## HTTP Requests

### Request method
* `GET` - READ data from the server
* `POST` - SEND data and CREATE an object on the server
* `PUT/PATCH` - SEND data and UPDATE an object on the server
* `DELETE` - DELETE data on the server


### URI - Uniform Resource Indicator
* Also known as **URL - Uniform Recource Locator**
* Has several parts. In `http://www.example.com:8080/hello?name=fabio&lname=neves#greeting`
    - Protocol: `http://`
    - Host: `www.example.com`
    - Port: `:8080`
    - Path: `/hello`
    - Query parameters: `?fname=fabio&lname=neves`
    - Hash (or anchor): `#greeting`

### Headers
* Always in the form of `key: value` pairs
* Contain additional information about the client and the request, including:
    - User agent
    - Cookies

### Body
Data to be sent to the server (optional)


## HTTP Responses

### Response status
- Contains a response code and a message
- Response codes are divided in series
    + **100 series** = informational
    + **200 series** = ok
    + **300 series** = redirection
        * 301 moved permanently
        * 302 moved temporarily
    + **400 series** = client error
        * 401 unauthorized
        * 403 forbidden
        * 404 not found
    + **500 series** = server error
    + Full list: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes

### Response headers
- Informations about the data being returned
    + Content size
    + Media type
        * This follows conventions. See: https://en.wikipedia.org/wiki/Media_type
        * If you're curious, here's a complete list: https://www.iana.org/assignments/media-types/media-types.xhtml
    + ETags (used for caching)
    + ...several others

### Body
* Yep, that's the content
* Usually it's HTML, but can also be pure text, JSON data, images, videos, audio...


## Testing

* Chrome developer tools is your best friend!
* Making complex requests
    - `curl` - make requests from the terminal
        + Tutorial: http://curl.haxx.se/docs/httpscripting.html
        + Documentation in FAQ format: http://curl.haxx.se/docs/faq.html
    - DHC Chrome App: https://goo.gl/aa2jaU
    - Postman: http://getpostman.com
* Checking responses
    - http://requestb.in
    - http://httpbin.org



## Code discussed in class

To better understand these concepts we played with a new command that is able
to send ONE request and echo the response on screen:

```
curl google.com

curl https://maps.googleapis.com/maps/api/geocode/json?address=46%20Spadina,%20Toronto&sensor=false
```

The second URL is a great example of a full URL that defines a resource, located
somewhere in the realm of Google servers, using parameters to pass information
into my request.


Look inside the [`/code`](https://github.com/jugonzal/lhl-lectures/tree/master/w2d1-http-intro/code) folder.


Here we see a great example of when using callbacks makes perfect sense:  we are
getting a resource from the web but the actual call will take a few milliseconds
so we write a callback to deal with the aftermath of that request.

We also spent some time wondering how to work with this response, since it came
in JSON format.   Ultimately, the fact that we are in Javascript makes it very
easy to deal with JSON data.

Working with APIs will be all about learning about *resources* that are managed
by other servers, and which are exposed to us through the various HTTP methods 
(GET, POST, PUT, DELETE, etc), and then exchanging data back and forth.

## More stuff

GitHub repo for this lecture: https://github.com/jugonzal/lhl-lectures/tree/master/w2d1-http-intro

