// Look at some new data
// Imagine what we can do with such data
// Write specs as test cases
// Implement the function to *pass* the test cases
// More data...  Modules
// Graduate to Mocha/Chai
// Improve our specs.  
// New round of code

const assert = require('assert')



// const ancestry = [
//   {"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, 
//     "father": "Emile Haverbeke", 
//     "mother": "Emma de Milliano"},
//   {"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, 
//     "father": "Carel Haverbeke", 
//     "mother": "Maria van Brussel"},
//   {"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, 
//     "father": "Carolus Haverbeke", 
//     "mother": "Maria Sturm"},
//   {"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, 
//     "father": "Pieter Antone Haverbeke", 
//     "mother": "Livina Sierens"},
//   {"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, 
//     "father": "Henry Aernoudts", 
//     "mother": "Sidonie Coene"},
//   {"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, 
//     "father": "Daniel Haverbeke", 
//     "mother": "Joanna de Pape"}
// ];

const ancestry = require('./fullData')

function getAncestors (name) {
  // return ['Emile Haverbeke',"Carolus Haverbeke"]
  let ancestors = []
  // console.log("looking for ancestors of ",name)
  let thePerson = ancestry.filter(person => person.name === name)[0]

  if (thePerson) {
    ancestors.push(thePerson.father)
    ancestors.push(thePerson.mother)
    ancestors = ancestors.concat(getAncestors(thePerson.father))
    ancestors = ancestors.concat(getAncestors(thePerson.mother))
  }
  // console.log("found ",ancestors)
  return ancestors
}

module.exports = {
  ancestors: getAncestors
}

// console.log(getAncestors('Philibert Haverbeke')) 

// If I ask ancestors("Philibert") should include "Emile"
// If I ask ancestors("Philibert") should include "Carolus" and "Emma's father"
// If I ask ancestors("Philibert") should include "Livina Haverbeke"
// If I ask ancestors("Philibert") should NOT include "Clara"

assert(getAncestors('Philibert Haverbeke').includes('Emile Haverbeke') === true, "Didn't find Emile")
assert(getAncestors('Philibert Haverbeke').includes('Carolus Haverbeke') === true, "Didn't find Carolus from Phil")
assert(getAncestors('Emile Haverbeke').includes('Carolus Haverbeke') === true, "Didn't find Carolus from Emile")
assert(getAncestors('Emile Haverbeke').includes('Philibert Haverbeke') === false, "Did find Phil who is the son of Emile")
assert(getAncestors('Philibert Haverbeke').includes('Carel Haverbeke') === true, "Didn't find Carel")

// It should NOT include Clara
assert(getAncestors('Philibert Haverbeke').includes('Clara Aernoudts') === false, "Did find Clara")





// Should find that Clara has only father and mother
// console.log(ancestors('Clara Aernoudts'))

// Should figure out that Maria has no ancestry
// console.log(ancestors('Maria Sturm'))
// Should work with any data that looks like these people... obj(name, father, mother)
// It should work with a dataset that contains people in the same family





