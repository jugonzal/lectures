var request = require('request');

request('https://www.metaweather.com/api/location/4118/', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  if (!error) {
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    if (response.headers['content-type'].includes('json')) {
      console.log('Content Type: ', response.headers['content-type'])

      // console.log('My lame attempt to find temp: ',body.substring(70,10))

      var weather = JSON.parse(body)
      // console.log('Full Body: ',weather)
      console.log('Current Temp: ', weather.consolidated_weather[0].the_temp)
    } else {
      console.log('Big web page... you dont want to read')
    }
  }
});

console.log('Once the request is sent...')
