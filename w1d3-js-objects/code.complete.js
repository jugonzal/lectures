// Today we'll talk about Objects

// start by creating a bunch of variables
var  address = '46 Spadina'
var  start = 2016
var  name = 'Lighthouse Labs'

// then we'll attempt to better organize them

var office = {
  address: '46 Spadina',
  start: 2016,
  name: 'Lighthouse Labs'
}

var jobs = [office]

jobs.push({
  address: '99 Spadina',
  start: 2002,
  company: 'Blast Radius'
})

jobs.push({
  address: '111 Peter St',
  start: 2007,
  name: 'PlanetEye'
})

// show the various ways in which you can manipulate the data

jobs[0].mates = ['Dave']
jobs[1].mates = ['Matt','Ricardo']

// now create functions to do some of that work...
// acting on individual fields first...

function displayJob (job) {
  console.log('Company: ',job.name)
  console.log('Started in: ',job.start)
  console.log('Located at: ',job.address)
  job.lastViewed = 'today'

  // this will not affect the original object
  job = {messed: 'up'}
  console.log('inside ',job.messed)
}

// displayJob(office)
// displayJob(jobs[1])

// console.log(jobs)

// lastly create a generic function that can be "plugged" 
// into an object to explain `this`

function displayMe () {
  console.log('Company: ',this.name)
  console.log('Started in: ',this.start)
  console.log('Located at: ',this.address)  
}

// office.display = displayMe

// office.display()


// console.log(office)

for (var i=0; i< jobs.length; i++) {
  jobs[i].display = displayMe
  jobs[i].display()
  // console.log('Friends at ',jobs[i].name,': ',jobs[i].mates)
}

for (var key in office) {
  console.log(key, office[key])
}

var newOffice = {
  address: '46 Spadina',
  start: 2016,
  name: 'Lighthouse Labs',
  display: function () {
    console.log('Company: ',this.name)
    console.log('Started in: ',this.start)
    console.log('Located at: ',this.address)  
  }

}
