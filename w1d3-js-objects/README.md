# Javascript Objects (and other data types)

Hi all, if you are just looking for the code we wrote
during class, you can find it in my [lectures repo/W1D3](https://github.com/jugonzal/lectures/blob/master/w1d3-js-objects/code.js)

## Primitive data types

We know these guys already:

* String - `"Hello"`, `"banana"`, `'apple'`, `"This sentence is false."`
* Number - `1`, `378643`, `2e5`, `0xFF`
* Boolean - `true`, `false`
  * There are many other _falsey_ values: `undefined`, `null`, `NaN`, the number `0` and empty strings.
  * Everything else will evaluate to `true` inside an `if` statement.
* Array - `[1000, "This sentence isn't true", [4, 5, 6], "wat?"]`
  * ...but `typeof` will say it's an `object`
* How do I find the type of something?
  * `typeof(...)`

## Objects

Objects are first and foremost key-value pairs. Differently from Arrays, you use keys (which are _always strings_) to get data in an out. The values can be of **any type** - including arrays, other objects and functions (more on this below).

```javascript
var job = {
  company : 'Lighthouse Labs', 
  started : 'January 2017',
  courses : [{
    name: 'web'
  },{
    name: 'blockchain'
  }]
}
```

I can access the data in an object in two ways: _dot notation_:

```
job.role = 'Web Instructor';
```

or _bracket notation_:

```
job.friends.push('Diego');
job['friends'].push('Tim');
```

NOTE: Even if you try to use different data types as keys, they will be converted to strings automatically, so it's a good idea to only use strings in the first place.

We talked about how objects are passed _by reference_ to functions.  This means when you modify an object inside a function you are *actually* modifying the original object.

```javascript
function newFriend (gig, friend) {
  gig.friends.push(friend)
}

newFriend(job, 'Dave')
```

And from here we rewrote that function to be a bit more elegant by using the `this` keyword:

```javascript
// declaring a function
function addFriend (friend) {
  this.friends.push(friend)
}

// adding the function TO the object
job.add = addFriend 

// running the function WITHIN the object
job.add('all of you')
```

### What is `this`?

The `this` keyword can be a tricky concept to understand in Javascript. The simplest explanation is:

> `this` is whatever called the function.

In other words:
```js
var redcircle = {
  color: 'red',
  shape: 'circle'
}

var bluesquare = {
  color: 'blue',
  shape: 'square'
}

var describe = function() {
  console.log(`I'm a ${this.color} ${this.shape}.`);
}

// Attaching describe() to both shapes:
redcircle.describe = describe;
bluesquare.describe = describe;

redcircle.describe();
//=> I'm a red circle.
bluesquare.describe();
//=> I'm a blue square.
```

Note how `this` takes the value of the **caller object** (whatever is before the dot: `redcircle` and `bluesquare` in the example above).

The tricky part is `this` **changes for every function call**. This can get particularly complex when you're dealing with nested functions.
