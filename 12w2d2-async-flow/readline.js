const readline = require('readline');
const ask = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ask.question('C:\\> ',function(command) {
// 	console.log(` Volume in drive C has no label.
//  Volume Serial Number is LHL-TORONTO

//  Directory of C:\\

// 30/07/2019  11:00 AM    <DIR>          .
// 30/07/2019  11:00 AM    <DIR>          ..
// `)
// })


ask.question('You are at the front of LHL. What do you next?', function(command) {
  if (command == 'go inside') {
    ask.question('You see a room full of nerds, staring at computers. What do you do?', function(command) {
      if (command == 'find kitchen') {
        ask.question('You notice an unbroken coffee machine', function(command) {
          if (command == 'get coffee') {
            console.log('You win. You are fullty caffeinated')
          }
        })
      }
    })
  }
})



