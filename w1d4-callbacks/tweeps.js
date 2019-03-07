var tweeps = [
  { who: '@fzero', 
    said: "Callbacks are control flow as designed by M.C. Escher."},
  { who: '@kevinroose',
    said: "The solution to Bad Facebook is always More Facebook"},
  { who: '@0xUID',
    said: "Macintosh OS X was beautiful, intuitive and user-friendly......and it was #UNIX!"},
  { who: '@mozilla',
    said: "learn how to create your own VR experiences with A-Frame"}
]

// STAGE 0: Our first stage is to 
// manually change one tweep at a time

// tweeps[0].like = true;
// tweeps[2].like = true;
// tweeps[2]['like'] = true;

tweeps.push({who: '@private',said: 'I dont give it away'});

// STAGE 1: writing functions to do one thing
// Explore the various styles of functions: 
// declaration vs expression

// likeTweeps(0)
// likeTweeps(2)

function likeTweeps (index) {
  tweeps[index].like = true;
  return 5;
}

var bookmarkTweeps = function (index) {
  tweeps[index].bookmark = new Date();
}

// bookmarkTweeps(1)


// STAGE 2: finding ways to create generic functions, using bracket notation

// function changeTweeps (index, key, value) {
//   if (!value) {
//     tweeps[index][key] = true;
//   } else {
//     tweeps[index][key] = value;
//   }
// }

// changeTweeps(3,'flag')
// changeTweeps(3,'remind')
// changeTweeps(0,'ignored')
// changeTweeps(0,'like')
// changeTweeps(2,'like')
// changeTweeps(1,'bookmark',new Date())


// STAGE 3: certain things that our function above 
// can not do, such as changing what was said. Need CALLBACKS!!!!

function exclamations (index) {
  tweeps[index].said += '!!!!'
}

function changeTweeps (index, callback) {
  callback(index)
}

changeTweeps(1, exclamations)
changeTweeps(2, bookmarkTweeps)
changeTweeps(0, likeTweeps)

// as a final example of a very good function,
// consider the following:

function changeAllTweeps (callback) {
  for (t = 0; t< tweeps.length; t++) {
    callback(t)
  }
}

// I've created a function that does ONE thing very
// well, but at the same time is so generic that could
// be used to make ANY change across all my tweeps.
// That is the ultimate goal.

changeAllTweeps(function(index) {
  tweeps[index].said = tweeps[index].said.toUpperCase()
})

console.log(tweeps)



