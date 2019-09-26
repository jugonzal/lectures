
function doit(task) {
  if (task && task.something) {
    task.something()
  } else {
    throw "Nothing was done Error"
  }
}

try {
  let dontforget = "I won't"
  doit(dontforget)
} catch(error) {
  console.log('pfew... close one', error)

}

console.log('ktxby')