
function doit(task) {
  if (task) {
    task.something()
  } else {
    throw "you didn't give me a task"
  }
}

try {
  doit()
} catch(error) {
  console.log("Something else went wrong:", error)
}

console.log('ktxby')