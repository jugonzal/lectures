## Intro to React

Hey all, we started the day with a quick Q&A about the things that got your interest during your Week 5 learning journey.

Then we talked about a [very simple page](https://github.com/jugonzal/lectures/blob/master/w6d1-new-react/public/static.html) and what we would need to do in order to build this web application. During this conversation we determined that _it is possible_ such application would strain the resources of our browser beyond its capabilities. 

That was a good point to introduce React, a client-side library that helps optimize the way a web page is rendered by taking control of the process of rendering the DOM.

At this point we learned about what it would take to convert that page to something that React could use:

```jsx
class SimpleWidget extends React.Component {
  render() {
    return (
      <div className="simple-widget">
        <h3>Currency Exchange Rates</h3>
        <ul>
          <li>CAD -> 1.55</li>
          <li>USD -> 1.01</li>
          <li>JPY -> 9.99</li>
        </ul>
      </div>
    )
  }
}
```

We talked briefly about what JSX are but more importantly we understood that creating these components was somehow equivalent to writing that HTML.

Around this time we looked at our tooling (babel?) to convert a JSX into a proper javascript file that can be embedded into our page:

```html
<html>
  <head>
    <script crossorigin src="https://unpkg.com/react/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
  </head>
  <body>
    <div id="root">
    </div>
  </body>
  <script src="app.js"></script>
</html>
```

Once we understood the fundamental process for creating JSX, we started to look at the architecture of a typical React application: 

- usually a top-level component 
- components render by using other sub-components
- components can pass data to their children by using `props`
- anything that a component needs to remember is known as `state`, but I made the suggestion that only the top-level component should manage state and all data should flow top-down from there.

You'll find a nice progression through the various examples we reviewed today, starting with [`step1.jsx`](https://github.com/jugonzal/lectures/blob/master/w6d1-new-react/step1.jsx).

We'll continue learning about the tooling that makes React development so popular.
