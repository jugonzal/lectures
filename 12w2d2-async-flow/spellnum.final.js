// learning about setTimeout
console.log('one')
setTimeout(() => {
  console.log('two')
}, 2000);
console.log('three');


// writing functions where time matters

// const spellNumber = function(number) {
//   if (number === 1) {
//     setTimeout(() => {
//       console.log('one')
//     }, 100);   
//   }
//   if (number === 2) {
//     setTimeout(() => {
//       console.log('two')
//     }, 200);   
//   }
//   if (number === 3) {
//     setTimeout(() => {
//       console.log('three')
//     }, 300);   
//   }
// }

// Note the sequence of calls and the order of numbers
// in our console.

// spellNumber(2)
// spellNumber(3)
// spellNumber(1)

// Using callbacks to get the flow right
// another opportunity to talk about high order

const spellNumber = function(number, callback) {
  if (number === 1) {
    setTimeout(() => {
      callback('one ')
    }, 100);   
  }
  if (number === 2) {
    setTimeout(() => {
      callback('two ')
    }, 200);   
  }
  if (number === 3) {
    setTimeout(() => {
      callback('three ')
    }, 300);   
  }
}

// before the final answer try without nesting the calls

let allNumbers = ""
spellNumber(3, (literal) => {
  allNumbers += literal
  spellNumber(2, (literal) => {
    allNumbers += literal
    spellNumber(1, (literal) => {
      allNumbers += literal
      console.log('allNumbers: ', allNumbers)
    })
  })
})




