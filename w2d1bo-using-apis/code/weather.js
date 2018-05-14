var request = require('request');

module.exports = function getForecast (woeid, callback) {
  var query = 'https://www.metaweather.com/api/location/'+woeid+'/';
  console.log("about to ask for: ", query);
  request.get(query, function(error, response, body) {

    if (!error) {
      // console.log(body)
      var data = JSON.parse(body);
      console.log('just got results inside:', data.consolidated_weather[0].weather_state_name + ' ' + data.consolidated_weather[0].the_temp);
      callback(data.consolidated_weather[0].weather_state_name, data.consolidated_weather[0].the_temp);
      // callback(data.consolidated_weather[0].weather_state_name, data.consolidated_weather[0].the_temp>20?'Summerish':'Winterish');
    }

  });
  return "Nothing yet";
}
// getForecast(4118, function(theWeather, theTemp) {
//   console.log("REAL forecast:",theWeather.toUpperCase());
//   console.log("REAL temp:",theTemp + 5);
// })