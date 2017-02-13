var request = require('request');

function callMeBackWhenResponseArrives (error, response) {
  if (!error && response.statusCode == 200) {
    var data = JSON.parse(response.body);
    var postal = data.results[0].address_components[6].long_name;
    console.log("Response received! ", postal );
  }

var address = "1%20Hacker%20Way,Menlo%20Park";
request.get("https://maps.googleapis.com/maps/api/geocode/json?address="+address+"&sensor=false", callMeBackWhenResponseArrives);
console.log("Request done.  Nothing else to do.")

// Now we can try to convert the whole thing into a function,
// but we'll have to be aware that the results may not be 
// ready right away...   so we'll need a callback to use them
// *when* they are ready.

function getPostalCode(address, finalPostalCode) {
  request.get("https://maps.googleapis.com/maps/api/geocode/json?address="+address+"&sensor=false", function(error, response) {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(response.body);
      console.log("This is the Response body:", data);
      finalPostalCode(data.results[0].address_components[6].long_name);
    } else {
      console.log("Not 200!", response.statusCode);
      // console.log("Any errors?", error);
    }
  });
  console.log("Almost ready with your Postal Code... but not quite");
}

getPostalCode("1%20Hacker%20Way,Menlo%20Park", function(addr) {
  // think of this part of the code as been executed
  // only AFTER the response is back
  console.log("Got Postal Code: ",addr);
});




