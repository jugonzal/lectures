// Write a node program that takes in an unlimited number 
// of command line arguments, goes through each and 
// prints out the sum of them. 
// If any argument is not a whole number, skip it. 
// Do support negative numbers though.



// Read input parameters from command line (process.argv) 

var parameters = process.argv;

// count them ( .length ) -> numberOfArguments
// var numberOfArguments = parameters.length - 2;
// console.log("Count of Arguments: ", numberOfArguments);

// Assume Total equals zero
var total = 0;

// Given the full list of such parameters... (numberOfArguments)

for (let i in parameters) {
   // console.log("Inside parameters: ", i, parameters[i]); 
   // console.log(" - using isNaN: ", isNaN(parameters[i]));
   // console.log(" - divisible by 1: ", parameters[i]/!1);
   // console.log(" - using modulo (is it whole): ", parameters[i]%1 === 0);

  // if the current parameter is NOT a number
  if (!isNaN(parameters[i])) {

    if (parameters[i]%1 === 0) {
       // add them up -> Total
       total = total + parameters[i];
    }

  }

}

// Display the Total

console.log("Total: ", total);
