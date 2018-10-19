const request = require('request');

function promisifiedGet(url) {
  let future = new Promise((resolve, reject) => {
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

  return future;
}

// In this next section we are "chaining" to API requests
// Notice that even though there is still nesting of the 
// handling of responses, the code is clearer than if I had used
// callbacks
const url = process.argv[2];
console.log(`URL: ${url}`);

async function doGet (url) {
  try {
    let body = await promisifiedGet(url)
    console.log("inside ",body.split('>')[0])
    return body
  } catch (e) {
    console.log('bad bad bad ',e)
  }
}

let body = "not yet..."
body = doGet(url)
.then(() => console.log("at the end... ", body))


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

