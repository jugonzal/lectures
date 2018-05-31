//  Geeky the gecko
//  Sherman the dog
//  Larry the duck
//  Coco the dog
//  Theo the yorkie

class Pet {
  constructor (name, type) {
    this._name = name
    this._type = type
  }

  get name () {
    return this._name
  }

  get type () {
    return this._type
  }

  set age (someAge) {
    this._age = someAge
  }

  get age () {
    return this._age
  }
}

class Pets {
  constructor () {
    this._db = []
  }

  create (pet) {
    this._db.push(pet)
  }

  all () {
    return this._db
  }

  read (petName) {
    for (let i=0; i< this._db.length; i++) {
      if (this._db[i].name == petName) 
        return this._db[i]
    }
  }

  search (key, value) {
    for (let i=0; i< this._db.length; i++) {
      if (this._db[i][key] == value) 
        return this._db[i]
    }    
  }

}

pets = new Pets()
pet1 = new Pet('geeky','gecko')
pet1.age = 3
pets.create (pet1)
pets.create (new Pet('sherman','dog'))
pets.create (new Pet('larry','duck'))
another = new Pet('theo','yorkie')
another.age = 6
pets.create(another)

found = pets.search('name','theo')
console.log(found.name, found.type, found.age)
found = pets.search('age',3)
console.log(found.name, found.type, found.age)
