// This is the code...

function calcJoinedFingers (f) {
  return f - 5;
}

function calcRoamingFingers (f) {
  return 10 - f;
}

//1. Let's say I want to multiply two numbers (single digits) from 6-10
// we should probably get them from command line

var left = process.argv[2];
var right = process.argv[3];

console.log('Left: ', left);
console.log('Right: ', right);

// 2. I use my fingers to represent each number in one hand...  with following mapping:
//   thumb - 6
//   index - 7
//   middle - 8
//   ringer - 9
//   pinky - 10

var leftJoinedFingers = calcJoinedFingers(left);
var rightJoinedFingers = calcJoinedFingers(right);
var leftRoamingFingers = calcRoamingFingers(left);
var rightRoamingFingers = calcRoamingFingers(right);

console.log('Left Hand: joined - roaming ', leftJoinedFingers, leftRoamingFingers);
console.log('Right Hand: joined - roaming ', rightJoinedFingers, rightRoamingFingers);
  
// 3. Join all the fingers that represent the 2 numbers being multiplied
var joinedFingers = (calcJoinedFingers(left) + calcJoinedFingers(right)) * 10;

// 4. Then count how many fingers there are joined....    X 10
// joinedFingers *= 10;
// joinedFingers = joinedFingers * 10;

console.log('Joined: ', joinedFingers);
// 5. Lastly count roaming fingers from left hand and multiply by roaming fingers in right hand.

var roamingFingers = calcRoamingFingers(left) * calcRoamingFingers(right);
console.log('Roaming: ', roamingFingers);

// 6. Final step: add step #4 with step #5

console.log('Final: ', joinedFingers + roamingFingers);
console.log('Proof: ', left * right)

