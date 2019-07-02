// setTimeout(() => {
//   console.log('four')
// }, 1000);

// console.log('one')

// setTimeout(() => {
//   console.log('five')
// }, 2000);

// console.log('two');

// console.log('three');


const spellit = function(number, callback) {
  let spell = "";
  setTimeout(() => {
    switch(number) {
      case 1:
        callback('one');
        break;
      case 2:
        callback('two');
        break;
      case 3:
        callback('three');
        break;
    }
  }, number * 100);

  // this doesn't work!
  // return spell
};

// console.log(spellit(2));
let phrase = "";
// spellit(2, label => phrase += label)
// spellit(1, label => phrase += label)
// spellit(3, label => phrase += label)
// console.log('My phrase: ', phrase);


phrase = "";
spellit(2, label => { 
  phrase += label;
  spellit(1, label => {
    phrase += label;
    spellit(3, label => { 
      phrase += label
      console.log('My phrase: ', phrase);
    });
  });
})

