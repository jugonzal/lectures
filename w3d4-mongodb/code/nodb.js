const data = {
  users: [
    { name: "Juan", course: 'web' },
    { name: "Dave", course: 'ios' }
  ],
  create: create
}

let canIWrite = true

function saveToFile() {
  if (canIWrite) 
    canIWrite = false
  console.log("saving... ")
  canIWrite = true
}

function loadFromFile() {
  console.log("loading...")
}

function create (newUser) {
  loadFromFile()
  this.users.push(newUser)
  saveToFile()
}

function search (field, value) {
  loadFromFile()
  return data.users.filter(usr => usr[field] == value)
}

data.create({name: 'bob', course: 'juggling', city: 'Calgary'})
data.create({name: 'dylan', course: 'ios', city: 'Toronto'})

console.log(data)

console.log(search('course','ios'))
