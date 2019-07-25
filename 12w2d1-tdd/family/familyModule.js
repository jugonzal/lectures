var data = require('./fullData') 

function findFather (name) {
  for (var i=0; i< data.length; i++) {
    if (name === data[i].name) {
      return data[i].father
    }
  }
  return 'That is not a person'
}

function findGrandfather(name) {
  return findFather(findFather(name))
}

module.exports = {
  findPa: findFather,
  findGranPa: findGrandfather
}