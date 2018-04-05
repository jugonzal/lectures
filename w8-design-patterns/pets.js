//  Geeky the gecko
//  Sherman the dog
//  Penny the cat
//  Lincoln the dog
//  Coco the dog


module.exports = (function() {

  const db = {
    'geeky': {name: 'Geeky', type: 'gecko'},
    'sherman': {name: 'Sherman', type: 'dog'}
  }

  return {
    read: function RinCRUD (key) {
      return db[key]
    },
    create: function CinCRUD (petName, petType) {
      db[petName.toLowerCase()] = {name: petName, type: petType}
    },
    update: function UinCRUD (key, petName, petType) {
      db[key] = {name: petName, type: petType}
    }    
  }

})();

