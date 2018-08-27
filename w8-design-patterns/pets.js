//  Geeky the gecko
//  Sherman the dog
//  Larry the duck

class Pet {
  constructor (data) {
    this._name = data.name
    this.species = data.species
  }

  get name () {
    return this._name
  }

  display () {
    console.log(this)
  }
}

class Collection {
  constructor () {
    this.db = []
  }

  factoryMethod (data) {
    return null;
  }

  add (data) {
    let item = this.factoryMethod(data)
    this.db.push(item)
  }

  find (condition) {
    return this.db.find(condition)
  }

  display () {
    console.log(this)
  }  

}

class Pets extends Collection {
  factoryMethod (data) {
    return new Pet(data)
  }
}

geeky = new Pet ('Geeky','Gecko');
sherman = new Pet ('Sherman','Dog')
collection = new Pets()
collection.add({name: 'geeky', species: 'gecko'})
collection.add({name: 'sherman', species: 'dog'})
collection.display()
// console.log(collection.find('Sherman'))