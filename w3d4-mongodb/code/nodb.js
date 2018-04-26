const data = {
  students: [
    { name: 'Ben', likes: 'basketball', city: '6ix' },
    { name: 'Steve', likes: 'home', city: 'Montreal'}
  ]
}

function add (name, likes, city) {
  data.students.push({name: name, likes: likes, city: city})
}

function edit (which, key, value) {
  data.students[which][key] = value
}

function myDelete (which) {
  delete data.students[which]
}

function read (which) {
  console.log(data.students[which])
}

function find (student) {
  data.students.forEach(s => {
    if (s.name == student) {
      console.log(s)
    }
  })
}

function saveAll () {
  // write data.stringify to a file
}

add ('Dan', 'Hockey', 'Toronto')
edit (2, 'city', '6ix')
myDelete (1)
read (0)
find ('Dan')