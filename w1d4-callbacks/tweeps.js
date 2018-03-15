var tweeps = [
  { handle: '@fzero', said: 'Do I have to wake up early?'},
  { handle: '@mozilla', said: 'Fight for your Internet freedom'},
  { handle: '@wired', said: 'AI will scam your bitcoins'}
  ];

tweeps.push({ handle: '@olympics', said: 'Everyone is a winner'});

tweeps[0].said = 'That would be my first try';


// function likeTweep (aHandle) {
//   for (i = 0; i < tweeps.length; i++) {
//     if (tweeps[i].handle == aHandle) {
//       tweeps[i].like = true;
//       return;
//     }
//   }
// }

// var liking = likeTweep
// likeTweep ('@wired')
// tweeps.push(likeTweep)
// tweeps[4]('@mozilla')
// liking('@mozilla')

// function modifyTweep (aHandle, field) {
//   for (i = 0; i < tweeps.length; i++) {
//     if (tweeps[i].handle == aHandle) {
//       tweeps[i][field] = true;
//       return;
//     }
//   }
// }

// function allCapsTweep (aHandle) {
//   for (i = 0; i < tweeps.length; i++) {
//     if (tweeps[i].handle == aHandle) {
//       // tweeps[i][field] = true;
//       tweeps[i].said = tweeps[i].said.toUpperCase()
//       return;
//     }
//   }  
// }

var doToTweep = {
  allCaps: function allCapsOneTweep (tweep) {
    tweep.said = tweep.said.toUpperCase()
  },
  like: function  (tweep) {
    tweep.like = true
  },
  follow: function  (tweep) {
   if (tweep.followers) {
      tweep.followers ++;
    } else {
      tweep.followers = 1;
    }
  }
}

function updateTweep (aHandle, doSomething) {
  for (i = 0; i < tweeps.length; i++) {
    if (tweeps[i].handle == aHandle) {
      doSomething(tweeps[i])
    }
  }  
}

updateTweep('@fzero', doToTweep.follow);
updateTweep('@mozilla', doToTweep.like);
updateTweep('@wired', function (tweep) {
  tweep.smack = true;
});
// allCapsTweep ('@fzero');
updateTweep ('@fzero', doToTweep.allCaps)
updateTweep ('@mozilla', doToTweep.like)
updateTweep ('@wired', doToTweep.follow)
updateTweep ('@wired', doToTweep.follow)
updateTweep ('@olympics', doToTweep.follow)

console.log("My Tweeps: ", tweeps);

