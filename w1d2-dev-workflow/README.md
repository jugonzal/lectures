# The Dev Workflow

Hello all, today was about learning some of the tricks of the trade, emphasizing the process that you should follow as a developer.

We used the "Rally Racing" as an analogy for Pair-programming and I hope that helps you take better advantage of yours pairs this morning.

## The Problem

Over the past month I've been catching up on my coding challenges and found this one challenge that I thought would be a good problem of us to review together: [Advent of Code Day 1](https://adventofcode.com/2018/day/1)

When you read a complex set of requirements it is easy to get lost in the details, but our very first lesson was to _abstract_ some of the key issues and focus on them instead. When all was read and understood, this challenge was as simple as writing a function that would add a series of numbers. By then we had committed in our minds to use `arrays` for that purpose.

Still, there were a few functions that were needed to solve our problem that we had not used widely before, so we spent the first few minutes using the Node REPL to _play_. Such was the case of [string.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split).

As usual you can find the full code we worked on in my github repo, under the [W1D2 project / arrays.js](https://github.com/jugonzal/lectures/blob/master/w1d2-dev-workflow/code/arrays.js)

## Debugging

I also introduced the *debugger*, a special mode in which you can follow the execution of your code. Invoke it by running [`node debug`](https://nodejs.org/api/debugger.html).

The more _fancy_ debugging tool is invoked by following these 2 steps: 

In your terminal
``` 
$ node --inspect-brk arrays.js

Debugger listening on ws://127.0.0.1:9229/87bdfe7e-a44c-4545-9808-b6c7f1458561

```
Once you get confirmation of the debugger listening, go to your Chrome and type `chrome://inspect`

You should see a special chrome page that among other things is listing the *current debug sessions available*. You'll find them with a green icon. Click on the _inspect_ link right besides to activate your session.

## Bonus: PythonTutor

PythonTutor is a nice tool to visualize how our code runs. Despite the name, it can analyze several languages including Javascript. You can try visualizing the code we wrote:

[PythonTutor visualization](https://goo.gl/iQddAZ)

You'll find a series of buttons at the bottom of the page to navigate the execution of the code *one step at a time*.