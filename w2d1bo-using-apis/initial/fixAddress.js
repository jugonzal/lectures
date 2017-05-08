var request = require('request');

// var poorAddress = "55%20Dundas%20West,Toronto";

function fixAddress(poorAddress, callback) {
  request('https://maps.googleapis.com/maps/api/geocode/json?address='+poorAddress, function (error, response, body) {
    // console.log('error:', error); // Print the error if one occurred
    
    if (response.statusCode === 200) {
      var data = JSON.parse(body);

      // console.log('actual address:', data.results[0].formatted_address);
      // return data.results[0].formatted_address;   
      callback( data.results[0].formatted_address  );
    } else {
      return "No proper address found";
      // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    }
    // console.log('body:', body); // Print the HTML for the Google homepage.
  });

}

fixAddress(
  "46%20Spadina,Toronto",
  function(fixedAddress) { 
    console.log("Fixed: ",fixedAddress);
  });

fixAddress(
  "411%20Richmond%20St,Toronto",
  function(fixedAddress) { 
    console.log("Fixed: ",fixedAddress);
  });
