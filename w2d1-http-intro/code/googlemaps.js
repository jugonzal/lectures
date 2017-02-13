//curl https://maps.googleapis.com/maps/api/geocode/json?address=46%20Spadina,%20Toronto&sensor=false

var request = require('request');

// Get request
request.get("https://maps.googleapis.com/maps/api/geocode/json?address=1%20Microsoft%20Way,%20Redmond%20City&sensor=false", function(error, response, body) {
// request.get("http://techmeme.com", function(error, response, body) {
  // If we have an error, we need to deal with it.
  if (error) {
    console.log("Boom! Deal with it!");
    console.log(error);
    return;
  }

  console.log("\n\nDone with GET request!");
  console.log(response.statusCode);
  if (response.statusCode === 200) {
    // console.log(body);
    // Once we JSON.parse the response, we have a regular JS object
    //console.log("response-->", response);
    var data = JSON.parse(body);
    // console.log("This is the Response body:", data);
    console.log("Just the Postal Code:", data.results[0].address_components[7].long_name);
    // console.log("Coordinates:",data.results[0].geometry.bounds.northeast.lat,data.results[0].geometry.bounds.northeast.lng);
  }

});





