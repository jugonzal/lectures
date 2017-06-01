
var waysToDisplay = {
  console: function (array) {
    console.log("console.log ", array);  
  },
  nice: function (array) {
    console.log("nicer display");
    for (let i of array) {
      console.log("- ", i);
    }
  }
}

// HERE ARE MY TEST CASES

var tweeps = ["@waxy", "@fzero", "@mozilla"]

waysToDisplay.console(tweeps);

tweeps.push("@wired");

waysToDisplay.nice(tweeps);