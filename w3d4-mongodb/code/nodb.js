const data = {
  users: [
    { name: "Juan", age: 96 },
    { name: "Someone else", age: 25 }
  ]
}

function countUsers () {
  return data.users.length;
}

function addUsers (myName, myAge) {
  data.users.push({name: myName, age: myAge})
}


for (let i=0; i< data.users.length;i++) {
  if (data.users[i].age < 50) {
    console.log(data.users[i])
  }
}

console.log(data.users.filter(elem => elem.age < 50))

data.users.sort((a,b)=>b.age - a.age)

console.log("ALL: ", data.users);

