var tweeps = [
  {twitter: '@fzero', name: 'Fabio'},
  {twitter: '@mozilla'},
  {twitter: '@wired'}
  ]

var t = 'Some very important information'

function visitTweeps (tweeps, howToVisitOneTweep) {

  // var visitOneTweep = function (tweep) {
  //   //console.log(tweep.twitter)
  //   return (tweep.twitter + '!!')
  // }

  var allTweeps = []

  for (var t=0; t<tweeps.length; t++) {
    allTweeps.push(howToVisitOneTweep(tweeps[t]))
  }

  return allTweeps
}

var waysToVisit = {
  visitOneTweep: function (tweep) {
    //console.log(tweep.twitter)
    return (tweep.twitter + '!!')
  },
  visitAnotherTweep: function (tweep) {
    //console.log(tweep.twitter)
    return ("@"+ tweep.name)
  }
}

console.log(visitTweeps(tweeps, waysToVisit.visitOneTweep))

// console.log(visitTweeps(tweeps, function(tweep) {
//   return ("-> "+ tweep.twitter + ".")
// }))

visitTweeps(tweeps, function(tweep) {
  console.log ("-> "+ tweep.twitter + ".")
})

console.log('What is t ',t)