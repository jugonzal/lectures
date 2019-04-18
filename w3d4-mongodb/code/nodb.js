const data = {
  users: [
    { name: "Juan", course: 'web' },
    { name: "Dave", course: 'ios' }
  ],
  create: create
}

function writingToDisk() {
  console.log("writing to disk...")
}

function loadFromTheDisk() {
  console.log("loading...")
}

function create (newUser) {
  loadFromTheDisk()
  this.users.push(newUser)
  writingToDisk()
}

function search (field, value) {
  return data.users.filter(usr => usr[field] == value)
}


data.create({name: 'bob', course: 'juggling', city: 'Calgary'})
data.create({name: 'dylan', course: 'ios', city: 'Toronto'})

console.log(data)

console.log(search('course','ios'))
