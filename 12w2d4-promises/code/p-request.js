const request = require('request');

function promisifiedGet(url) {
  return new Promise((resolve, reject) => {
    request.get(url, (err, response) => {
      if (err) {
        reject(err);
      }
      else {
        resolve(response.body); // make good on that promise... return
      }
    });
  });
}

// In this next section we are "chaining" to API requests
// Notice that even though there is still nesting of the 
// handling of responses, the code is clearer than if I had used
// callbacks
const url = process.argv[2];
// const url2 = process.argv[3];
// console.log(`URL: ${url}`);

// when the following two promises are created, 
// realize that the actual request will be sent
// for both...  but we defer the processing of the
// outcome to later.
let p1 = promisifiedGet(url)
// let p2 = promisifiedGet(url2)


p1
  .then((data) => {
    console.log(`First Data is ${data}.`);
  })
  .catch((err) => {
    console.log(`Something went wrong: ${err}`);
    // throw "Last .catch error"
  })


// p1.then((data) => {
//   console.log(`First Data is ${data}.`);
//   // Throwing an error will trigger the .catch block
//   // just like try/catch... Nice!
//   //
//   throw "First promise ERROR"
//   return 1
// })
// .then(oldata => {
//     p2.then((data) => {
//       console.log(`Second Data is ${data}.`);
//       // throw "Second promise ERROR"
//     })
//     .catch(err => {
//       console.log("Double wrong inside the .catch")
//       // throw "Second promise ERROR"
//     })
// })
// .catch((err) => {
//   console.log(`Something went wrong: ${err}`);
//   // throw "Last .catch error"
// })

// This next section is to show handling multiple promises
// at the same time.  Useful to dispatch many tasks at once
// and wait for all of them to be finished.

// Promise.all([
//   promisifiedGet('http://reqres.in/api/users/2?delay=1'),
//   promisifiedGet('http://reqres.in/api/user/1?delay=3')
//   ])
// .then([first, second] => {
//   console.log(results)
// })
// .catch((err) => {
//   console.log(`Something went wrong: ${err}`);
//   // throw "Last .catch error"
// })

