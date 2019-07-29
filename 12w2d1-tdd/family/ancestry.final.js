// Look at some new data
// Write a really useful function
// Refactor.  High-order
// Learn about tests
// Bundle them into modules

const ancestry = [
  {
    "name": "Carolus Haverbeke", 
    "sex": "m", 
    "born": 1832, 
    "died": 1905, 
    "father": "Carel Haverbeke", 
    "mother": "Maria van Brussel"},
  {"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"},
  {"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
  {"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"},
  {"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"},
  {"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"}
];


const ancestors = function(someone) {
  if (typeof(someone) === 'string') {
    someone = (ancestry.filter(p => p.name === someone))[0]
    // console.log("Inspecting... ", someone)
  }
  let found = [];
  for (person of ancestry) {
    if (person.name === someone.father) {
      found.push(person.name)
      found = found.concat(ancestors(person))
    } else if (person.name === someone.mother) {
      found.push(person.name)
      found = found.concat(ancestors(person))
    }
  }
  return found;
}

// module.exports = {
//   ancestors: ancestors
// }


