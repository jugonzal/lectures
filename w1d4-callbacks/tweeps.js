var tweeps = ["@waxy", "@fzero", "@mozilla"]

function consoleDisplay (array) {
  console.log("console.log ", array);  
}

function nicerDisplay (array) {
  console.log("nicer display");
  for (let i of array) {
    console.log("- ", i);
  }
}

consoleDisplay(tweeps);

tweeps.push("@wired");

nicerDisplay(tweeps);