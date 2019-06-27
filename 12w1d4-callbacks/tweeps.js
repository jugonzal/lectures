// REVIEW: how are we doing with objects?

const lhl = {
  mentors: {
    juan: {
      name: 'Juan Gonzalez',
      age: 73
    },
    vasily: {
      name: 'Vasiliy Klimkin',
      age: 13
    },
    tim: {
      name: 'Tim Johns',
      expertise: 'web'
    }
  },
  allNames: function getNames() {
    let names = [];
    for (let mentor of Object.values(this.mentors)) {
      names.push(mentor.name);
    }
    return names;
  }
};

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
// tweeps[3].when = new Date();
// console.log(tweeps[0].said = tweeps[0].said.toUpperCase());


// STAGE 1: writing functions to do one thing
// Practice the notation for function expressions
// Also, observe the scope of variables
// Notice the linter will complain about `tweep` not being declared

// const likeTweep = function(name) {
//   for (tweep of tweeps) {
//     if (tweep.who === name) {
//       tweep.like = true;
//     }
//   }
// };

// likeTweep('@0xUID');

// const flagTweep = function(name) {
//   for (tweep of tweeps) {
//     if (tweep.who === name) {
//       tweep.flag = true;
//     }
//   }
// };

// flagTweep('@kevinroose'); 

// const timestampTweep = function(name) {
//   for (tweep of tweeps) {
//     if (tweep.who === name) {
//       tweep.when = new Date();
//     }
//   }
// };

// timestampTweep('@fzero');

// STAGE 2: finding ways to create generic functions,
// using bracket notation

// const addKeyToTweep = function(name, key, value) {
//   for (let tweep of tweeps) {
//     if (tweep.who === name) {
//       tweep[key] = value;
//     }
//   }
//   // this will not work, because tweep is only available in `for`
//   // console.log("My tweep? ", tweep);
// };

// addKeyToTweep('@fzero','like', true)
// addKeyToTweep('@fzero','when', new Date())
// addKeyToTweep('@fzero',123, 456)

// STAGE 3: certain things that our function above
// can not do, such as changing what was said.


const like = function(tweep) {
  tweep.like = true;
}

const doToTweep = function(name, callback) {
  for (let tweep of tweeps) {
    if (tweep.who === name) {
      callback(tweep)
    }
  }
};

const yell = function(tweep) {
  tweep.said = tweep.said.toUpperCase();
}

doToTweep('@fzero', yell)
doToTweep('@fzero', like)
doToTweep('@fzero', function (tweep){ tweep.flag = true} )
doToTweep('@fzero', (juan) => juan.love = true )


// I've created a function that does ONE thing very
// well, but at the same time is so generic that could
// be used to make ANY change across all my tweeps.
// That is the ultimate goal.

// Javascript provides a range of high order function like `map`
tweeps.map(function(tweep) {
  tweep.when = (new Date());
});

// Going back to our very first function method;

lhl.allNames = () => Object.values(lhl.mentors).map(mentor => mentor.name)
console.log(lhl.allNames())

console.log(tweeps);
