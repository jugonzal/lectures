var theBest = ["@ThePracticalDev"];

console.log(theBest);

function addToArray(array, somethingToAdd) {
  array.push(somethingToAdd);
  return array;
}

theBest = addToArray(theBest, "@nytimesbits");
theBest = addToArray(theBest, "@lighthouse_labs");
theBest = addToArray(theBest, "@vancityDeadpool");
theBest = addToArray(theBest, "@patonOrange");
theBest = addToArray(theBest, "@justInTrudeau");
theBest = addToArray(theBest, "@realDonaldito");

console.log(theBest);

function sortInAscending (a, b) {
  return (a > b);
}

function sortInDescending (a, b) {
  return (a < b);
}

function sortArray(array, howToSortTheseThings) {
  do {
    var swapped = false;
    for (i=0; i< array.length-1 ; i++) {
      if (howToSortTheseThings(array[i], array[i+1])) {
        var temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}

// console.log(sortInAscending(6,2));
console.log(sortArray([4,7,2,3,9,1], sortInAscending));

console.log(sortArray([4,7,2,3,9,1], sortInDescending));

console.log(sortArray(theBest, function(a, b) { 
  return (a[1] > b[1]);
} ))

