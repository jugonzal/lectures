var tweeps = ['@nytimes','@lighthouselabs','@wired'];
tweeps.push ('@globalculture');
tweeps.push ('@starwars');

function padding(str) {
  var numberOfSpaces = 15 - str.length;
  return ' '.repeat(numberOfSpaces);
}

// var displayStrategies = {
//   nice: function (things) {
//     for (var oneThing of things) {
//       console.log("- ", oneThing);
//     }
//   },
//   raw: function (things) {
//     for (var oneThing of things) {
//       console.log(oneThing);
//     }
//   },
//   pretty: function (things) {
//     for (var oneThing of things) {
//       console.log("-> ", oneThing,padding(oneThing)," <-");
//     }

//   }

// }

function display(things, displayStrategy) {
  for (var oneThing of things) {
    displayStrategy(oneThing);
  }  
}

var displayStrategies = {
  nice: function (thing) {
    console.log("- ", thing);
  },
  raw: function (thing) {
    console.log(thing);
  },
  pretty: function (thing) {
    console.log("-> ", thing,padding(thing)," <-");
  }

}

display(tweeps, displayStrategies.pretty);

display(tweeps, function (oneThing) {
  console.log('**',oneThing,'**');
})


