var tweeps = [
  {who: '@mozilla', what:'all your data belongs to us'},
  {who: '@wired', what:'the AI will scam your bitcoins'},
  {
    who: '@fzero',
    what: 'I love cats'
  }
];


tweeps.push({who:'@creativecommons', what:'CC0'})

// STAGE 0: making changes step by step directly in the array
// tweeps[2].fav = true;
// tweeps[1].likes = 99;

// console.log(tweeps)

// console.log(tweeps[2].what)
// console.log(tweeps[3]['who'])


// STAGE 1: writing big functions to do one thing
// function likeTweep(tweep) {
//   for (var i=0; i< tweeps.length; i++) {
//     if(tweeps[i].who == tweep) {
//       if (tweeps[i].like) {
//         tweeps[i].like += 1
//       } else {
//         tweeps[i].like = 1
//       }
//     }
//   }
// }

// function flagTweep(tweep) {
//   for (var i=0; i< tweeps.length; i++) {
//     if(tweeps[i].who == tweep) {
//       if (tweeps[i].flag) {
//         tweeps[i].flag += 1
//       } else {
//         tweeps[i].flag = 1
//       }
//     }
//   }
// }

// STAGE 2: finding ways to create generic functions
// function changeTweep(tweep, action) {
//   for (var i=0; i< tweeps.length; i++) {
//     if(tweeps[i].who == tweep) {
//       if (tweeps[i][action]) {
//         tweeps[i][action] += 1
//       } else {
//         tweeps[i][action] = 1
//       }
//     }
//   }
// }

// function ALLCAPSTweep(tweep) {
//   for (var i=0; i< tweeps.length; i++) {
//     if(tweeps[i].who == tweep) {
//       tweeps[i].what = tweeps[i].what.toUpperCase();
//     }
//   }
// }

// STAGE 3: CALLBACKS!!!!

function toAllCaps(oneTweep) {
  oneTweep.what = oneTweep.what.toUpperCase();
}
 //             {who...  what...}
function likeIt(oneTweep) {
  if (oneTweep.like) {
    oneTweep.like += 1
  } else {
    oneTweep.like = 1
  }
}

function show(oneTweep) {
  console.log(oneTweep)
}

function flagIt(oneTweep) {
  if (oneTweep.flag) {
    oneTweep.flag += 1
  } else {
    oneTweep.flag = 1
  }
}

//               @fzero   likeIt
function findAnd(tweep, doSomething) {
  for (var i=0; i< tweeps.length; i++) {
    if(tweeps[i].who == tweep) {
      doSomething(tweeps[i])
    }
  }
}

// likeTweep('@fzero');
// likeTweep('@fzero');
// likeTweep('@fzero');
// likeTweep('@mozilla');
// flagTweep('@wired');

// changeTweep('@fzero', 'like');
// changeTweep('@fzero', 'like');
// changeTweep('@fzero', 'like');
// changeTweep('@mozilla', 'like');
// changeTweep('@wired', 'flag');
// changeTweep('@creativecommons', 'followers');
// ALLCAPSTweep('@mozilla');

findAnd('@fzero', likeIt)
findAnd('@wired', flagIt)
findAnd('@mozilla',toAllCaps)
findAnd('@fzero', show)

// console.log(tweeps);
