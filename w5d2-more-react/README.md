# More React: Component Lifecycle Events

We used today's lecture as a refresher of all things we have learned about React so far.  And to do so we explored the attached [Web App](./code):

- We noticed that [src](./code/src) contains the various JSX templates and that the
few things that appear on screen are declared as extensions of the React Component class.
- Any given component knows how to `render()` itself and when doing so returns a mix of HTML + javascript.  
- There are a couple of general strategies for managing your state.   The code here will show you two of those strategies:  managing a Global object or having state managed by each component.  
- Components go through various states (not-mounted-to-DOM, mounting, mounted, updating)  React allows you to set functions that will be called during each stage

Here is that one awesome diagram with the overall lifecycle for a Component.  Remember that you often times only need to work with `componentDidMount()` as it is a good place to fetch new data (hint: Lazy Load !)

  https://d2vvqscadf4c1f.cloudfront.net/RXZidTc7S5WEicK3fiNW_Screen%20Shot%202016-02-25%20at%2012.06.29%20PM.png

In general, the Facebook documentation for React contains great guides:
  https://facebook.github.io/react/docs/react-component.html


# Handling User Events

  add handlers directly to the JSX dom element
    <div onClick={(e) => {   }}>



