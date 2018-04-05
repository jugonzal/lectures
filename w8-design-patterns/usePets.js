dbEngine = require('./pets')

dbEngine.create('Leonard','turtle')
dbEngine.update('leonard','Leonard','alligator')
console.log(dbEngine.read('leonard'))
