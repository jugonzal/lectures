// read a password from the command line
// check if it is long
// combination of numbers and letters
// not '123456' or 'password'
// try to add symbols
// upper and lower case
// minimum length

// only needed for testing
// var something0= process.argv[0];
// var something1 = process.argv[1];

var password = process.argv[2];

// console.log(something0,something1, password);

if (password.length > 6) {
  console.log("OK. Password is long enough")
}

var yesNumbers = false;
var yesLetters = false;
var allNumbers = "0123456789";
var allLetters = "qwertyuiopasdfghjklzxcvbnm"
for (var i=0; i< password.length; i++) {
  if (allNumbers.includes(password[i])) {
    yesNumbers = true;
  }
  if (allLetters.includes(password[i])) {
    yesLetters = true;
  }
}
if (yesNumbers && yesLetters) {
  console.log("OK. Password has good combination of letters and numbers");
} else if (yesNumbers) {
  console.log("NOT OK. Only numbers")
} else if (yesLetters) {
  console.log("NOT OK. Only letters")
}

if (password === "123456" || password === "password") {
  console.log ("NOT OK.  I know your password")
}

var yesSymbols = false;
var allSymbols = "!@#$%^&*()_+=-[]{}";
for (var i=0; i< password.length; i++) {
  if (allSymbols.includes(password[i])) {
    yesSymbols = true;
  }
}

if (yesSymbols) {
  console.log("OK.  Good symbols")
} else {
  console.log("NOT OK.  Forgot to add symbols")
}
