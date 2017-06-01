
var waysToDisplay = {
  console: function (array) {
    console.log("console.log ", array);  
  },
  nice: function (array) {
    console.log("nicer display");
    for (let i of array) {
      console.log("- ", i);
    }
  },
  oneline: function (array) {
    console.log("--> ",array," <--");
  }
}

// HERE ARE MY TEST CASES

function displayData () {
  var tweeps = ["@waxy", "@fzero", "@mozilla"]
  tweeps.push("@wired");

  return tweeps;
}


// waysToDisplay.console(tweeps);


waysToDisplay.nice(displayData());


// for (let way in waysToDisplay) {
//   waysToDisplay[way](tweeps);
// }


