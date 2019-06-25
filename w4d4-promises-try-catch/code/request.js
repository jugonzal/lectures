const request = require('request');

function get(url, callback) {
    request.get(url, function (error, response, body) {
      if (error) {
        // throw("Error inside get()")
        callback(error, "")
      }
      else {
        callback("", body)
      }
    })
}

// Try with these URLs: 
//    https://reqres.in/api/users/2?delay=3
//    ht_tps://reqres.bin/api/users/2?delay=3  // malformed URL
//    https://reqres.bin/api/users/2?delay=3  // DNS error
const url = process.argv[2];
console.log(`URL: ${url}`);

try {
  get(url, function(error, resp) {
      if (error) {
        console.log("callback error: ", error)
      } else {
        console.log("Got my response back", resp)
      }
  }) 
} catch (e) {
  console.log("Nice catch ",e)
} 
console.log("I think I made it...")