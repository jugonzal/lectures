// console.log('one')
// setTimeout(() => {
//   console.log('two')
// }, 2000);
// console.log('three');

// const spellZero = function() {

//   setTimeout(() => console.log('zero'), 100)
//   // return 'starting'
// }

// console.log(spellZero())

const spellit = function(number, callback) {

  const whatToDo = function() { 
    switch(number) {
      case 1:
        callback ('one');
        break;
      case 2:
        callback ('two');
        break;
      case 3:
        callback ('three');
        break;
    }
  }

  setTimeout(whatToDo, number*1000)

};

let numbers = "";
spellit(3, (literal) => {
  numbers += literal
  spellit(1, (literal) => {
    numbers = literal
    spellit(2, (literal) => {
      numbers += literal
      console.log(numbers)
    });
  });
});

