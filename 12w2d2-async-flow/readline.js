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
// `, command)
// })

// console.log('You are in a massive abandoned school and a long corridor north of you.')
// ask.question('Where should you go next?', function(answer) {
//   if (answer == 'north') {
//     console.log('You found a cookie on the floor. Enjoy')
//     ask.question('Cookie was delicious but the cookie monster is jealous... He is running towards you', function(answer) {
//       if (answer == 'run') {
//         console.log('You escaped')
//       } else {
//         console.log('You died. An awful dead. Cookie moster got its cookie.')
//       }
//     })
//   } else {
//     console.log('There is nothing there')
//   }
// })

const building = {
  prompt: 'You are in a nuclear facility, with doors to north and south.',
  north: () => visit(dashboard),
  south: () => visit(garden)
}

const dashboard = {
  prompt: 'You are in a nuclear facility, with doors to north and south.',
  north: () => visit(dashboard),
  south: () => visit(garden)
}

const visit = function (scene) {
  ask.question(scene.prompt, function(answer) {
    if (scene[answer]) {
      scene[answer]()
    }
  })
}


