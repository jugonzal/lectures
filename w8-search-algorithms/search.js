var assocArray = {
  _data: [],
  put: function (key, value) {
    this._data.push([key, value]);
  },
  get: function (key) {
    for (var i = 0; i < this._data.length; i++) {
      if (this._data[i][0] === key) {
        return this._data[i][1];
      }
    }
    return null;
  }
};

assocArray.put('moo', 'cow');
assocArray.put('meow', 'cat');
assocArray.put('bark', 'sea lion');

console.log(assocArray._data);

var barkAnimal = assocArray.get('bark');
console.log(`The ${barkAnimal} goes "bark".`);

// var exData = [
//   ['moo', 'cow'],
//   ['meow', 'cat'],
//   ['bark', 'sea lion']
// ];

var hashTable = {
  _data: new Array(16),
  hash: function (key) {
    var h = 0;
    for (var i = 0; i < key.length; i++) {
      h += key.charCodeAt(i);
    }
    return h % this._data.length;
  },
  put: function (key, value) {
    // TODO deal with hash collisions
    // TODO deal with running out of space
    this._data[this.hash(key)] = [key, value];
  },
  get: function (key) {
    return this._data[this.hash(key)][1];
  }
};

hashTable.put('moo', 'cow');
hashTable.put('meow', 'cat');
hashTable.put('bark', 'sea lion');

console.log(hashTable._data);

var meowAnimal = hashTable.get('meow');
console.log(`The ${meowAnimal} goes "meow".`);
