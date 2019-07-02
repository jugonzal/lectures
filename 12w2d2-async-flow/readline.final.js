const readline = require('readline');
const ask = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// timers are useful in some contexts, but they are not
// the only reason we worry about asynchronous behaviour

console.log('Maze Adventure')

ask.question(`You are at the start block,
  with doors to the south and east,
  where would you want to go next?`, (answer) => {
    switch (answer) {
      case 'south':
        console.log('You are now at a dead end')
        break;
      case 'east':
        console.log('You are now in a long hall')
        break
      default:
        console.log('You can not go that way')

    }
  }
);

console.log('ktxbye')


