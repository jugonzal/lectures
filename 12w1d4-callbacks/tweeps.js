// REVIEW: how are we doing with objects?

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

// console.log(lhl.mentors.vasily.age)
// console.log(lhl.allNames())



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

// console.log(tweeps[1].said)

// tweeps[2]['like'] = true;
// tweeps[2].likeCount = 4;

// tweeps[3]['like'] = true;



// STAGE 1: writing functions to do one thing (like, flag, timestamp)
// Practice the notation for function expressions
// Also, observe the scope of variables
// Notice the linter will complain about `tweep` not being declared


// const likeTweep = function (name) {

//   for (let aTweep of tweeps) {
//     if (aTweep.who === name) {
//       if (aTweep.like) {
//         aTweep.likeCount++
//       } else {
//         aTweep.like = true
//         aTweep.likeCount = 1
//       }
//       break;
//     }
//   }

//   // for (let i=0; i < tweeps.length; i++) {
//   //   let aTweep = tweeps[i]

//   // }

// }

const likeTweep = function (aTweep) {

  if (aTweep.like) {
    aTweep.likeCount++
  } else {
    aTweep.like = true
    aTweep.likeCount = 1
  }
}

const findsTweep = function(name) {
  for (let aTweep of tweeps) {
    if (aTweep.who === name) {
      return aTweep;
    }
    // TODO: what happens when it is not found ??
  }
}


// likeTweep(findsTweep('@mozilla'))
// likeTweep(findsTweep('@mozilla'))
// likeTweep(findsTweep('@fzero'))


// STAGE 2: finding ways to create generic functions,
// using bracket notation

const changeTweep = function (aTweep, action) {

  if (aTweep[action]) {
    aTweep[action + 'Count']++
  } else {
    aTweep[action] = true
    aTweep[action + 'Count'] = 1
  }
}

// changeTweep(findsTweep('@mozilla'), 'like')
// changeTweep(findsTweep('@mozilla'), 'love')
// changeTweep(findsTweep('@fzero'), 'troll')
// changeTweep(findsTweep('@0xUID'), 'who')


// STAGE 3: certain things that our function above
// can not do, such as changing what was said.
// How about keep track of aliases for tweeps?




const doToTweep = function(name, callback) {
  for (let aTweep of tweeps) {
    if (aTweep.who === name) {
      callback(aTweep);
    }
  }
}

doToTweep('@mozilla', likeTweep)
doToTweep('@fzero', function(aTweep) {
  aTweep.said = aTweep.said.toUpperCase()
})

console.log(tweeps)
