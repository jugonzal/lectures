const request = require('request');

const get = function(url, callback) {
    request.get(url, function (error, response, body) {
      if (error) {
        callback(error)
        // throw "Error getting URL "+error
      } else {
        callback(null,body)
      }
    })
}

// Try with these URLs: 
//    https://reqres.in/api/users/2?delay=3
//    ht_tps://reqres.bin/api/users/2?delay=3  // malformed URL
//    https://reqres.bin/api/users/2?delay=3  // DNS error
const url = process.argv[2];
const url2 = process.argv[3];
console.log(`URL: ${url}`);

get(url, function(error, resp) {
  if (error) {
    console.log("Phew, that was a close call... ",error)
  } else {
    console.log("Response received: ", resp)
    get(url2, function(error, resp) {
      if (error) {
        console.log("Phew, that was a close call... ",error)
      } else {
        console.log("Response received: ", resp)
        
      }
    })     
  }
}) 

console.log("ktxby")