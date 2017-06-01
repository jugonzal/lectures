
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

module.exports = waysToDisplay;
