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

ask.question('Account #', (account) => {
  ask.question('Last name of account holder for Account #'+account, (name) => {
    console.log('Welcome M ', name)
  })
})



