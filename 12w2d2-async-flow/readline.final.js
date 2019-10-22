const readline = require('readline');
const ask = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const nuclear = {
  prompt: 'You are in a nuclear facility, with one door north and one south.  Where would you go next?',
  south: () => console.log('Exiting the building'),
  north: () => visit(lobby)
}

const lobby = {
  prompt: 'You find yourself in a nice lobby, with only one door to the south.',
  north: () => visit(dashboard),
  south: () => visit(nuclear)
}

const dashboard = {
  prompt: 'Found the dashboard... with tons of buttons, one of which is labeled "START". To the south there is an exit door. What would you do next?',
  south: () => visit(nuclear),
  start: () => visit(nuclear), // you did ask to START, right?
  'push': () => console.log('pushed the wrong button')
}

const visit = function (room) {
  ask.question(room.prompt, 
    answer => {
      console.log('Go ',answer)
      if (room[answer]) {
        room[answer]();
      } else {
        console.log('I do not know how to do that')
        visit(room)
      }
    });
}

visit(nuclear)

