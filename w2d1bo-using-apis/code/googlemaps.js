//curl https://maps.googleapis.com/maps/api/geocode/json?address=46%20Spadina,%20Toronto&sensor=false

var request = require('request');

module.exports = function getPostalCode(address, giveBackPostalCode) {

  var postalcode = "";
  var query = "https://maps.googleapis.com/maps/api/geocode/json?address="+address+"&sensor=false";
  console.log(query);
  // Get request
  request.get(query, function(error, response, body) {
    // If we have an error, we need to deal with it.
    if (error) {
      // console.log("Boom! Deal with it!");
      // console.log(error);
      return error;
    }

    console.log("\n\nDone with GET request!");
    console.log(response.statusCode);
    if (response.statusCode === 200) {
      // Once we JSON.parse the response, we have a regular JS object
      //console.log("response-->", response);
      var data = JSON.parse(body);
      console.log("This is the Response body:", data);
      // console.log("Full Address:", data.results[0].formatted_address);
      // console.log("Coordinates:",data.results[0].geometry.bounds.northeast.lat,data.results[0].geometry.bounds.northeast.lng);
      postalcode = data.results[0].address_components[7].long_name;
      console.log("Found postalcode:", postalcode);
      giveBackPostalCode(postalcode);
    }

  });
 }

