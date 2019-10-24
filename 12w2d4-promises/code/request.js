const request = require('request');

const get = function(url, callback) {
    request.get(url, function (error, response, body) {
      if (!error) {
        callback(null, body);
      } else {
        callback(error, null)
      }
    })
}

// Try with these URLs: 
//    https://reqres.in/api/users/2?delay=3
//    ht_tps://reqres.bin/api/users/2?delay=3  // malformed URL
//    https://reqres.bin/api/users/2?delay=3  // DNS error
const url = process.argv[2];
const url2 = process.argv[3];
// console.log(`URL: ${url}`);

// try {
//   get(url, function(resp) {
//     console.log("Response received: ", resp)
//   }) 
// } catch(e) {
//   console.log('Error instead ',e)
// }

  get(url, function(error, resp) {
    if (!error) {
      console.log("Response received: ", resp)
      get(url2, function(error, resp) {
        if (!error) {
          console.log("2nd Response received: ", resp)
        } else {
          console.log('2nd Error instead ',error)
        }
      }) 
    } else {
      console.log('Error instead ',error)
    }
  }) 


console.log("ktxby")