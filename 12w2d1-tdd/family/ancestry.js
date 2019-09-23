// Look at some new data
// Imagine what we can do with such data
// Write specs
// Convert specs to test cases
// Implement the function to *pass* the test cases
// More data...  Modules
// Graduate to Mocha/Chai
// Improve our specs.  
// New round of code

const assert = require('chai').assert;

const ancestry = require('./fullData');
// const ancestry = [
//   {
//     "name": "Carolus Haverbeke", 
//     "sex": "m", 
//     "born": 1832, 
//     "died": 1905, 
//     "father": "Carel Haverbeke", 
//     "mother": "Maria van Brussel"},
//   {"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"},
//   {"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
//   {"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"},
//   {"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"},
//   {"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"}
// ];

const getAncestors = function(name) {

  let ancestors = [];

  let person = ancestry.filter(person => person.name === name)[0]

  if (person && person.mother) {
    ancestors.push(person.mother)
    ancestors = ancestors.concat(getAncestors(person.mother))
  }
  if (person && person.father) {
    ancestors.push(person.father)
    ancestors = ancestors.concat(getAncestors(person.father))
  }

  // console.log("Ancestors of ",name,ancestors)

  return ancestors;
  // return ['Emile Haverbeke','Carolus Haverbeke']
}

module.exports = {
  ancestors: getAncestors
}

// If I look at Phil's ancestry I should find Emile
// console.log(ancestors('Philibert Haverbeke')) 

// should return an array that includes Emile
// assert(getAncestors('Philibert Haverbeke').includes('Emile Haverbeke') === true, "Didn't find Emile")

// I should also find Carolus
// assert(getAncestors('Philibert Haverbeke').includes('Carolus Haverbeke') === true, "Didn't find Carolus from Phil")
// assert(getAncestors('Emile Haverbeke').includes('Carolus Haverbeke') === true, "Didn't find Carolus from Emile")

// and keep going to Carel
// assert(getAncestors('Philibert Haverbeke').includes('Carel Haverbeke') === true, "Didn't find Carel")

// I should find Maria to be in Phil's ancestry on the grand-mother's line
// It should NOT include Clara





// Should find that Clara has only father and mother
// console.log(ancestors('Clara Aernoudts'))

// Should figure out that Maria has no ancestry
// console.log(ancestors('Maria Sturm'))
// Should work with any data that looks like these people... obj(name, father, mother)
// It should work with a dataset that contains people in the same family





