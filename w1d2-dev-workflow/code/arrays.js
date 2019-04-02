// Understanding a problem
// Generalize vs specialize
// Experiment with REPL
// Write first version
// More advanced debugging techniques
// Refactor our code
// Use/Reuse functions
// Big test !



// +1, +1, +1 results in  3

var freq = `-19
+2
+18
+14
-3
-16
+18
-16
-7
-11
-3
+11
+18
-16`;

var splitted = freq.split('\n');

// console.log('splitted: ', splitted)

function addArrayOfNumbers(array) {

  var addedUp = 0;

  for (i = 0; i < array.length; i++) {
    addedUp += parseFloat(array[i])
    // console.log('adding up: ', addedUp)
  }

  return addedUp
}

console.log('Result Freq: ', addArrayOfNumbers(splitted));
console.log('Result Freq: ', addArrayOfNumbers(freq.split('\n')));
console.log('Result Freq: ', addArrayOfNumbers(freq.split('+')));

