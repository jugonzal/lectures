api = require ("./googlemaps.js");

var myPostalCode
api("46%20Spadina,Toronto", function(pc) {
  myPostalCode = pc;
  console.log("This is IT: ",myPostalCode);
})
