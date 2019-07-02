# Async Control Flow

## Timers
First example with timers to discover the gotchas of async execution

- Learn about `setTimeout`

```
console.log('one')
setTimeout(() => {
	console.log('two')
}, 1000);
console.log('three');

```

- Figure out how it behaves
- How does it affect our usual flow
	- global variables
	- `return`
	- timing 

## Control Flow
Two flows: now and then. Fix weird behaviour
- The role of callbacks
- Passing data back
- Chaining events

## Event Driven Programming
Adventure game with readline ?
Setup events for each

https://www.amc.com/shows/halt-and-catch-fire/exclusives/colossal-cave-adventure
