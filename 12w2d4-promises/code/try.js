
function doit(task) {
  if (task) {
    task.something()
  } else {
    throw 'Fail! Forgot to give me a task'
  }
}

try {
  doit()
} catch(error) {
  console.log('Plan B: Dont do it\n', error)
}

console.log('pfew... that was a close one')