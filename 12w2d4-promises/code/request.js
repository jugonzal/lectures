const request = require('request');

const get = function(url, callback) {
    request.get(url, function (error, response, body) {
      if (error) {
        callback("Error getting URL "+error, null)
      } else {
        callback(null, body)
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

// get(url, function(err, resp) {
//   if (!err) {
//     console.log('GOOD: ', resp)
//   } else {
//     console.log('BAD: ',err)
//   }
// })

get(url, function(err, resp) {
  if (!err) {
    console.log("First Response received: ", resp)
    get(url2, function(err, resp) {
      if (!err) {
        console.log("Second Response received: ", resp)
      } else {
        console.log("Plan C: ask again because ", err)
      }
    }) 
  } else {
    console.log("Plan B: ask again because ", err)
  }
}) 

console.log("ktxby")