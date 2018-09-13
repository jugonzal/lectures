const data = {
  students: [
    { name: 'Ben', course: 'web', city: 'Toronto' },
    { name: 'Steve', course: 'ios', city: 'Montreal', marks: [10,9,10]}
  ]
}

function add (newEntry) {
  lockData()
  readFromDisk()
  data.students.push(newEntry)
  saveToDisk()
}

function addStudent (name, course, city) {
  let newStudent = {}
  newStudent.name = name
  newStudent.course = course
  newStudent.city = city
  add(newStudent)
}

function findStudent (name) {
  return data.students.find(element => element.name == name)
}

addStudent('Dan','web','Toronto')

console.log(data)
console.log(findStudent('Steve'))
