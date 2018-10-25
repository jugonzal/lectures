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


// creativecommons: CC0


// STAGE 0: Our first stage is to 
// manually change one tweep at a time

tweeps.push({who: '@creativecommons', said: 'CC0'})

// tweeps[0]['like'] = true
// tweeps[3].like = true


// STAGE 1: writing functions to do one thing
// Explore the various styles of functions: 
// declaration vs expression

function likes(tweep) {
  for (aTweep of tweeps) {
    if (aTweep.who == tweep) {
      aTweep.like = true
    }
  }
}

function flags(tweep) {
  for (var i=0; i < tweeps.length; i++) {
    if (tweeps[i].who == tweep) {
      tweeps[i].flag = true
    }
  }
}

// likes('@fzero')
// flags('@om')


// STAGE 2: finding ways to create generic functions, using bracket notation

function change(tweep, type) {
  for (aTweep of tweeps) {
    if (aTweep.who == tweep) {
      aTweep[type] = true
      // aTweep.type = true // this is not going to work
    }
  }
}

// change('@fzero','like')
// change('@om','flag')
// change('@creativecommons','insightful')


// STAGE 3: certain things that our function above 
// can not do, such as changing what was said. Need CALLBACKS!!!!

function doLike (aTweep) {
  aTweep.like = true
}

var liking = doLike

function doUpper (aTweep) {
  aTweep.said = aTweep.said.toUpperCase()
}

var flagging = function (aTweep) {
  aTweep.flag = true
}

function doSomething(tweep, callback) {
  for (aTweep of tweeps) {
    if (aTweep.who == tweep) {
      callback(aTweep)
    }
  }
}

doSomething('@fzero', doUpper)
doSomething('@om', liking)
doSomething('@mozilla', flagging)


// STAGE 4: "on demand" callbacks by using expressions

doSomething('@fzero', function(a) {
  a.said += '!!!!'
  // doSomething(aTweep.who, liking)
})
console.log("All of it: ", tweeps)

