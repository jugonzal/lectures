var request = require('request');

module.exports = function getWeather(woeid, callback, when) {
  var query = 'https://www.metaweather.com/api/location/'+woeid+'/';

  // console.log("REQUEST: ", query);
  if (when == undefined) {
    when = 0;
  }
  request.get(query, 
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        // console.log(body)
        var data = JSON.parse(body);
        // console.log('just got results inside:', data.consolidated_weather[0].weather_state_name + ' ' + data.consolidated_weather[0].the_temp);
        callback(data.consolidated_weather[when]);
      }
      console.log ("DONE with everything");
    }
  );  
  // callback("DONE with function");
}

// console.log(getWeather("4118"));

// getWeather("4118", function (output) {
//   console.log(output)
//   if (output.the_temp > 20) {
//     console.log("You should be out there")
//   }
// });










// getForecast(4118, function(theWeather, theTemp) {
//   console.log("REAL forecast:",theWeather.toUpperCase());
//   console.log("REAL temp:",theTemp + 5);
// })