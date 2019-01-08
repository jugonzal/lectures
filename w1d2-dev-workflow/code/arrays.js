
// Talk about some big problem
// read specs / requirements
// try to come up with a solution... together

// code the solution

// a function that takes arrays

function addArray(myArray, start) {
  // make sure it is an array
  if (!Array.isArray(myArray)) {
    return false
  }

  // dont assume the initial freq is zero... it could be some other number
  if (!start) {
    start = 0
  }
  
  // iterate through all elements of the array
  for (var i=0; i < myArray.length; i++) {

    // calculates the sum of all changes/freq
    start += Number(myArray[i])
  }

  return start
}


//  what if it is not ?  convert ?
  // maybe it is a long string
  // str.split(', ')
  // maybe it is a file


// test the solution

console.log("wrong input: ",addArray("wrong input"))
console.log("pass an array: ", addArray([1,2,3]))
console.log("array with start: ", addArray([2,3,4], 5))
console.log("array of strings (3): ", addArray(['+1','-2','+3','+1']))

var data = `-19
+2
+18
+14
-3
-16
+18
-16
-7
-11
-3
+11
+18`

console.log("full dataset: ", addArray(data.split('\n')))




