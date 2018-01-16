// This is a new program
// vote: figure out which music genre is most popular
// among students today.

// need some data to store answers to survey
// how about an array

var genres = ['hiphop','rockandroll','rockandroll','electronic','hiphop','80s','80s','electronic','80s','jazz','drumandbas','hiphop','randb','dance','hiphop','rap','rap','jazz','electronic']

// console.log(genres)

// we have two potential solutions
// X sort and count  XXX
// - loop and set a variable for each genre
//  create an empty object to track counts

var votes = {}
//  start loop from beginning to end of array

for (var g = 0; g < genres.length; g++) {
  // console.log(g, genres[g])
  //  do I have a variable for this particular genre
  // console.log("-> ",votes[genres[g]])
  if (votes[genres[g]]) {
  //    count up this genre
    // console.log("count up")
    votes[genres[g]] += 1
    // console.log("---> ",votes[genres[g]])
  //  if not
  } else {
  //    create that variable and set to 1
  //    do this in a way that is flexible
    votes[genres[g]] = 1
    // console.log("start count for ",genres[g])
  }
}

console.log(votes)