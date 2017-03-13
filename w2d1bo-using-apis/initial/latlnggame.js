// Test URL.
// curl https://maps.googleapis.com/maps/api/geocode/json?latlng=41.514224,-74.961452

var request = require('request');


var baseURL = "https://maps.googleapis.com/maps/api/geocode/json?latlng=";


function guessTheAddress(lat, lng, onceResponseIsIn) {

  // Get request
  // console.log("whole thing: ",baseURL+lat+","+lng);
  request.get(baseURL+lat+","+lng, function(error, response) {

    // If there is no error and the response comes back as 200 then....
    if (!error && response.statusCode === 200) {
      // console.log("My Response:", response.body);

      var data = JSON.parse(response.body);
      // console.log("Do I have data? ", data.results.length);
      if (data.results.length > 0) {
        onceResponseIsIn( data.results[0].formatted_address);
      } 
    }
  });
}

guessTheAddress(41.514224,-72.261452,function(address){
  console.log(address);
});


// console.log("Final Results: ", guessTheAddress(41.514224,-72.261452));

// guessTheAddress(40.514224,-72.261452);
// guessTheAddress(39.514224,-72.261452);
// guessTheAddress(38.514224,-72.261452);
// guessTheAddress(37.514224,-72.261452);







