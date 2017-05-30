tweeps = ["@waxy", "@fzero", "@mozilla"]

function twice (array) {
  array.push(array[0]);
  return array;
}

function fourthrice (array) {
  array = twice(array)
  return twice(array);
}

var addTweeps = function (tweepsList, tweepToAdd, howMany) {
  if (howMany) {
    tweepsList.push(howMany(tweepToAdd))
  } else {
    tweepsList.push(tweepToAdd);
  }
  return tweepsList;
}

tweeps = addTweeps(tweeps, "@ThePracticalDev");
tweeps = addTweeps(tweeps, "@globalculture");
tweeps = addTweeps(tweeps, [123], fourthrice);

// console.log("fourice: ", fourthrice([1,2]));

// console.log("Twice: ",tweeps[6]([5]));

console.log("Tweeps: ",tweeps);
