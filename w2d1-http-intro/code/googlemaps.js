//curl https://maps.googleapis.com/maps/api/geocode/json?address=46%20Spadina,%20Toronto&sensor=false

var request = require('request');

// Get request
request.get("https://maps.googleapis.com/maps/api/geocode/json?address=2500%20Boul.Daniel-Johnson,%20Laval&sensor=false", function(error, response, body) {
  // If we have an error, we need to deal with it.
  if (error) {
    console.log("Boom! Deal with it!");
    console.log(error);
    return;
  }

  console.log("\n\nDone with GET request!");
  console.log(response.statusCode);
  if (response.statusCode === 200) {
    // Once we JSON.parse the response, we have a regular JS object
    //console.log("response-->", response);
    var data = JSON.parse(body);
    console.log("This is the Response body:", data);
    console.log("Full Address:", data.results[0].formatted_address);
    console.log("Coordinates:",data.results[0].geometry.bounds.northeast.lat,data.results[0].geometry.bounds.northeast.lng);
  }

});

   // "formatted_address" : "360 Rue Saint-Jacques, Montréal, QC H2Y 2N1, Canada",
   //       "geometry" : {
   //          "bounds" : {
   //             "northeast" : {
   //                "lat" : 45.5025735,
   //                "lng" : -73.5586952
   //             },
   //             "southwest" : {
   //                "lat" : 45.5019399,
   //                "lng" : -73.55957479999999
   //             }
   //          },
 





