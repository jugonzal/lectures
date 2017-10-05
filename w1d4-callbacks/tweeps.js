var tweeps = ['@mozilla', '@fzero', '@wired']

// function displayTweeps (tweeps) {
//   for (var i=0; i< tweeps.length; i++) {
//     console.log("- ",tweeps[i]);
//   }
// }

// var displayTweeps = function (tweeps) {
//   for (var i=0; i< tweeps.length; i++) {
//     console.log("- ",tweeps[i]);
//   }
// } 

// var nicePrintTweeps = function (tweeps) {
//   for (var i=0; i< tweeps.length; i++) {
//     console.log("* ",tweeps[i]);
//   }
// } 

var displayTweeps = function (tweeps, pleaseDo, extra) {
  for (var i=0; i< tweeps.length; i++) {
    pleaseDo(tweeps[i], extra);
  }
} 

displayTweeps(tweeps,function(elem, ext) {
  console.log(ext+elem)
},"### ")

// function displayWithDash (tweep) {
//   console.log("- ",tweep);
// }

// function displayWithStar (tweep) {
//   console.log("* ",tweep);
// }


// var showMyTweeps = displayTweeps
// tweeps.push(displayTweeps)

var display = {
  // showThings: displayTweeps,
  // niceThings: nicePrintTweeps,
  // showFirst: function (tweeps) {
  //   console.log(tweeps[0]);
  // },
  withDash: function (tweep) {
    return "- "+tweep;
  },
  withStar: function (tweep) {
    return "* "+tweep;
  },
  withSmiley: function (tweep) {
    return "- "+tweep+" :-)";
  }
}

// console.log(thingsToDo)

// tweeps[3](tweeps)

// tweeps.forEach(display.withDash)
// thingsToDo.showFirst(tweeps)

tweeps.forEach(function(element) {
  console.log(display.withSmiley(element))
})


