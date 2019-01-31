// an immediately resolved promise
// var p2 = Promise.resolve("foo");

// // can get it after the fact, unlike events
// p2.then((res) => console.log(res));

var p = new Promise(function(resolve, reject) {
  setTimeout(() => reject("Everything is BAD!"), 2000);
});

p.then((res) => {
  console.log("First then:", res);
  return "This will be sent to the next step";
})
.then((res) => {
  console.log("Second then:", res);
  return "And this to the next...";
})
.then((res) => {
  console.log("Third then:", res);
})
.catch((err) => {
  console.log("Oh oh, something didn't go well ",err)
})

console.log("This isn't inside a promise!");
