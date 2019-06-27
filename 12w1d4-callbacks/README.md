Hi all, this morning we had a really good session writing good, useful functions.
In particular functions that helped me manage my Tweeps.  I like that we explored
many different challenges and solved them all with functions, always trying to 
write better code.

A few things we talked about:

- In *javascript*, functions are "first class citizens". For example we can put them in variables.
- To "run" a function you must call it with its parameters or empty `()` in any case.  Without them you are just referencing the function.
- When using function expressions, it does matter WHERE the function is first declared, as it can't be used before then.
- Variables declared within a function only exist within that function. Be mindful of functions that use variables without declaring as they may be stepping on existing variables unintentionally.
- We got to see *arrow functions* as a minimalistic way to declare them. As with many other things, right now they look weird but you get used to and will prefer them eventually.
- A function should do ONE thing and one thing alone.  This is why we decomposed many little actions into their own little functions.
- Perhaps the most important trick we learned was that a function can be passed as a parameter to another function. This is what we call a "callback"
- Overall we were looking for _better_ ways to write functions and what we discovered is that _general_ functions that do one thing really well are much more preferable. You'll soon read about *High Order* functions and discover a world of such functions.

You can find all of the code we wrote in [my github repo](https://github.com/jugonzal/lectures/blob/master/12w1d4-callbacks/tweeps.js)

