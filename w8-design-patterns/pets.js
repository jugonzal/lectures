//  Geeky the gecko
//  Sherman the dog
//  Penny the cat
//  Lincoln the dog
//  Wyatt the retriever

const dbEngine = (function () {
  // private stuff
  const pets = [
    {name: 'Geeky', type: 'gecko'},
    {name: 'Sherman', type: 'dog'},
    {name: 'Penny', type: 'cat'}
  ]

  function getPetByType (lookingForType) {
    return pets.filter (pet => {
      if (pet.type == lookingForType) {
        return true
      }
    })
  }

  function addPet (pet) {
    pets.push(pet)
  }

  addPet({name: 'Mimi', type: 'cat'})

  // public stuff
  return {
    getPet: getPetByType,
    addPet: addPet
  }
})();

// console.log("DB: ",dbEngine.)
console.log("the cats:",dbEngine.getPet('cat'))