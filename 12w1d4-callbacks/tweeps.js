// // REVIEW: how are we doing with objects?

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
  allNames: function() {
    let names = [];
    for (let mentor of Object.values(this.mentors)) {
      names.push(mentor.name);
    }
    return names;
  }
};


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

// console.log(tweeps[0].said)
// tweeps[0].like = true;

// tweeps[0].like = false;

// tweeps[3]['when'] = new Date();


// STAGE 1: writing functions to do one thing (like, flag, timestamp)
// Practice the notation for function expressions
// Also, observe the scope of variables
// Notice the linter will complain about `tweep` not being declared


// const likeTweep = function(name) {
//   for (let tweep of tweeps) {
//     if (tweep.who === name) {
//       tweep.like = true;
//     }
//   }
// };

// likeTweep('@kevinroose');

// example: passing object by reference
// const timestampTweep = function(tweep) {
//   tweep.when = new Date();
// };

// const timestampTweep = function(name) {
//   for (let tweep of tweeps) {
//     if (tweep.who === name) {
//       tweep.when = new Date();
//     }
//   }

// };

// timestampTweep('@fzero');
// timestampTweep('@mozilla');

// STAGE 2: finding ways to create generic functions,
// using bracket notation

let findTweep = function(name) {
  for (let tweep of tweeps) {
    if (tweep.who === name) {
      // tweep.when = new Date();
      return tweep
    }
  }
};

findTweep('@mozilla').like = true;
findTweep('@fzero').when = new Date();

// let updateTweep = function(name, what, value) {
//   findTweep(name)[what] = value;
// };

// updateTweep('@mozilla','loved', true)
// updateTweep('@kevinroose','flag', 'trolling')
// updateTweep('@kevinroose','when', new Date())




// STAGE 3: certain things that our function above
// can not do, such as changing what was said.
// How about keep track of aliases for tweeps?

const yellOut = function(tweep) {
  tweep.said = tweep.said.toUpperCase() + '!!!'
}

yellOut(tweeps[0])

let updateTweep = function(name, callback) {
  callback(findTweep(name))
};

updateTweep('@fzero', yellOut)

updateTweep('@mozilla', function(tweep) {
  if (!tweep.when) {
    tweep.when = new Date()
  }
  tweep.quote = `${tweep.who} said "${tweep.said}" on ${tweep.when}`;
})


// ONE MORE THING...
// We talked about this additional update

// I'm redefining how we find Tweeps... 
// assuming the possibility of aliases

findTweep = function(name) {
  for (let tweep of tweeps) {
    let allNames = [tweep.who]
    if (tweep.alias) {
      allNames = [tweep.who, ...tweep.alias ]
    } 
    if (allNames.includes(name) ) {
      return tweep
    }
  }
};

// an even more generic version of this function
// allows for other parameters to be passed TO
// THE CALLBACK
// we are using the spread operator to generalize
// how many parameters can be handled
updateTweep = function(name, callback, ...params) {
  callback(findTweep(name), ...params)
};

const addAlias = function(tweep, newAlias) {
  if (tweep.alias) {
    tweep.alias.push(newAlias)
  } else {
    tweep.alias = [ newAlias ]
  }
}

updateTweep('@mozilla', addAlias, 'moz');
updateTweep('moz', yellOut)

console.log(tweeps);

