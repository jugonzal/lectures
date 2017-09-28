const request = require('request');

function get(url, callback) {
    request.get(url, function (error, response, body) {
      if (error) {
        throw "Couldn't complete GET"
      }
      else {
        callback(body)
      }
    })
}

const url = process.argv[2];
console.log(`URL: ${url}`);

try {
  get(url, function(resp) {
    console.log("Got my response back", resp)
  }) 
} catch (e) {
  console.log("Nice catch ",e)
} 
