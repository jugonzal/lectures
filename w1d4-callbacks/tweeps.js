var tweeps = ['@mozilla','@wired','@fzero']

var faces = {
  smiley: function () {
    return ' :) '
  },
  sadley: function () {
    return ' :( '
  },
  winky: function () {
    return ' ;) '
  }
}

// function addSmiley (aTweep) {
//   return (aTweep + ' :) ');
// }

// function addSadley (aTweep) {
//   return (aTweep + ' :( ');
// }

function addFaces (myArray, whichFace) {
  for (i = 0; i< myArray.length; i++) {
    console.log(myArray[i] + whichFace());
    // console.log(addSadley(tweeps[i]));
  }
}

// var todaysMood = 'sadley'

addFaces(tweeps, function() {
  return ' 8)\n '
})

console.log('Faces ', faces);






