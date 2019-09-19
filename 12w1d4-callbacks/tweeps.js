// // REVIEW: how are we doing with objects?

// const lhl = {
//   mentors: {
//     juan: {
//       name: 'Juan Gonzalez',
//       age: 73
//     },
//     vasily: {
//       name: 'Vasiliy Klimkin',
//       age: 13
//     },
//     tim: {
//       name: 'Tim Johns',
//       expertise: 'web'
//     }
//   },
//   allNames: function() {
//     let names = [];
//     for (let mentor of Object.values(this.mentors)) {
//       names.push(mentor.name);
//     }
//     return names;
//   }
// };


// console.log(lhl.mentors.juan.age)

// console.log(lhl.allNames());


const tweeps = [
  { who: '@fzero',
    said: "Callbacks are control flow as designed by M.C. Escher."},
  { who: '@kevinroose',
    said: "The solution to Bad Facebook is always More Facebook"},
  { who: '@0xUID',
    said: "Macintosh OS X was beautiful, intuitive and user-friendly......and it was #UNIX!"},
  { who: '@mozilla',
    said: "Today, Mozilla is publishing the 2019 #InternetHealth Report"}
];



// STAGE 0: Our first stage is to
// manually change one tweep at a time

// tweeps[2].like = true;
// tweeps[1].like = false;
// tweeps[1].dislike = true;
// tweeps[0].like = undefined;
// tweeps[0].dislike = null;

// console.log(tweeps[0].like ? "Yes" : "No")
// console.log(tweeps[1].like ? "Yes" : "No")
// console.log(tweeps[2].like ? "Yes" : "No")
// console.log(tweeps[2].love ? "Yes" : "No")
// console.log(tweeps[2].love)





// STAGE 1: writing functions to do one thing (like, flag, timestamp)
// Practice the notation for function expressions
// Also, observe the scope of variables
// Notice the linter will complain about `tweep` not being declared

// tweep = false;

// const likeTweep = function(handle) {
//   for (let tweep of tweeps) {
//     if (tweep.who === handle) {
//       tweep.like = true;
//       return tweep;
//     }
//   }
// }

// // function dislikeTweep () {

// // }

// console.log(likeTweep('@mozilla'))

// // console.log("aftermath: ", tweep)

// const flagTweep = function(handle) {
//   for (let tweep of tweeps) {
//     if (tweep.who === handle) {
//       tweep.flag = true;
//       return tweep;
//     }
//   }
// }

// flagTweep('@kevinroose')


// STAGE 2: finding ways to create generic functions,
// using bracket notation


// const changeTweep = function(handle, action) {
//   for (let tweep of tweeps) {
//     if (tweep.who === handle) {
//       tweep[action] = true;
//       return tweep;
//     }
//   }
// }

// let thingToAdd = 'complicated'
// changeTweep('@mozilla','love')
// changeTweep('@fzero','awesome')
// changeTweep('@mozilla',thingToAdd)




// STAGE 3: certain things that our function above
// can not do, such as changing what was said.
// How about keep track of aliases for tweeps?

const quotable = function (tweep) {
  return `${tweep['who']} said "${tweep.said}"`
}

const likable = function (tweep) {
  tweep.like = true
}

// console.log(quotable(tweeps[0]))

const changeTweep = function(handle, callback) {
  for (let tweep of tweeps) {
    if (tweep.who === handle) {
      callback(tweep)
      // return tweep;
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          uyy7                          
  }
}

// console.log(changeTweep('@mozilla',quotable))
console.log(changeTweep('@mozilla',likable))

changeTweep('@mozilla', function(tweep) {
  tweep.said = tweep.said.toUpperCase()
})

console.log(tweeps.map(quotable))

console.log(tweeps);
