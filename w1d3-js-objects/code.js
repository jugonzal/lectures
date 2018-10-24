// Today we'll talk about Objects

// start by creating a bunch of variables

var company = 'Lighthouse Labs';
var started = 'January 2017';
var role = 'Web Instructor';
var friends = ['Dave','Fabio'];

console.log('who is my friend then? ', friends);

// then we'll attempt to better organize them

var job = {
  company : 'Lighthouse Labs', 
  started : 'January 2017',
  401 : 'my savings',
  courses : [{
    name: 'web'
  },{
    name: 'blockchain'
  }]
}

job.role = 'Web Instructor';
job.friends = [];

var previous = {
  company : 'Videogami',
  started : 'June 2012',
  role: 'Founder',
  friends: ['Slava']
}

// show the various ways in which you can manipulate the data

console.log('when did I start ? ', job.started)
console.log('when did I start the previous one ? ', previous.started)

friends.push('Tim')
// job.friends.push('Dave')
// job.friends.push('Fabio')
job.friends.push('Diego')
job['401'] = 'didnt work'
job['friends'].push('Tim')
// job['friends'].push(previous.friends[0])

// console.log('what is my job? ', previous)

job.courses[0]['weeks'] = 10
job.courses[1]['weeks'] = 12
// console.log('my courses nowadays', job.courses)


// now create functions to do some of that work...
// acting on individual fields first...

function newFriend (gig, friend) {
  gig.friends.push(friend)
}

function changeCompany(gig, newName) {
  gig.company = newName
  // console.log('changed it: ', gig.company)
}

newFriend(job, 'Dave')
newFriend(job, 'Fabio')
newFriend(job, previous.friends[0])

changeCompany (job, 'LHL')


// and then acting on the overall object
// talk about objects passed as reference

// lastly create a generic function that can be "plugged" 
// into an object to explain `this`

function addFriend (friend) {
  this.friends.push(friend)
}

job.add = addFriend
previous.addFriend = addFriend

job.add('all of you')
previous.addFriend('other people')


console.log('what is my job? ', previous)

// a more advanced function

job.daysSince = function () {
  return (new Date(this.started))/1000/60/60/24
}

console.log('what is my job? ', job)
console.log(job.daysSince())

// addFriend('E')  //  ????