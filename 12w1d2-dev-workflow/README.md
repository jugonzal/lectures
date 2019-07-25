# The Dev Workflow

Hello all, today was about learning some of the tricks of the trade, emphasizing the process that you should follow as a developer.

We talked about some simple tips to help you manage the work coming up, such as finding time to relax your brain from a complex problem by simply stepping away from your computer for a while.

## The Problem

Over the past little while I've been catching up on my coding challenges and found this one challenge that I thought would be a good problem for us to review together: [Advent of Code Day 1](https://adventofcode.com/2018/day/1)

When you read a complex set of requirements it is easy to get lost in the details, but our very first lesson was to _abstract_ some of the key issues and focus on them instead. When all was read and understood, this challenge was as simple as writing a function that would add a series of numbers. By then we had committed in our minds to use `arrays` for that purpose.

Still, there were a few functions that were needed to solve our problem that we had not used widely before, so we spent the first few minutes using the Node REPL to _play_. Such was the case of [string.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) and [array.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice).

```
node - +1, -2, +3, +1
```

Once we were very confident with the various elements needed to solve the solution, it was a lot easier to get going.  As a reminder we tackled this problem in a series of increasingly more sophisticated versions:

0. Convert our data to an ARRAY
1. Simple LOOP to add values
2. Use FUNCTIONS to process numbers correctly
3. Test using `console.log` and `node inspect`
4. Use ASSERTIONS to formalize tests
5. Clean up our code with ESLint
6. Refactor to take data as we should
7. Confirm tests

As usual you can find the full code we worked on in my github repo, under the [W1D2 project / arrays.js](https://github.com/jugonzal/lectures/blob/master/w1d2-dev-workflow/code/arrays.js)

### git

The git utility was written by Linus Torvalds to support development of the Linux kernel. It is a Version Control System (VCS) which allows us to keep track of changes to our projects and efficiently collaborate with others on the work.

In git, a file will always be in one of *four* possible states:

- **Un-tracked**: The file was created and exists on your machine, but git is pretty much ignoring its existence at the moment.
- **Staged**: You've used `git add` to include the file on the next commit. You can also say staged files are in the _commit index_ or _staging area_.
- **Committed**: a commit has been created with the `add`ed files; this file is now actively under version control. Note that the file **hasn't been sent to Github (or other remote repository) yet!** It's committed only to your _local repository_. You can create as many commits as you want before pushing, and each commit is a point in time to where you can return and change things.
- **Pushed**: the file has been sent to the remote repository, also known as _upstream_.

[There's a pretty good interactive git cheatsheet here](http://www.ndpsoftware.com/git-cheatsheet.html), and another one ready for printing [here](https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf).

During our lecture we followed a very consistent git workflow:

* `git clone` or `git init` to begin with

* `git status` to check what is going on

* `git add` to stage our changes

* `git commit` to put all staged files under version control

* `git push` to move all our commits to the remote repo

## Debugging

We talked about using `console.log()` as a way to figure out what is going on inside your code for those cases when things don't appear to be working as you expect. 

I also introduced the *debugger*, a special mode in which you can follow the execution of your code. Invoke it by running [`node inspect`](https://nodejs.org/api/debugger.html).

And while you can run the entire debugger in your command line, there is a way to use your browser to get a _fancy_ debugging tool by following these 2 steps: 

In your terminal

``` 
$ node --inspect-brk=0.0.0.0:9229 arrays.js

Debugger listening on ws://127.0.0.1:9229/87bdfe7e-a44c-4545-9808-b6c7f1458561

```

Once you get confirmation of the debugger listening, go to your Chrome and type `chrome://inspect`

You should see a special chrome page that among other things is listing the *current debug sessions available*. You'll find them with a green icon. Click on the _inspect_ link right besides to activate your session.

## Bonus: PythonTutor

PythonTutor is a nice tool to visualize how our code runs. Despite the name, it can analyze several languages including Javascript. You can try visualizing the code we wrote:

[PythonTutor visualization](http://pythontutor.com/javascript.html#mode=edit)

You'll find a series of buttons at the bottom of the page to navigate the execution of the code *one step at a time*.