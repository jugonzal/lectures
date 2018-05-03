//  Geeky the gecko
//  Sherman the dog
//  Penny the cat
//  Lincoln the dog
//  Coco the dog
//  Larry the duck




let db = (function(){
  let pets = ['Geeky the gecko', 'Sherman the dog']

  function create(newPet) {
    pets.push(newPet)
  }

  function find(subs) {
    pets.forEach(entry => {
      if (entry.includes(subs)) {
        console.log('found ', entry)
        // return entry;
      }
    })
  }

  function updatePetByName(name, newEntry) {
    for (i=0; i< pets.length; i++) {
      if (pets[i].includes(name)) {
        pets[i] = newEntry
      }
    }
  }

  create('Penny the cat')
  create('Larry the duck')

  return {
    add: create,
    search: find,
    update: updatePetByName
  }

})()

db.search('cat')
db.update('Larry','Tweetie the bird')
db.search('bird')
console.log(db)