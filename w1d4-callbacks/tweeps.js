var tweeps = [
  { tweep: '@fzero', 
    said: "Callbacks are control flow as designed by M.C. Escher."
  },
  { tweep: '@om',
    said: "For @facebook people = money"
  },
  { tweep: '@ryanmerkley',
    said: "Stunning exhibit opening today at the @agotoronto: 'Anthropocene'"
  }
]

// Need to add this: creativecommons: CC0

tweeps.push({ 
  tweep: '@creativecommons',
  said: "CC0!"
})

// STAGE 0: Our first stage is to 
// manually change one tweep at a time

// tweeps[2].done = true;
// tweeps[0].like = true;

// console.log("Is this done? ",tweeps[1].done)

// STAGE 1: writing functions to do one thing
// Explore the various styles of functions: 
// declaration vs expression

function likeTweep (handle) { 

  // I wanted to leave a function inside a function
  // as a reminder that this is NOT a callback
  // but it is a valid thing to do
  function arrayLength () {
    return tweeps.length;
  }

  for (var i = 0; i < arrayLength(); i++) {
    if (tweeps[i].tweep === handle) {
      tweeps[i].like = true;
    }
  }
}

// likeTweep('@fzero');
// likeTweep('@ryanmerkley');

var done = function (handle) {
  for (var aTweep of tweeps) {
    if (aTweep.tweep === handle) {
      aTweep.done = true;
    }
  }
}

// done('@om')


// doneTweep('@fzero');

// STAGE 2: finding ways to create generic functions, 
// using bracket notation

function changeTweep(handle, flag) {
  for (var aTweep of tweeps) {
    if (aTweep.tweep === handle) {
      aTweep[flag] = true;
    }
  }
}

// changeTweep('@fzero', 'like');
// changeTweep('@ryanmerkley', 'like');
// changeTweep('@fzero', 'done');
// changeTweep('@om','insightful')

// STAGE 3: certain things that our function above 
// can not do, such as changing what was said. 
// Need CALLBACKS!!!!  (upper)

// make a tweep all CAPS

function allCaps (tweep) {
  tweep.said = tweep.said.toUpperCase()
}

function like (tweep) {
  tweep.like = true
}

function isDone (tweep) {
  tweep.done = true
}

function xTweep(handle, callback) {
  for (var aTweep of tweeps) {
    if (aTweep.tweep === handle) {
      callback(aTweep);
    }
  }
}

xTweep('@fzero', allCaps);
xTweep('@om', like);
xTweep('@ryanmerkley', isDone);

// STAGE 4: "on demand" callbacks by using expressions

xTweep('@ryanmerkley', function (tweep) {
  tweep.said += '!!!!'
});

xTweep('@om', function() {
  console.log('Callback was called!!!');
})

console.log("ALL: ", tweeps)
