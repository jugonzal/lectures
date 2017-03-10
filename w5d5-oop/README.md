## Object Oriented Javascript

Hi all, today we reviewed a few more [Javascript ES6 features](http://es6-features.org/#ClassDefinition), in particular those related to `Class`. 

We realized that we've been using these features throughout the week as React is built on many of these concepts.  We use our knowledge of the structure of ChattyApp to understand the benefits of reusing software, which in the case of OOP is done mostly through inheritance.

We then looked at a typical problem and walked through a typical solution as we would write it using our current javascript knowledge in a "functional" style:  Here is the [Bank System in Javascript](https://github.com/jugonzal/lhl-lectures/blob/master/w5d5-oop/bank_functional.js).

After that we talked about the Object Oriented paradigm for writing software.  While this was not an exhaustive lecture about the methodology we learned a few steps to go from problem to implementation using this approach:
- Write down as much as we know about the domain of the problem.
- Identify nouns -> they *may* be classes
- Identify ways in which those classes are similar to each other
- Build up the structure of your system by planning how to reuse code
- Identify both data and behaviour inherent to each class by thinking about the lifecycle.
- Think about ways in which classes interact among them creating more complex behaviour across the system

When this was all done we took another stab at our original code to build the [Object Oriented version of the Bank System](https://github.com/jugonzal/lhl-lectures/blob/master/w5d5-oop/bank_oop_class.js).

In Javascript there is an alternate way of writing code that follows an OO paradigm, which involves the use of `prototype`.  If you are learning OO for the first time it is probably easier to learn the cleaner syntax introduced in ES6, but take a look at this alternate notation for the [Bank System using Prototype](https://github.com/jugonzal/lhl-lectures/blob/master/w5d5-oop/bank_oop_prototype.js) as there is plenty of code out there written in this style.   Conceptually they are both equivalent. 