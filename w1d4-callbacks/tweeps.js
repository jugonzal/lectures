var tweeps = [
  { who: '@fzero', 
    said: "Callbacks are control flow as designed by M.C. Escher."},
  { who: '@kevinroose',
    said: "The solution to Bad Facebook is always More Facebook"},
  { who: '@0xUID',
    said: "Macintosh OS X was beautiful, intuitive and user-friendly......and it was #UNIX!"},
  { who: '@mozilla',
    said: "learn how to create your own VR experiences with A-Frame"}
]

  // STAGE 0: Our first stage is to 
  // manually change one tweep at a time

// console.log(tweeps[1].who)
// console.log(tweeps[2].who)

// tweeps[0].when = new Date('2018-11-28')

// console.log(tweeps[1].when)
// console.log(tweeps[0].when.toString())

// tweeps[0]['where'] = 'Toronto'

  // STAGE 1: writing functions to do one thing
  // Explore the various styles of functions: 
  // declaration vs expression
  // Also, what happens to variables that go into functions?

// this will NOT work because the function doesnt exist yet
// timestamp(tweeps[0])

// function timestamp (tweep) {
//   tweep.timestamp = new Date();
// }

var timestamp = function (tweep) {
  tweep.timestamp = new Date();
}

var approval = function (tweep) {
  tweep.approved = true;
}

// timestamp(tweeps[1])
// approval(tweeps[3])


  // STAGE 2: finding ways to create generic functions, 
  // using bracket notation

// function changeTweep(tweep, key, value) {
//   tweep[key] = value
// }

// changeTweep(tweeps[1], 'timestamp', new Date())
// changeTweep(tweeps[3], 'approved', true)
// // changeTweep(tweeps[3], 17, "seventeen")

// for (i=0; i<tweeps.length; i++) {
//   changeTweep(tweeps[i], 'ID', i)
// }

  // STAGE 3: certain things that our function above 
  // can not do, such as changing what was said. 

function changeOneTweep (handle, doSomething) {
  for (tweep of tweeps) {
    if (tweep.who == handle) {
      doSomething(tweep)
    }
  }
}

changeOneTweep('@fzero', timestamp)
changeOneTweep('@mozilla', timestamp)

changeOneTweep('@mozilla', function (tweep) {
  tweep.said = tweep.said.toUpperCase();
  tweep.when = (new Date()).toString();
})


  // I've created a function that does ONE thing very
  // well, but at the same time is so generic that could
  // be used to make ANY change across all my tweeps.
  // That is the ultimate goal.


console.log(tweeps)



