function alive(person) {
  return !person.died
}

function aliveIn(person,year) {
  return person.born < year && person.died > year;
}

function isFemale(person) {
  return person.sex === 'f'
}

function isHombre(person) {
  return person.sex === 'm'
}

module.exports = {
  alive: alive,
  aliveIn: aliveIn,
  isFemale: isFemale,
  isMale: isHombre
}