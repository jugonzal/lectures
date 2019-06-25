const request = require('request');

function promisifiedGet(url) {
  return new Promise((resolve, reject) => {
    // throw "will not finish my promise"
    request.get(url, (err, response) => {
      if (err) {
        reject(err);
      }
      else {
        resolve(response.body);
      }
    });
  });
}

// In this next section we are "chaining" to API requests
// Notice that even though there is still nesting of the 
// handling of responses, the code is clearer than if I had used
// callbacks
const url = process.argv[2];
console.log(`URL: ${url}`);


let final = (async () => {
  let body = ""
  try {
    body = await promisifiedGet(url)
    console.log("1st inside doGet ",body)
    body = await promisifiedGet(process.argv[3])
    console.log("2nd inside doGet ",body)
    return body
  } catch (e) {
    console.log('bad bad bad ',e)
  }
})()

final.then(() => {
  console.log(final)
})


// async function twoGets() {
//     let body = await promisifiedGet(url)
//     console.log("1st inside doGet ",body)
//     body = await promisifiedGet(process.argv[3])
//     console.log("2nd inside doGet ",body)
//     return body
// }

// try {
//   twoGets()
// } catch (e) {
//     console.log('bad twoGets bad ',e)
//   }

// console.log(`HTML body is ${doGet(url).} `);

// .then(id => {
//     promisifiedGet('ht tp:/ /reqres.in/api/user/'+id)
//     .then((response) => {
//       console.log(`HTML body is ${(response.body.length / 1024).toFixed(2)} Kbytes long.`);
//       throw "Second promise ERROR"
//     })
//     .catch(err => {
//       console.log("Inside the .catch")
//       // throw "Second promise ERROR"
//     })
// })

