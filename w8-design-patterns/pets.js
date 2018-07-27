//  Geeky the gecko
//  Sherman the dog
//  Larry the duck

const farm = {

}

class Animal {
  constructor (params) {
    this._name = params.name
    this._species = params.species
  }

  get name () {
    return this._name
  }

  get species () {
    return this._species
  }
}

function addPet (params) {
  farm[params.species] = new Animal(params)
}

// farm['geeky'] = addPet({name: 'Geeky', species: 'gecko'})
// farm['sherman'] = addPet({name: 'Sherman', species: 'dog'})
addPet({name: 'Geeky', type: 'gecko'})
addPet({name: 'Sherman', species: 'dog'})
console.log(farm)