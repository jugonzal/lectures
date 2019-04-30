// Understanding a problem 
// Generalize vs specialize
// Experiment with REPL
// Write first version
// More advanced debugging techniques
// Refactor our code
// Use/Reuse functions
// Big test !


var freq = `-19
+2
+18
+14
-3
-16
+18
-16`;

array = freq.split('\n');

var addThemUp = 0;
for (i=0; i< array.length; i++) {
	addThemUp += Number(array[i]);
	console.log("Working... ", i, addThemUp);
}

console.log("Answer: ", addThemUp);




