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
    return "the "+this._type
  }

  morph (newType) {
    this._type = newType
  }
}

class Pets {
  constructor () {
    this._db = []
  }

  add (pet) {
    this._db.push(pet)
  }

  create (name, type) {
    let newPet = new Pet(name, type)
    this.add(newPet)
  }

  qCreate (name, type) {
    this.add({_name: name, _type: type })
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
      if (this._db[i][key] === value) 
        return this._db[i]
    }    
  }

}

myGeeky = new Pet('Geeky','gecko')
myGeeky.morph('leopard gecko')
other = new Pet('Sherman','dog')
lhlPets = new Pets();
lhlPets.add(myGeeky)
lhlPets.add(other)
lhlPets.add(new Pet('Larry','duck'))
lhlPets.create('Coco','dog')
console.log(myGeeky.name, myGeeky.type)
console.log(lhlPets.search('_name','Geeky'))
console.log(lhlPets.search('_type','duck'))

