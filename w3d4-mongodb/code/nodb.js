const data = {
  users: [
    { name: "Juan", age: 116 },
    { name: "Someone else", age: 25 }
  ]
}

const org = {
   145: { name: "Juan", age: 116 },
   88:  { name: "Someone else", age: 25 }
   }

console.log("ALL: ", data.users);
data.users.push({name: "You", age: 18});
org[67] = { name: "You again", age: 18};

console.log(data.users.filter(one => one.name === "Juan"));
console.log(org[145]);


console.log("ALL: ", data.users);
