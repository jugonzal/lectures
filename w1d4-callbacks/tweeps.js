var tweeps = ['@mozilla','@wired','@fzero']

// console.log(tweeps)

tweeps.push('@nasa')

// this function will assign the rating to the
// element.
// for example: if rating is 5 ->  *****
function starRating(rating) {
  if (rating >= 4) {
    return(' *****')
  } else if (rating > 2) {
    return(' ***')
  } else {
    return(' *')
  }
}

function faceRating(rating) {
  if (rating >= 4) {
    return(' ;-)')
  } else if (rating > 2) {
    return(' :-|')
  } else {
    return(' :-(')
  }  
}


// var starRating = {
//   'bad': function() { return '*' },
//   'meh': function() { return '***' },
//   'good': function() { return '*****' }
// }

// var fakeFunction = `function() { return '*' }`


// var someFunction = function(element) {
//   console.log(element)
// }

// console.log(fakeFunction)
// console.log(someFunction)
var newestRating = starRating
// console.log(newestRate)

// console.log(fakeFunction())
// console.log(someFunction('real thing'))


// tweeps.push(someFunction)

// console.log('where is the function: ', tweeps)

function showRatings(data,ratings,how) {
  for (i = 0; i< data.length; i++) {
    console.log('- ',data[i],how(ratings[i]))
  }
}

showRatings(tweeps,[3,4,2,5], function(theRating) {
  return 'yay! you got '+theRating+' high fives'
})



