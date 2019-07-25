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
//   allNames: function getNames() {
//     let names = [];
//     for (let mentor of Object.values(this.mentors)) {
//       names.push(mentor.name);
//     }
//     return names;
//   }
// };

// // console.log(lhl.mentors.juan.age)

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

// tweeps[1]['like'] = true;
// tweeps[0].read = new Date();



// STAGE 1: writing functions to do one thing (like, flag, timestamp)
// Practice the notation for function expressions
// Also, observe the scope of variables
// Notice the linter will complain about `tweep` not being declared

// const likeTweep = function (who) {
//   for (let tweep of tweeps) {
//     if (tweep.who === who) {
//       tweep.like = true;
//     }
//   }
// }

// likeTweep('@fzero');

// const timestampTweep = function (who) {
//   for (let tweep of tweeps) {
//     if (tweep.who === who) {
//       tweep.timestamp = new Date();
//     }
//   }
// }

// timestampTweep('@mozilla')
// timestampTweep('@kevinroose')

// STAGE 2: finding ways to create generic functions,
// using bracket notation


// const markTweep = function (who, what, value) {
//   for (let tweep of tweeps) {
//     if (tweep.who === who) {
//       tweep[what] = value;
//     }
//   }
// }

// markTweep('@mozilla', 'like', true);
// markTweep('@fzero','timestamp', new Date());
// markTweep('@kevinroose','flag','unruly');
// markTweep('@fzero','who','@fabio');


// STAGE 3: certain things that our function above
// can not do, such as changing what was said.
// How about keep track of aliases for tweeps?

const yellTweep = function (tweep) {
  tweep.said = tweep.said.toUpperCase();
}

const doTweep = function (who, callback, param) {
  for (let tweep of tweeps) {
    if (tweep.who === who) {
      callback(tweep, param)
    } else if (tweep.alias && tweep.alias.includes(who)) {
      callback(tweep, param)
    }
  }
}

const addAlias = function(tweep, alias) {
  if (tweep.alias) {
    tweep.alias.push(alias)
  } else {
    tweep.alias = [alias]
  }
}

doTweep('@fzero', addAlias, 'fabio')
doTweep('fabio', yellTweep)
doTweep('@mozilla', function(tweep) {
  tweep.like = true;
})

// tweeps.map(yellTweep)


// I've created a function that does ONE thing very
// well, but at the same time is so generic that could
// be used to make ANY change across all my tweeps.
// That is the ultimate goal.

// Javascript provides a range of high order function like `map`
tweeps.map(function(tweep) {
  tweep.when = (new Date());
});

// Going back to our very first function method;

// lhl.allNames = () => Object.values(lhl.mentors).map(mentor => mentor.name)
// console.log(lhl.allNames())

console.log(tweeps);
