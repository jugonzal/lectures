var loc = { '99': '99 Spadina',
  '111': '111 Peter',
  '199': '199 Spadina',
  juan: 'Very secret location',
  question: 'If you did loc 205 would it sill work?',
  falsey: false,
  number: 3.14159265,
  empty: '',
  array: [ 'this is crazy', 'second element' ],
  'more arrays': [] 
}

loc['latest'] = 'The latest news'

loc.oneMore = 'Yet another one'

console.log(loc)

console.log(loc['juan'])
console.log(loc.juan)

loc.array.push('test')
loc.array.push('second test')

loc.world = {}
loc.world.canada = 'Oh Canada'


for (key in loc) {
  if (key == 'juan') {
    console.log('    IMPORTANT    !!!! ')
  }
  if (key == 'array') {
    loc[key].push('MORE')
  }
  console.log("Key: ",key, "  and Value: ",loc[key])
}

var students = {
  juan: {
    marks: [10, 10, 10],
    age: 90
  },
  izzy: {
    marks: [6,7,8],
    age: 25
  }
}

console.log(students.juan.marks)



