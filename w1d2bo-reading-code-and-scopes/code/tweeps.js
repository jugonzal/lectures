var moreTweeps = function (aTweep, allTweeps) {
  // console.log("inside, just starting: ",myTweeps)
  // myTweeps = '@mozilla'
  var extraTweep = '@lighthouselabs'
  console.log("inside function: ",aTweep)
  allTweeps.push(aTweep)
  allTweeps.push(extraTweep)
  return allTweeps 
}

var addTweeps = moreTweeps

var myTweeps = ['@fzero']

console.log("before: ",myTweeps)

myTweeps = addTweeps('@wired',addTweeps('@mozilla', myTweeps))

console.log("after: ",myTweeps)

