// Write a node program that takes in an unlimited number 
// of command line arguments, goes through each and 
// prints out the sum of them. 
// If any argument is not a whole number, skip it. 
// Do support negative numbers though.

function isWholeNumber (value) {
  // if the current parameter is NOT a number
  if (!isNaN(value) && value%1 === 0) {
      return true;
  }
  return false;
}

function sumWholeNumbersInArray (array) {
  var total = 0;
  for (let i in array) {
    // if the current parameter is NOT a number
    if (isWholeNumber(array[i])) {
       // add them up -> Total
       total += Number(array[i]);
    }
  }
  return total;
}

// Read input parameters from command line (process.argv) 

var parameters = process.argv;

// count them ( .length ) -> numberOfArguments
// var numberOfArguments = parameters.length - 2;
// console.log("Count of Arguments: ", numberOfArguments);

// Display the Total

console.log("Total: ", sumWholeNumbersInArray(parameters));

console.log("Total: ", sumWholeNumbersInArray([1, 2, 3, -5]));

