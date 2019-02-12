Hi all,

Today we had the opportunity to go deeper into the _React thinking_.  I would say the most important part of our lecture was the conversation about _software reuse_ and how React promotes good software by forcing us to think about components and the ways in which our components should be reusable.

If you are looking for the code we wrote in class, you can find it in my [repo/w6d2-more-react](https://github.com/jugonzal/lectures/tree/master/w6d2-more-react) folder.

When looking at the code, take note of the following:

- State is (mostly) managed by the top component. 
- The top component sets a few functions that will be passed to its subcomponents for the purpose of "reporting back"
- Components use these functions to handle events and react provides a full range of hooks for them
- It is important to remember to `bind` a method to the correct context, which is usually known at the time of the constructor. We talked about alternatives, but stick to best practices for performance reasons.
- Some times you want a component to do things at very specific times, so react gives you a series
of _component lifecyle methods_ which are like event listeners for important stages in the life of a given component. 

During our lecture I used the [React documentation](https://reactjs.org/).  You should too; it is very good.  