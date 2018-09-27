// we created this array of objects
// but we also talked about other alternatives
// such as using the handle as a key

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

// Our first stage was to manually change one tweep at a time

// tweeps[0].liked = true;
// tweeps[2].liked = true;
tweeps[3].flag = "Important"
console.log(tweeps[0].who)

// Then we figured out we could write simple functions to do
// the same thing

function addTweep (who, what) {
  tweeps.push({who: who, said: what})
}

// Then we found a way to make those simple functions a bit
// more generic
// in this function we used the bracket notation 

function addLabel (what, label) {
  // go through every item in the array
  for (var i=0; i< tweeps.length; i++) {
    // is this the right tweep ?
    if (tweeps[i].said === what) {
      // then like it!
      tweeps[i][label] = true;
    }
  }
}

// but soon realied there were certain things that our
// function above could not do, such as changing what was said

function wowTweep (what) {
  // go through every item in the array
  for (var i=0; i< tweeps.length; i++) {
    // is this the right tweep ?
    if (tweeps[i].said === what) {
      // then like it!
      // tweeps[i][label] = true;
      tweeps[i].said += '!!!!!'
    }
  }
}

// so we upgraded our skills with CALLBACKS.
// writing little simple functions...

function doWow (tweep) {
  tweep.said += '!!!!!'
}

function doLike (tweep) {
  tweep.like = true
}

function doUpper (tweep) {
  tweep.said = tweep.said.toUpperCase()
}

// that can be passed as a parameter to a very
// generic function.  That parameter is "action"
// in this example

function doSomething (what, action) {
  // go through every item in the array
  for (var i=0; i< tweeps.length; i++) {
    // is this the right tweep ?
    if (tweeps[i].said === what) {
      // whatever "action" does will be done next
      action(tweeps[i]);
    }
  }
}


addTweep('@classOf2018','functions are cool')
// addLabel('functions are cool','liked')
// addLabel("Callbacks are control flow as designed by M.C. Escher.",'dangerous')
// wowTweep ('functions are cool')
doSomething('functions are cool', doLike)
doSomething('functions are cool', doWow)
doSomething("In our #internethealth Report, we put a spotlight on the open-source software you never knew you were using.",doUpper)

// this was the basis for our tests.  Show me the whole data structure at the end
console.log("My tweeps: ",tweeps)
