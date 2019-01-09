// Today we'll talk about Objects
console.log('Javascript Objects')

// start by creating a bunch of variables...
// strings, numbers, arrays

// var school = "Lighthouse Labs"
// var perWeek = 5
// var hoursPerDay = 2
// var since = "January 2017"
// var courses = ["web", "blockchain"]

// then we'll attempt to better organize them
// using key:value pairs

var lhl = {
   school: "Lighthouse Labs",
   perWeek: 5,
   hoursPerDay: 2,
   since: "January 2017",
   courses: ["web", "blockchain"]
}

var uoft = {
   school: "University of Toronto",
   perWeek: 3,
   hoursPerDay: 1,
   since: "January 2013",
   courses: ["web", "ethics"]
}

// and learn how much more convenient this is

// > lhl.school

// > var gigs = [uoft, lhl]

// > gigs[1].courses[1]
// > gigs[1].courses[1] = 'blckchn'

// > var jobs = {
// > lhl: lhl,
// > uoft: uoft
// > }

// > jobs.uoft.hoursPerDay

// show the various ways in which you can manipulate the data: 
// dot-notation & bracket-notation

// > lhl.students
// > lhl['students']

// > lhl['courses'][0]

// > Object.keys(lhl)
// > Object.keys(lhl)[2]
// > lhl[Object.keys(lhl)[2]]

// now create functions to do some of that work...
// acting on individual fields first...

function totalHours (gig) {
  return gig.perWeek * gig.hoursPerDay * gig.weeks
}


// and then acting on the overall object
// at this point we'll learn about objects passed as reference

function addsWeeks (gig, numberOfWeeks) {
  gig.weeks = numberOfWeeks
}


// and realize the advantage of bracket notation 
// to create more powerful/generic functions

function addsSomething(gig, what, value) {
  gig[what] = value  
}

addsSomething(lhl, 'weeks', 10)
addsSomething(uoft, 'weeks', 12)


console.log('Hours at LHL: ', totalHours(lhl))
console.log('Hours at UofT: ', totalHours(uoft))

// lastly create a generic function that can be "plugged" 
// into an object to explain `this`

function calculateHours () {
  return this.perWeek * this.hoursPerDay * this.weeks
}

lhl.adding = addsSomething
lhl.calc = calculateHours
uoft.calc = calculateHours

lhl.adding(lhl, 'winning', true)

console.log("Hours at LHL: ", lhl.calc())
console.log("Hours at UofT: ", uoft.calc())
console.log('LHL: ', lhl)

// and improve the object by adding functions to it


