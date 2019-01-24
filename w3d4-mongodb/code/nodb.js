const data = {
  students: [
    { name: 'Ben', likes: 'basketball', city: '6ix' },
    { name: 'Steve', likes: 'home', city: 'Montreal'},
    { name: 'Diego', likes: 'pokemon', city: 'lostboy'}
  ]
}

// console.log(data.students[1].likes)

// console.log(data.students.filter(student => student.name === 'Ben')[0].likes)

function create (student) {
  data.students.push(student)
  saveAll()
}

function remove (which) {
  delete data.students[which]
  saveAll()
}

// function read (which) {
//   console.log(data.students[which])
// }

function update (name, key, value) {
  loadAll()
  find(name)[key] = value
  saveAll()
}

function find (name) {
  return data.students.filter(student => student.name === name)[0]
}

function loadAll () {
  // check no LOCKS
  // retrieve all the data
}

function saveAll () {
  // LOCK the DATA
  // make sure my data is written to a file
  // UNLOCK
}

for (let i = 1; i< 100 ; i++) {
  create({ name: 'Hillary', likes: 'coding '+i+' apps', city: 'Toronto' })
}
update('Steve','likes','football')
remove (1)
// console.log(find ('Hillary'))
console.log(data)
