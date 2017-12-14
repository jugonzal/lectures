//  Geeky the gecko
//  Sherman the dog
//  Penny the cat
//  Lincoln the dog


var juanDB = (function() {
  let db = {
    insert: insert,
    display: display,
    change: change  
  }

  function insert (key, value) {
    if (db[key]) {
      db[key] += ","+value;
    } else {
      db[key] = value;
    }
    // console.log(db);
    return db;
  }

  function change (key) {
    db[key] += "!"
    return db;
  }

  function select (key) {
    return db[key];
  }

  function display() {
    for (let prop in db) {
      if (typeof db[prop] != 'function')
        console.log(prop," -> ",db[prop])
    }
    return db;
  }

  return {
    insert: insert,
    display: display,
    change: change  
  }
})();

// juanDB.add('gecko','Geeky');
// juanDB.add('dog','Sherman');
// juanDB.add('cat','Penny');
// juanDB.add('dog','Lincoln');

// console.log(juanDB)


juanDB
  .insert('gecko','Geeky')
  .insert('dog','Sherman')
  .change('dog')
  .display()
  .change('gecko').change('gecko')
  .insert('cat','Penny')
  .insert('dog','Lincoln')
  .display()