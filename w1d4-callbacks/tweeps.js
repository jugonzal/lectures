var tweeps = [
  { who: '@fzero', 
    said: "Callbacks are control flow as designed by M.C. Escher."},
  { who: '@om',
    said: "For @facebook people = money"},
  { who: '@ryanmerkley',
    said: "Stunning exhibit opening today at the @agotoronto: 'Anthropocene'"},
  { who: '@mozilla',
    said: "In our #internethealth Report, we put a spotlight on the open-source software you never knew you were using."}
]

// STAGE 0: Our first stage is to 
// manually change one tweep at a time

for (i = 0; i < tweeps.length; i++) {
  // console.log('my first tweep ',tweeps[i].who,' said ',tweeps[i].said)
}

// tweeps[0].agree = true
// tweeps[2].like = true

// console.log(tweeps)

// STAGE 1: writing functions to do one thing
// Explore the various styles of functions: 
// declaration vs expression

function likeTweep(tweep) {
  tweep.like = true
}

// var agreeTweep = null;


var agreeing = function agreeTweep(tweep) {
  tweep.agree = true
}

// agreeing(tweeps[2])


// STAGE 2: finding ways to create generic functions, using bracket notation

function flagTweep(tweep, flag) {
  tweep[flag] = true
}

// for (let tweep of tweeps) {
//   flagTweep(tweep, 'like')
//   flagTweep(tweep, 'read')
// }


// STAGE 3: certain things that our function above 
// can not do, such as changing what was said. Need CALLBACKS!!!!

function outrageTweep(tweep) {
  tweep.said += ' !!!!'
}

// function changeTweep(tweep, change) {
//   if (change == 'like')
//     flagTweep(tweep, 'like')
//   if (change == 'outrage')
//     outrageTweep(tweep)
// }

function changeTweeps(change) {
  for (let tweep of tweeps) {
    change(tweep)
  }
}

changeTweeps(likeTweep)



// var modifyAllTweeps = changeTweeps
// modifyAllTweeps(yell)


changeTweeps(function (tweep) {
  tweep.said = tweep.said.toUpperCase()
})




console.log(tweeps)



