// learning about setTimeout

// setTimeout(function() {
//   console.log('three')
// }, 3000);

// setTimeout(function() {
//   console.log('two')
// }, 2000);

// console.log('one')

// function alsoRemindMe() {

// }

let importantMeeting = "LHL"
let justFinished = null

// let jugglingBalls = 0

// const reminder = function(callback, delay) {
//   setTimeout(() => {
//     justFinished += callback() + ' '
//     jugglingBalls--
//     if (!jugglingBalls) {
//       console.log("Day's log: ", justFinished)
//     }
//   }, delay*1000)
//   jugglingBalls++
// }

const reminder = function(callback, delay, next) {
  setTimeout(() => {
    justFinished = justFinished + callback() + ' '
    if (next) {
      next(justFinished)
    }
  }, delay*1000)
}


reminder(() => { 
  console.log('wake up')
  return "woken up"
}, 2)

reminder(() => {
  console.log('have breakfast')
  return "had a good breakfast"
} , 3)

reminder(() => {
    console.log('working at ', importantMeeting) 
    return "went to work"
  }, 
  5, 
  (daysLog) => reminder(() => {
    console.log('go to bed')
    return "went to bed"
  }, 2 ))

importantMeeting = "My other gig"

