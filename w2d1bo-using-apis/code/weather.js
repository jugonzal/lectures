var request = require('request');

function getWeather(city, callback) {
  request.get(
    "https://www.metaweather.com/api/location/"+city+"/", 
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        // console.log('got the weather:', body)

        // JSON.parse helps us convert something that 
        // "looks" like data into an actual data object
        var data = JSON.parse(body);

        // console.log(data.consolidated_weather[0].weather_state_name )
        callback(data.consolidated_weather[0].weather_state_name )
        // + " " + 
        //   data.consolidated_weather[0].the_temp
      }
    }
  )  
}
  
// We tried this approach but got _undefined_
// console.log("Toronto: " , getWeather(4118))
// console.log("Montreal: ", getWeather(3534))

getWeather(4118, function(data) {
  console.log("Toronto: ",data)
})

getWeather(3534, function(data) {
  console.log("Montreal: ",data)
})
