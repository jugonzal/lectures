var data = require('./fullData')
var ppl = require('./aboutPeople')

console.log("Emile in 1950 ", ppl.aliveIn(data[1],1950))
console.log("Emile in 2018 ", ppl.aliveIn(data[1],2018))
console.log("Emile today ",ppl.alive(data[1]))
console.log("Emile is ",ppl.isFemale(data[1]))

console.log(data.filter(function(person) {
  return ppl.aliveIn(person,1920)
}))

console.log(data.filter(ppl.alive))

console.log(data.filter(ppl.isMale))
