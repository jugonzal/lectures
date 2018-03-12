//  Pets database
//  Geeky the gecko
//  Sherman the dog
//  Penny the cat
//  Lincoln the dog


var juanDB = {
  db: {},

  badSelect: function(search) {
    for (let name in this.db) {
      if (this.db[name] == search) {
        console.log ("Found ", search)
      } else {
        console.log ("Still looking for ", search)
      }
    }
  },
  insert: function (key, value) {
    if (this.db[key]) {
      this.db[key] += ","+value;
    } else {
      this.db[key] = value;
    }
    console.log(this.db);
  },
  select: function (key) {
    return this.db[key];
  }
};

juanDB.insert('gecko','Geeky');
juanDB.insert('dog','Sherman');
juanDB.insert('cat','Penny');
juanDB.insert('dog','Lincoln');

console.log(juanDB.select('gecko'));

juanDB.badSelect('Penny');