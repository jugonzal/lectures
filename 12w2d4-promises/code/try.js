
function doit(task) {
  if (!task) {
    throw "Forgot to give me a task!"
  } else {
    task.something()
  }
  console.log('just did something')
}

try {
  console.log("about to start...")
  doit()
  console.log("seems to have done it...")
} catch(error) {
  console.log("was not expecting that ", error)
}
