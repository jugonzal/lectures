var imHere = true;

var tweeps = ['@wired','@techmeme','@mozilla'];

function getFirst (someArray) {
  // console.log(someArray[0]);
  return someArray[0];
}

var getFourth = function (someArray) {
  return someArray[3];
}

// why is this line causing a problem?
// tweeps.push(getFourth(['one','two','three','four']));

tweeps.push(getFourth);

// console.log('My tweeps so far ', tweeps);

console.log('The first Tweep is ',getFirst(tweeps));
console.log('The 4th Tweep is ',tweeps[3](tweeps));
console.log('My tweeps after ', tweeps);
