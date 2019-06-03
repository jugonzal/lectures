var request = require('request');

function getTemperature(params, callback) {
  request.get(
    "https://www.metaweather.com/api/location/"+params.city+"/"+params.year+"/"+params.month+"/"+params.day+"/", 
    function(error, response, body) {
      if (!error && response.statusCode == 200) {

        // JSON.parse helps us convert something that 
        // "looks" like data into an actual data object
        var data = JSON.parse(body);
        // console.log("City: ",data.title)
        // console.log("Current Temperature: ",data.consolidated_weather[0].the_temp )
        callback( data[0].the_temp, data[0].applicable_date)
      } else { console.log(body) }
    }
  )  
}
  
for (dd = 3; dd < 8; dd++) {
  getTemperature({
    city: 4118, 
    year: 2019,
    month: 6,
    day: dd
    },function(temp, date) {
      console.log("Toronto on ",date , temp)
    })
}


// getTemperature(3534, function(data) {
//   console.log("Montreal " , data)
// })
