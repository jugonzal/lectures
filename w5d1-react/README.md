# More React

We used today's lecture as a refresher of all things we have learned about React so far.  And to do so we explored the attached [React App](https://github.com/jugonzal/lhl-lectures/tree/master/w5d1-react/code):

- We noticed that [src](https://github.com/jugonzal/lhl-lectures/tree/master/w5d1-react/code/src) contains the various JSX templates and that the few things that appear on screen are declared as extensions of the React Component class.
- The top component manages `this.state` which is just the OO way to keep track of the data that this component will track.
- Any given component knows how to `render()` itself and when doing so returns a mix of HTML + javascript.  Any changes to the component state will trigger the rendering.
- One can think of components as "view" functions that take properties as parameters.  
- Just as we can pass data "down" via properties, we use callbacks passed in properties as a way for sub-components to notify when state needs to change.

In general, the Facebook documentation for React contains great guides:

https://facebook.github.io/react/docs/state-and-lifecycle.html




