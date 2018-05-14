// api = require ("./googlemaps.js");
api = require ("./weather.js")

// var myPostalCode
// api("46%20Spadina,Toronto", function(pc) {
//   myPostalCode = pc;
//   console.log("This is IT: ",myPostalCode);
// })


api(4118, function(w,t) {
  console.log(w,t);
})