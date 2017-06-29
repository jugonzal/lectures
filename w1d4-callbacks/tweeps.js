'use strict';

var tweeps = ["@waxy", "@fzero", "@mozilla"]
tweeps.push("@wired");

function iterateArray (array, whateverWeDo) {
  for (var i=0; i< array.length; i++) {
    whateverWeDo(array[i]);
  }
}

var displayStrategies = {
  consoleDisplay: function() {
    console.log("Nothing");
  },
  verticalDisplay: function(item) {
    console.log("- ",item);      
  },
  orderedDisplay: function(item, num) {
    console.log((num+1) + ".) " + item);
  },
  numberedDisplay: function(item) {
    console.log("#"+item);
  }
}

iterateArray(tweeps,function(item) {
    console.log(item);
  });

iterateArray(tweeps,displayStrategies.consoleDisplay);

iterateArray(tweeps,displayStrategies.verticalDisplay);

iterateArray(tweeps,displayStrategies.orderedDisplay);

// displayStrategies.verticalDisplay(tweeps);

// displayStrategies.testVertical(tweeps);

