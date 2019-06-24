// Understanding a problem 
// Generalize vs specialize
// Experiment with REPL
// Write first version
// More advanced debugging techniques
// Refactor our code
// Use/Reuse functions
// Big test !


let array = process.argv.slice(2);

var addThemUp = 0;
for (i=0; i< array.length; i++) {
	addThemUp += Number(array[i]);
	console.log("Working... ", i, addThemUp);
}

console.log("Answer: ", addThemUp);




