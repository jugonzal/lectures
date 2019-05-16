
const data = {
  users: [
    { name: "Juan", course: 'web' },
    { name: "Dave", course: 'ios' }
  ],
  insert: function (user) {
    loadFromFisk()
    this.users.push (user)
    saveToDisk()
  },
  find: function (key, value) {
    return this.users.filter(usr => usr[key] === value)
  }
}

function loadFromDisk() {}
function saveToDisk() {}




data.insert({name: 'Joe', course: 'juggling'})
data.insert({name: 'Ana', course: 'web'})

console.log(data.find('course','web'))


console.log(data)

