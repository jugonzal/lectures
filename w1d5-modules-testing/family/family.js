

// console.log(data.length)
// console.log(data[0].name," father is ",data[0].father)
// console.log(data[1].name," father is ",data[1].father)

var family = require('./familyModule')

console.log('Pieter Haverbeke grandfather is ', family.findGranPa('Pieter Haverbeke'));
