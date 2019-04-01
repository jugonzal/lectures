## Design Patterns

I hope you enjoyed our lecture about the process of writing code and then refactoring it to make it better.

I thought the group coding session was very productive as it led us to discover a "good idea in software":

	If every method of an object returns the object itself as in `return this`, we make it a lot easier to write descriptive code by chaining all those methods.

To put that in the context of our problem, if *every* function that we write returns a `Person` then I can chain them to keep asking question about someone they know, like "who is your father's father".

The code we wrote aligns with a well-documented design pattern called [Fluent Interface by Martin Fowler](https://martinfowler.com/bliki/FluentInterface.html), which is broadly used by libraries like *jQuery*. This realization that good ideas can be generalized to be used again in other problems was the starting point for our exploration of _Design Patterns_.

You would do good to spend some time learning UML as it is the de-facto standard on how object systems are documented. The [Unified Modeling Language](https://en.wikipedia.org/wiki/Unified_Modeling_Language)

You can find [the code we wrote here](https://github.com/jugonzal/lectures/tree/master/w8-design-patterns)

In particular look at the BST which is where we applied the [Visitor Pattern](https://en.wikipedia.org/wiki/Visitor_pattern) to decouple the various operations that can be performed in the tree, without requiring a single change on the tree itself.

At other times I've talked about Cohesion and Coupling as forces that will help you make decisions about how to write better code. The bottom line is that when looking for inspiration about how to refactor a particular piece of software there are endless sources to guide you. Consider this a neverending journey to become a better software developer. 
