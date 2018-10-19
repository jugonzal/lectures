const request = require('request');

function promisifiedGet(url) {
  return new Promise((resolve, reject) => {
    // throw "will not finish my promise"
    request.get(url, (err, response) => {
      if (err) {
        reject(err);
      }
      else {
        resolve(response.body); // make good on that promise... return
      }
    });
  });

  return future;
}

// In this next section we are "chaining" to API requests
// Notice that even though there is still nesting of the 
// handling of responses, the code is clearer than if I had used
// callbacks
const url = process.argv[2];
console.log(`URL: ${url}`);

promisifiedGet(url)
.then((response) => {
  console.log(`HTML body is ${(response.body.length / 1024).toFixed(2)} Kbytes long.`);
  return 1
})
.then(id => {
    promisifiedGet('ht tp:/ /reqres.in/api/user/'+id)
    .then((response) => {
      console.log(`HTML body is ${(response.body.length / 1024).toFixed(2)} Kbytes long.`);
      throw "Second promise ERROR"
    })
    .catch(err => {
      console.log("Inside the .catch")
      // throw "Second promise ERROR"
    })
})
.catch((err) => {
  console.log(`Something went wrong: ${err}`);
  // throw "Last .catch error"
})

// This next section is to show handling multiple promises
// at the same time.  Useful to dispatch many tasks at once
// and wait for all of them to be finished.
Promise.all([
  promisifiedGet('http://reqres.in/api/users?delay=1'),
  promisifiedGet('http://reqres.in/api/user/1')
  ])
.then((results, second) => {
  console.log(results)
})

