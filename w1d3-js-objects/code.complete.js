// Today we'll talk about Objects
console.log('Javascript Objects')

// start by creating a bunch of variables...
// strings, numbers, arrays

var name = 'Lighthouse Labs';
var hoursPerDay = 12;
var active = true;
var startDate = 'January 2017';
var peers = ['perry', 'umair', 'esther'];

// console.log('One of my peers', peers[2]);

// then we'll attempt to better organize them
// using key:value pairs

var lhl = {
  name: 'Lighthouse Labs',
  hoursPerDay: 12,
  active: true,
  startDate: 'January 2017',
  peers: ['perry', 'umair', 'esther']
}


// and learn how much more convenient this is

console.log('Name of that company: ', lhl.name);

// show the various ways in which you can manipulate the data
// dot-notation & bracket-notation

console.log('When I started: ',lhl.startDate);
console.log('Name of one of my peers there: ',lhl.peers[0]);

lhl.courses = ['Web Bootcamp'];


var uoft = {
  name: 'University of Toronto',
  hoursPerDay: 3,
  active: false,
  startDate: 'January 2013',
  peers: ['eyal'],
  courses: ['CSC309 - Web Programming','Ethics']
}

var gigs = [lhl, uoft]

console.log('found it:', gigs[1].courses[0])


console.log('Name of Course: ', lhl.courses)
console.log('Name of Course: ', uoft['courses'])

uoft['location'] = 'St. George'

// careful with using anything else but words as keys
uoft[123] = 416123123


// now create functions to do some of that work...
// acting on individual fields first...

lhl.weeks = 10
lhl.daysPerWeek = 5
uoft.weeks = 12
uoft.daysPerWeek = 1

function totalHours(place) {
  var minutesPerHour = 60;
  return place.weeks * place.daysPerWeek * place.hoursPerDay; 
}

console.log("At LHL: ",totalHours(lhl))
console.log("At UofT: ",totalHours(uoft))




// console.log(uoft.123)

// and then acting on the overall object
// talk about objects passed as reference

function changeName(gig, newName) {
  gig.name = newName;
}

changeName(uoft, 'U. of T.')

// and realize the advantage of bracket notation 
// to create more powerful functions
function changeSomething(gig, whatProperty, newValue) {
  console.log('changeSomething: ',whatProperty)
  gig[whatProperty] = newValue;
}

changeSomething(uoft, 'startDate', 'January 2014');
changeSomething(uoft, 'active', true);
changeSomething(uoft, 'peers', []);


// lastly create a generic function that can be "plugged" 
// into an object to explain `this`

lhl.totalHours = function () {
  var minutesPerHour = 60;
  return this.weeks * this.daysPerWeek * this.hoursPerDay; 
}

uoft.totalHours = lhl.totalHours
console.log("Hours in LHL: ",lhl.totalHours())
console.log("Hours in UofT: ",uoft.totalHours())

console.log('Everything about LHL: ', lhl);
console.log('Everything about UoT: ', uoft);

// and improve the object by adding functions to it


