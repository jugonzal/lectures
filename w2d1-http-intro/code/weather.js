var request = require('request');

request('https://www.metaweather.com/api/location/4118/', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response.statusCode); // Print the response status code if a response was received
  //console.log('Response: ', response)
  //console.log('body:', body); // Print the HTML for the Google homepage.

  if (response.statusCode === 200) {
    var data = JSON.parse(body)
    console.log("All of it: ", data)

    console.log("Temperature: ",data.consolidated_weather[0].the_temp)
    console.log("Humidity: ",data.consolidated_weather[0].humidity)    
  } else {
    console.log("Not found")
  }
});
