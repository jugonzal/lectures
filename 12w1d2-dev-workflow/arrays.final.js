// Understanding a problem
// Generalize / focus
// Experiment with REPL
// Write first version
// More advanced debugging techniques
// Refactor our code
// Use/Reuse functions
// Big test !

// at first we assumed the data would 
// be found as a comma-separated string

// var freq = '+1, -2, +3, +1';

// eventually we found out that was not the case
var allData = `-19
+2
+18
+14
-3
-16
+18
-16
-7
-11`

// during refactoring this function seemed
// a good idea, but notice how the function
// is doing something so simple it really
// is not that different from calling split.
function freqToArray (data, split) {

  return data.split(split);
  // How to test: console.log
  // console.log('initial array: ', array);
}

// refactoring this function to take an
// array instead of a string turned out to be 
// a good decision
function addFrequencies (array) {
  var addThemUp = 0;

  for (var i = 0; i < array.length; i++) {
    // console.log('iteration: ',i);
    // console.log('  parseFloat: ',parseFloat(array[i]));
    addThemUp += parseFloat(array[i]);
  }

  // Careful not to SHOW results instead of returning them
  // console.log('Final frequency: ', addThemUp);
  return addThemUp;
}

console.log('1st: ',addFrequencies(freqToArray('+1, -2, +3, +1',', ')));
// addFrequencies('+1, -2,+3, +1');
console.log('3rd: ',addFrequencies(freqToArray('-1, -2, -3',',')));
// var final = addFrequencies('+1, +1, -2') + 5;

console.log('final: ',addFrequencies(allData.split('\n')));

