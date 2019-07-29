// Look at some new data
// Imagine what we can do with such data
// Write specs
// Convert specs to test cases
// Implement the function to *pass* the test cases
// More data...  Modules
// Graduate to Mocha/Chai
// Improve our specs.  
// New round of code

const ancestry = require('./fullData');

const ancestors = function(someone) {
  // console.log('going into ', someone)
  someone = (ancestry.filter(p => p.name === someone))[0]
  let found = [];
  if (someone) {
    if (someone.father) {
      found.push(someone.father);
      found = found.concat(ancestors(someone.father));
    }
    if (someone.mother) {
      found.push(someone.mother);
      found = found.concat(ancestors(someone.mother));
    }
  }
  return found;
}

const wasAlive = function(someone, year) {
  someone = (ancestry.filter(p => p.name === someone))[0]
  if (someone) {
    return (someone.born < year && someone.died > year) 
  }
  return false;
}

const witnessed = function(someone, year) {
  // console.log('going into ', someone)
  someone = (ancestry.filter(p => p.name === someone))[0]
  let found = [];
  if (someone) {
    if (someone.father) {
      if (wasAlive(someone.father, year)) {
        found.push(someone.father);
      }
      found = found.concat(witnessed(someone.father, year));
    }
    if (someone.mother) {
      if (wasAlive(someone.mother, year)) {
        found.push(someone.mother);
      }
      found = found.concat(witnessed(someone.mother, year));
    }
  }
  return found;
}

module.exports = {
  ancestors: ancestors,
  witnessed: witnessed
}


// If I look at Phil's ancestry I should find Emile

// console.log(ancestors('Philibert Haverbeke')) // should return an array that includes Emile

// I should also find Carolus
// and keep going to Carel
// I should find Maria to be in Phil's ancestry on the grand-mother's line
// Should find that Clara has only father and mother
// console.log(ancestors('Clara Aernoudts'))

// Should figure out that Maria has no ancestry
// console.log(ancestors('Maria Sturm'))
// Should work with any data that looks like these people... obj(name, father, mother)
// It should work with a dataset that contains people in the same family





