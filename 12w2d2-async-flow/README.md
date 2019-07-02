# Asynchronous Control Flow

Hello all, I hope you enjoyed our tour through the weird corners of time, and no, I don't mean the 80s.  Today was all about understanding how some code can run in multiple timelines creating all kinds of weird effects and requiring special tricks to solve.

## Timers
Our first example used timers to discover the gotchas of asynchronous execution

```
console.log('one')
setTimeout(() => {
	console.log('two')
}, 1000);
console.log('three');
```

As simple as it looks it behaves in unexpected ways. From here we kept building up our knowledge of timers and tricks to write good functions that use them.  

## Control Flow
One of the more interesting lessons was the use of *callbacks* in order to allow flow of data out of an asynchronous function.

This led to a more complex code organization as a result of the two flows: now and then. 

- The role of callbacks
- Passing data back
- Chaining events

You can look at the code we wrote together in my [repo/12w2d2/spellnum.js](https://github.com/jugonzal/lectures/blob/master/12w2d2-async-flow/spellnum.js)

## Real life situations
The rest of the lecture was a fun detour through the early world of text adventure games, because in the end asynchronous behaviour is far more common than you would assume.  Waiting for players to make up their mind... anyone?

You can find our attempt at writing our own adventure game at [repo/12w2d2/readline.js](https://github.com/jugonzal/lectures/blob/master/12w2d2-async-flow/readline.js)

But I would highly suggest you play the real thing:

https://www.amc.com/shows/halt-and-catch-fire/exclusives/colossal-cave-adventure
