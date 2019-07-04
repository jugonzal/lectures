
var p = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("Everything is GOOD!"), 2000);
});

p.then((res) => {
  console.log("First then:", res);
  return "This will be sent to the next step";
})
.catch((err) => {
  console.log("Oh oh, something didn't go well ",err)
})

console.log("This isn't inside a promise!");
