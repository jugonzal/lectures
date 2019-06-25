// collect a bunch of numbers
// add them up
// display final result

// in case I want to get data from command line
// let input = process.argv.slice(2);

let addThemUp = function(input) {
  let total = 0;

  for (let i = 0; i < input.length; i++) {
    // console.log("i: ",i, parseInt(input[i]));
    total = total + parseInt(input[i]);
    // console.log("total: ", total);
  }
  return total;
};

console.log("First case: ", addThemUp(['+1','-3','+2','+1']));
console.log("Second case: ", addThemUp(['+1', '+1', '+1']));
console.log("Third case: ", addThemUp(['-1', '-2', '-3']));

let freq = `-19
+2
+18
+14
-3
-16
+18
-16`

console.log("Final test: ", addThemUp(freq.split('\n')));

