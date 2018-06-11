// curl https://www.metaweather.com/api/location/4118/

var request = require('request');

// Get request
request.get("https://www.metaweather.com/api/location/4118/", function(error, response, body) {
  // If we have an error, we need to deal with it.
  if (error) {
    console.log("Boom! Deal with it!");
    console.log(error);
    return;
  }

  // console.log("*******************************\nResponse\n",response);
  if (response.statusCode === 200) {
    // console.log(response);
    // Once we JSON.parse the response, we have a regular JS object
    //console.log("response-->", response);
    if (response.headers['content-type'] == 'application/json' ) {
      var data = JSON.parse(body);
      console.log("Temperature today is :", data.consolidated_weather[0].the_temp);
    } else {
      console.log("Dont know how to handle ", response.headers['content-type'])
    }
    // console.log("Just the Postal Code:", data.results[0].address_components);
    // console.log("Coordinates:",data.results[0].geometry.bounds.northeast.lat,data.results[0].geometry.bounds.northeast.lng);
  }

});



