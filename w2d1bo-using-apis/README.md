# Using Request to call APIs

Hi class!  This afternoon we continued to work on our understanding of how the web works and in particular *when* responses become available.   We are starting to realize that a big concern when writing web applications is making sure we *wait* for requests to be processed.  In particular, when calling APIs, we have to be mindful that they are running in a server "far away", so it may take a while for them to responde.

The *callback* is fundamental to make sure that whenever we get a response, there will be some code there to act on it.   Consider the following example:

```
var request = require('request');

function callMeBackWhenResponseArrives (error, response) {
  if (!error && response.statusCode == 200) {
    var data = JSON.parse(response.body);
    var postal = data.results[0].address_components[6].long_name;
    console.log("Response received! ", postal );
  }

var address = "1%20Hacker%20Way,Menlo%20Park";
request.get("https://maps.googleapis.com/maps/api/geocode/json?address="+address+"&sensor=false", callMeBackWhenResponseArrives);
console.log("Request done.  Nothing else to do."
```

Run it and notice the sequence of the `console.log`.

By the way, at some point you may want to read all about the Google Maps API.  One of the "secret weapons" of any web developer is to know what NOT to do because others have already done it better.   It is all about reading documentation.  Give it a try:

https://developers.google.com/maps/documentation/geocoding/start

I have committed the code we created this afternoon.  Please look at [initial/app.js](https://github.com/jugonzal/lhl-lectures/tree/master/w2d1bo-using-apis/initial)

