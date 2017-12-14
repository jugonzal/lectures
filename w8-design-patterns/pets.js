//  Geeky the gecko
//  Sherman the dog
//  Penny the cat
//  Lincoln the dog
//  Wyatt the retriever


const petsDB = (function() {
  let pets = [{
    name: 'Geeky',
    type: 'gecko'
  }]

  // CRUD  
  // add a new pet (name, type)
  function addPet (name, type) {
    pets.push({name: name, type: type})
  }

  // get a pet by name
  function getPet (name) {
    for (let i=0; i< pets.length; i++) {
      // console.log('Searching...', pets[i])
      if (pets[i].name == name) {
        // console.log('Bingo!', pets[i].name)
        return pets[i]
      }
    }
    // return null
  }

  return {
    add: addPet,
    gett: getPet
  }
})();



// change the type of a pet
// remove a given pet by name

// TEST

petsDB.add ('Sherman','dog')
petsDB.add ('Penny','cat')

console.log(petsDB.gett('Sherman'))
