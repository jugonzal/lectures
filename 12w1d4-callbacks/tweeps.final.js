// REVIEW: how are we doing with objects?

const lhl = {
  mentors: {
    juan: {
      name: 'Juan Gonzalez',
      age: 63
    },
    vasily: {
      name: 'Vasiliy Klimkin',
      age: 23
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

console.log(lhl.allNames());


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

// tweeps[0].when = new Date("May 1, 2019");
// tweeps[0].when = tweeps[0].when.toString();

// tweeps[3].when = (new Date("04/23/2019")).toString();

// tweeps[1].liked = true;
// tweeps[2]['liked'] = true;
// var myKey = 'liked';
// // tweeps[3].myKey = true;   <-- this will not work!
// tweeps[3][myKey] = true;


// STAGE 1: writing functions to do one thing
// Explore the various styles of functions:
// declaration vs expression
// Also, what happens to variables that go into functions?

// const likeTweep = function(nameOfTweep) {
//   for (let tweep of tweeps) {
//     if (tweep.who === nameOfTweep) {
//       tweep.like = true;
//     }
//   }
// };

// const timestamp = function () {
//   for (tweep of tweeps) {
//     tweep.when = (new Date()).toString();
//   }
// }

// console.log(typeof likeTweep);

// let reallyLikeTweep = likeTweep;

// reallyLikeTweep('@fzero');
// timestamp();


// STAGE 2: finding ways to create generic functions,
// using bracket notation

// const changeTweep = function(nameOfTweep, doWhat, value) {
//   for (let tweep of tweeps) {
//     if (tweep.who === nameOfTweep) {
//       tweep[doWhat] = value;
//     }
//   }
// };

// changeTweep('@fzero','like', true);
// changeTweep('@fzero','like', false);
// changeTweep('@mozilla','useful', 'yes');
// changeTweep('@fzero','when',(new Date()));


// STAGE 3: certain things that our function above
// can not do, such as changing what was said.

// const changeTweep = function(nameOfTweep, doSomething) {
//   for (let tweep of tweeps) {
//     if (tweep.who === nameOfTweep) {
//       // console.log(doSomething, tweeps[i])
//       doSomething(tweep);
//     }
//   }
// };

const likeTweep = function(tweep) {
  // console.log('likeTweep', tweep)
  tweep.like = true;
};

// changeTweep('@fzero',likeTweep);

// changeTweep('@mozilla',tweep => {
//   tweep.when = (new Date());
// });

// changeTweep('@kevinroose', tweep => {
//   tweep.said = tweep.said.toUpperCase();
// });

// console.log(tweeps);

// STAGE N: We can always find refactorings to make things even
// more generic

const doToTweep = function(name, callback, ...params) {
  for (let tweep of tweeps) {
    let allNames = [tweep.who]
    if (tweep.alias) {
      allNames = [tweep.who, ...tweep.alias ]
    } 
    if (allNames.includes(name) ) {
      callback(tweep, ...params)
    }
  }
};

const addAlias = function(tweep, newAlias) {
  if (tweep.alias) {
    tweep.alias.push(newAlias)
  } else {
    tweep.alias = [ newAlias ]
  }
}

doToTweep('@mozilla', addAlias, '@theMoz')
doToTweep('@theMoz', likeTweep)

// I've created a function that does ONE thing very
// well, but at the same time is so generic that could
// be used to make ANY change across all my tweeps.
// That is the ultimate goal.

// Javascript provides a range of high order function like `map`
//
// tweeps.map(function(tweep) {
//   tweep.when = (new Date());
// });

// Going back to our very first function method;

// lhl.allNames = () => Object.values(lhl.mentors).map(mentor => mentor.name)

// console.log(lhl.allNames())


console.log(tweeps);
