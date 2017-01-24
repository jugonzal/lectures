# Client-side Javascript 

Code discussed in class can be found inside [`/code`](code).

Hey all,  today we learned about the humble beginnings of Javascript as a sidekick to the first browser and how that small language developed in just a few days has become the language of the open web.

Before we went any further we had to understand that the language keeps evolving and it is currently sitting at ES6 (ECMAScript 6):   Here is a general summary of the differences between 5 and 6: http://es6-features.org/

When developing in javascript for a server, you are usually in control of the server itself and can decide to install the latest version of Node and use all the great features built into the language.   But when you develop for the browser
you have to consider that most people use a different version of the browser than you do and you should care about this.  Here is a quick resources to keep up with the compatibility of most popular browsers and the most recent versions of JS:

[ES6 Compatibility Table](https://kangax.github.io/compat-table/es6/)

The first trick we learned was to use "CSS" selectors to manipulate actual HTML elements through code.   We can do this thanks to something called the DOM which is just the programmatic interface to the page opened in your browser.  

You can access the code we used (fork from Fabio!):
https://github.com/jugonzal/lhl-lectures/tree/master/w3d2-browser-js

and explore the use of the following...

```
document.querySelector("#outer-box")

document.querySelector("#outer-box").children

// and event change some of the attributes
document.querySelector("#outer-box").className = "fancy"

// Or even create somethign we shall call JQuery soon enough...
function $(query) {
  return document.querySelector(query);
}

```
Here is a short reference of some of the objects available to you, just because you are in a browser:

    * The `navigator` object
        - Contains information about the browser itself
        - Version, enabled features and so on.
    * The `window` object
        - Refers to the browser window or tab
        - Includes location, navigation history and so on
        - It's the top object that contains all global variables
    * The `document` object
        - Contains the website being displayed inside the window
        - All elements, css and scripts are inside `document`.
        - DOM - Document Object Model
            + The API through which you can access all elements
            + `document.getElementBy<attribute>()` - oldschool
            + `document.querySelector()` - what cool kids do

Perhaps the most important breakthrough today was the idea of using callbacks to hook our code to the events already happening in the browser.   We learned about Event Driven Programming and while we didn't explore all the possible 
events we can listen to, there are a lot.

```
var $button = $('#the-button');

function buttonClick(ev) {
  ev.stopPropagation(); // Stops event from propagating outwards
  alert("You clicked meeeee!");
  $('#main-header').innerText = "YOU CLICKED THE BUTTON";
}

$button.addEventListener('click', buttonClick);
```

A few things to remember when working with events:

* Events and event propagation
    - Events propagate outwards from the target
        + This means a `click` event on a button will also trigger `click` on a containing `<div>`
        + You can stop this with `<event>.stopPropagation()`
    * The event object
        - Contains all information about it, including the DOM element itself - `event.target`
    * `<element>.addEventListener()`
        - Attaches a function to an event
        - You can remove a listener with `<element>.removeEventListener()`

It seems our final demo was very popular so I leave it here for you to build your own game in javascript:

https://github.com/end3r/JavaScript-Game-Controls

Try some stretch goals:  hack this game into "Asteroids!"