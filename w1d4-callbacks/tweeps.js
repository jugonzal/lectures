strategies = require('./displayStrategies');

// HERE ARE MY TEST CASES

function displayData (callback) {
  var tweeps = ["@waxy", "@fzero", "@mozilla"]
  tweeps.push("@wired");

  if (callback)
    callback(tweeps);
  else 
    return tweeps;
}


strategies.console(displayData());

// strategies.nice(displayData());

displayData (strategies.nice);

strategies.numbered = function (array) {
    for (i=0; i<array.length; i++) {
      console.log(i+1+". "+array[i]);
    }
  }

for (let way in strategies) {
  displayData(strategies[way]);
}


