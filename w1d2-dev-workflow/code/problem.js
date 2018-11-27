// This program will not do anything
// but it will be very helpful in telling
// others what it should do

// if you run
//   node program.js help
//   then -->  program should show you a quick help
// if you run like
//   node program.js 1 2 3
//   it will add them up and show 6.

// program starts

//   define variables
// var input = "";

//   read input (command line arguments)
var args = process.argv;
// console.log("Tell me what is going on", args);

var justTheSecondOne = args[2];

// console.log("HOw about just position two", justTheSecondOne);

//   is it "help" ??
//   TODO we should check HELP Help and other variations
if (justTheSecondOne === "help") {
  // print the helpful help
  console.log("the program takes several NUMBERS as parameters and will ADD them up, so if you run like > node program.js 1 2 3 it will add them up and show 6.");
} else {
  //   is it numbers ??
  var input = args.slice(2);
  // console.log("Now just the inputs", input);
  // THERE WILL BE A total
  // total is Zero
  var total = 0;
  // go one by one
  for (var i=0; i < input.length; i++) {
    // make sure it is a number
    if (isNaN(input[i]) === false ) {
      // make each string a number
      // add that number to the total
      total += Number(input[i]);    
      // console.log("Added ",input[i]," for total ",total);
    }
  }
  // print just the sum --> total  
  console.log("Just the sum: ", total);

}



