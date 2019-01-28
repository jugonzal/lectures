//  Geeky the gecko
//  Sherman the dog
//  Larry the duck

var Module = (function () {

  const pets = {
    'geeky': 'gecko',
    'sherman': 'dog',
    'larry': 'duck'
  }

  function all() {
    return Object.keys(pets)
  }

  function get(name) {
    return pets[name]
  }

  function add(name, type) {
    pets[name] = type
  }

  return {
    get: get,
    add: add,
    all: all
  }

})();


Module.add('coco',{type: 'cat', age: 3})
console.log(Module.all())
console.log('geeky: ',Module.get('geeky'))

// console.log(pets)