# Modules, packages and testing

HT to Fabio for [the original version of this README](https://github.com/fzero/lhl-lectures/blob/master/w1d5-modules-testing/README.md)

## Just want the `Family` code?

Take a look inside [`/family`](https://github.com/jugonzal/lhl-lectures/tree/master/w1d5-modules-testing/family) for the complete example including modules, packages and tests.

## Writing better code

I started the lecture today by writing what seemed like a perfectly good function:

```javascript
function greatestGeneration() {
  var greatest = []
  for (person of ancestry) {
    if (person.born >= 1900 && person.born < 1930) {
      if (person.sex === 'm') {
        greatest.push(person)
      }
    }
  }
  return greatest
}
```

While we were quite happy with the version and we found it useful, we talked about the fact that it made a reference to `ancestry`, which becomes a dependency and in general it decreases the quality of code.  We talked about perhaps passing the data as a parameter as a potential mitigation strategy.

From here we found a better way of packaging the function *with* the data:

```javascript

function greatestGeneration() {
  var greatest = []
  for (person of this.ancestry) {   
    if (person.born >= 1900 && person.born < 1930) {
      if (person.sex === 'm') {
        greatest.push(person)
      }
    }
  }
  return greatest
}

var bundle = {
  ancestry: ancestry,
  greatest: greatestGeneration
}

console.log(bundle.greatest())
```

With this approach, both the function *and* the data are bundled together into an object making that dependency explicit.  Notice how when we invoke the function, it is assumed that the function will act on *its own data*.  

Of course, all of this was just a preamble to show you what the ideal version of the code should look like:

```javascript
function isGreatestGeneration (person) {
  return person.born >= 1900 && person.born < 1930
}

function isMale(person) {
  return person.sex === 'm'
}

console.log(ancestry
  .filter(isMale)
  .filter(isGreatestGeneration)
  )
```

The function `filter` is built into *every* array, making it the ideal way to solve our problem without writing too much code.  Notice how elegant the final version is, acting on the array itself, sending the data through as many stages of filtering as needed by chaining those calls, using callbacks where each individual callback is a very simple function that does ONE thing alone.

The rest of the lecture we learned how to create a proper set of tests for our new functions, organizing them into a module that can be imported (`require()`) into others.

## About Modules

Until this point we've been working with very simple and short programs, but that will change very soon. To avoid unnecessary complications, we'll need a way to divide our apps into different files in a logical way. That's what **modules** are for.

You can also create modules in a way that can be reused in different apps. These are called **packages**.

Node has thousands of packages providing ready-made modules for all kinds of purposes, which will save you **years** (literally!) of development hours. There are packages to do virtually anything!

## Before anything: `npm`

Node.js comes with a package manager / task runner called [npm](https://www.npmjs.com/). It uses a JSON file called `package.json` to describe your project and all packages necessary for it to work. [npm has extensive documentation](https://docs.npmjs.com/), but here's a quick cheatsheet:

* `npm init`
    * Creates a `package.json` file for your project by asking a few simple questions. **You should always start your project with this.**
* `npm install --save <package>`
    * Installs a package and adds it to your `package.json` file. On Node 8+ this is implied.
* `npm install --save-dev <package>`
    * Same thing, but install the package as a development dependency on `package.json`. Use this for linters, testers, compilers, builders and anything else that won't be needed for the app to run in production, but will be useful during development.
* `npm install -g <package>`
    * Installs a package globally and makes command-line utilities available.
    * Example: `npm install -g express-generator` and then you can use the `express` command from the terminal to start new [Express.js](http://expressjs.com) projects.
    * **NOTE:** If you want to run a command-line tool from a package installed inside `node_modules` with `--save`/`--save-dev`, use `npx <your command here>`
      - Example: `npm install --save-dev mocha`, then `npx mocha`
* `npm install` in a folder with a `package.json` file
   * Installs all project dependencies. Node 8+ will also create a `package-lock.json` file containing a list of dependencies and versions.

### Notes about `package.json`

There are some things `npm init` won't do for you that you should probably do manually. The `scripts` section contains terminal commands commonly used with your project. Of those, the two most common are `test` and `start`.

* `test` is created automatically by `npm init` and it's automatically assigned to a placeholder. Once you have tests (see below!), you should substitute it with the command you'll use to run the tests (e.g.: `mocha`).
* `start` is NOT created automatically, but it's very useful. It should contain the terminal command used to start the project (e.g. `node index.js`). With this in place, you can start your project by typing `npm start` on the terminal.

Here's a complete `package.json` example:
```json
{
  "name": "w1d5",
  "version": "1.0.0",
  "description": "LHL - Automated testing example",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "mocha"
  },
  "author": "Fabio Neves",
  "license": "ISC",
  "devDependencies": {
    "chai": "^3.5.0",
    "mocha": "^3.2.0"
  },
  "dependencies": {
    "request": "^2.79.0"
  }
}
```

## Creating a module

A module is a normal JS file that **exports functions and values to be used in other files**. Example:
```js
function sayHello(name) {
  console.log("HELLO " + name.toUpperCase() + "!");
}

function sayHi(name) {
  console.log("Hi " + name + ".");
}

// Use the `module.exports` object to indicate which functions and values will
// be available when the module is required. You can have functions that are
// used inside the module but aren't exported (private).
// You can assign anything to module.exports, but usually this will either be
// an object or a function that returns an object.
module.exports = {
  sayHello: sayHello,
  sayHi: sayHi
}
```

`module.exports` expects an object, but you can also export values and functions individually using `exports.key = value`. The following `exports` example is equivalent to the one above:

```js
exports.sayHello = sayHello;
exports.sayHi = sayHi;
```

[This article](https://www.sitepoint.com/understanding-module-exports-exports-node-js/) expands on the subject a bit more.

### Using a module

Use `require` to load a module and store the exported objects inside a variable. Remember that functions are values in Javascrtipt!
```js
var hello = require('./module.js');

hello.sayHello("everybody");
//=> HELLO EVERYBODY!
```

### Libraries installed with `npm install` are modules too

When you run `npm install` in a project, it will look at `package.json` and install all dependencies in the `node_modules` folder. From then on you can load them with a regular `require` (no need to include the full path).
```sh
# Installs the request library (https://github.com/request/request)
# This will update the package.json file
$ npm install request --save
```
```js
// On your js file
var request = require('request');

// Gets google.com and counts the bytesize
request('http://www.google.com', function(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(`google.com is ${body.length / 1024} Kbytes long.`);
  }
});
```

**Note:** Be sure to add `node_modules` to your `.gitignore` file. It will be re-created every time you run `npm install`.

## Testing

Self-contained functions are very easy to test:

```js
// Our function
function squared(number) {
  return number * number;
}

// Test code
if (squared(4) === 16) {
  console.log("squared() is squaring things!");
}
else {
  console.log("squared() isn't squaring (either that or you broke math!).")
});
```

But we're writing a lot of custom code to achieve this, which isn't ideal. We looked at [Mocha](https://mochajs.org/) to make testing easier, and used it in conjunction with the built-in [assert](https://nodejs.org/api/assert.html) package. You can also require [Chai](http://chaijs.com), which provides [several different ways to match and verify return values](http://chaijs.com/api/bdd/).

Here's a Mocha test example that does the same as above:

```js
// You'll always need an assertion package - let's use assert
var assert = require('assert');

describe('squared', function() {
  it('should return 16 when the input value is 4', function() {
    assert.equal(16, squared(4));
  });
});
```

