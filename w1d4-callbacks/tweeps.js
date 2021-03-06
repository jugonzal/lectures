var tweeps = [
  { who: '@fzero', 
    said: "Callbacks are control flow as designed by M.C. Escher."},
  { who: '@kevinroose',
    said: "The solution to Bad Facebook is always More Facebook"},
  { who: '@0xUID',
    said: "Macintosh OS X was beautiful, intuitive and user-friendly......and it was #UNIX!"},
  { who: '@mozilla',
    said: "Today, Mozilla is publishing the 2019 #InternetHealth Report"}
]

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

// function likeTweep (nameOfTweep) {
//   for (i=0; i< tweeps.length; i++) {
//     if (tweeps[i].who === nameOfTweep) {
//       tweeps[i].like = true;
//     }
//   }
// }

// function timestamp () {
//   for (i=0; i< tweeps.length; i++) {
//     tweeps[i].when = (new Date()).toString();
//   }
// }


// console.log(typeof likeTweep);

// var reallyLikeTweep = likeTweep;

// reallyLikeTweep('@fzero');
// timestamp();


  // STAGE 2: finding ways to create generic functions, 
  // using bracket notation

// function changeTweep (nameOfTweep, doWhat, value) {
//   for (i=0; i< tweeps.length; i++) {
//     if (tweeps[i].who === nameOfTweep) {
//       tweeps[i][doWhat] = value;
//     }
//   }
// }

// changeTweep('@fzero','like', true);
// changeTweep('@fzero','like', false);
// changeTweep('@mozilla','useful', 'yes');
// changeTweep('@fzero','when',(new Date()))



  // STAGE 3: certain things that our function above 
  // can not do, such as changing what was said. 

function changeTweep (nameOfTweep, doSomething) {
  for (i=0; i< tweeps.length; i++) {
    if (tweeps[i].who === nameOfTweep) {
      console.log(doSomething, tweeps[i])
      doSomething(tweeps[i])
    }
  }
}

function likeTweep(tweep) {
  // console.log('likeTweep', tweep)
  tweep.like = true;
}

changeTweep('@fzero',likeTweep);

changeTweep('@mozilla',function(tweep) {
  tweep.when = (new Date());
})

changeTweep('@kevinroose', function(tweep) {
  tweep.said = tweep.said.toUpperCase();
})

console.log(tweeps);

// changeTweep('@fzero','like', false);
// changeTweep('@fzero','when',(new Date()))


  // I've created a function that does ONE thing very
  // well, but at the same time is so generic that could
  // be used to make ANY change across all my tweeps.
  // That is the ultimate goal.

// Javascript provides a range of high order function like `map`
//
tweeps.map(function(tweep) {
  tweep.when = (new Date())
})

console.log(tweeps);
