/* helpers
 *   in most functional languages, methods that work with objects return new objects (instead of modifying the original)
 *   the methods below create new copies of objects
 *     however, they are inefficient b/c they use up new more and more every time
 *     functional languages are smart about how they create new objects, sharing memory with old ones
 *     in JS, you can have immutable data structures with the help of libraries, ex.:
 *       https://github.com/swannodette/mori
 *       https://github.com/facebook/immutable-js */

/* given an object, returns a new object with newVals merged in */
function set(object, newVals) {
  return Object.assign({}, object, newVals);
  // return {...object, newVals}
}

/* given a list, returns a new list with newVal added to end */
function conj(array, newVal) {
  let a = Object.assign([], array)
  a.push(newVal);
  return a;
}

/* this fn allows us to chain functions of functions, but write it in reverse
 *   see examples at bottom */
function thread(init, ...args) {
  let v = init;
  for(exp of args) {
    v = exp[0].apply(null, [v].concat(exp.slice(1)))
  }
  return v;
}

module.exports = {
  set:set, 
  conj:conj, 
  thread:thread
}
