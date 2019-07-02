const readline = require('readline');
const ask = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const building = {
	'south': () => console.log('Exiting the building'),
	'north': () => console.log('Found the dashboard... with tons of buttons')
}

const room = function (question, layout) {
	ask.question(question, 
		answer => {
			console.log('Go ',answer)
			if (layout[answer]) {
				layout[answer]();
			}
		});
}

room('You are in a nuclear facility, with one door north and one south.  Where would you go next?', building)

// console.log('What was that? ', answer);