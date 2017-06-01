
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

function displayData (callback) {
  var tweeps = ["@waxy", "@fzero", "@mozilla"]
  tweeps.push("@wired");

  if (callback)
    callback(tweeps);
  else 
    return tweeps;
}


waysToDisplay.console(displayData());

// waysToDisplay.nice(displayData());

displayData (waysToDisplay.nice);

displayData (function (array) {
  for (i=0; i<array.length; i++) {
    console.log(i+1+". "+array[i]);
  }
});


// for (let way in waysToDisplay) {
//   waysToDisplay[way](tweeps);
// }


