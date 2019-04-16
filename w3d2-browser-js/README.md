# Client-side Javascript 

Code discussed in class can be found inside [`/code` in my repo](https://github.com/jugonzal/lectures/tree/master/w3d2-browser-js/code).

## History

Hey all,  today we learned about the humble beginnings of Javascript as a sidekick to the first browser and how that small language developed in just a few days has become the language of the open web. I gave you my account of that history, but if you want to know more here is [a first person account](https://brendaneich.com/2011/06/new-javascript-engine-module-owner/) by Brendan himself.

## Javascript Evolution

When developing in javascript for a server, you are usually in control of the server itself and can decide to install the latest version of Node and use all the great features built into the language.   But when you develop for the browser you have to consider that most people use a different version of the browser than you do and you should care about this.  Here is a quick resources to keep up with the compatibility of most popular browsers and the most recent versions of JS:

[ES6 Compatibility Table](https://kangax.github.io/compat-table/es6/)

## Javascript in the Browser

From there we started to learn about the unique features of javascript in the browser:

Here is a short reference of some of the objects available to you, just because you are in a browser:

    * The `window` object
        - Refers to the browser window or tab
        - Includes location, navigation history and so on
        - It's the top object that contains all global variables

```javascript
window.location.href 
window.history.back()
```

    * The `navigator` object
        - Contains information about the browser itself
        - Version, enabled features and so on.
        - Even the actual `geolocation` of the machine can be retrieved.

```javascript
navigator.userAgent
navigator.geolocation.getCurrentPosition(position => {
 console.log(position) 
})

// only in Chrome
// navigator.getBattery().then(battery => console.log(battery.level))
```

    * The `document` object
        - Contains the website being displayed inside the window
        - All elements, css and scripts are inside `document`.
        - DOM - Document Object Model
            + The API through which you can access all elements
            + `document.getElementBy<attribute>()` - oldschool
            + `document.querySelector()` - what cool kids do

The first trick we learned was to use the various aspects of HTML to manipulate actual elements through code.   We can do this thanks to something called the DOM which is just the programmatic interface to the page opened in your browser.  

```javascript
var title = document.getElementById("firstHeading")
title.innerText = "Juan Gonzalez"
var avatar = document.getElementsByTagName("img")[0] // notice this assumes first item in array
avatar.srcset="https://www.lighthouselabs.ca/uploads/team_member/avatar/134/medium_JuanPhoto.png"
```

In the end we agreed that `document.querySelector` would probably the most useful of all function to find elements because it allows us to use the same CSS rules we've mastered to target specific elements in our page.   

```javascript
list = document.querySelector('#toc ul')
todo = document.createElement("li")
todo.innerText="Very last thing to do..."
list.appendChild(todo)
```

As we coded, we used the [MDN Web API](https://developer.mozilla.org/en-US/docs/Web/API) resources to figure out which properties and methods were available at each step.


### Handling events

At this point we looked into ways to interact with the user and this led to the discovery of a whole new programming paradigm called *Event Driven Programming*.  Look it up, it is a thing.  To better understand this, we added some *events* to our page.

```javascript
title.innerHTML="Juan Gonzalez - Inventor of Javascript<button>Verify!</button>"
var myButton = document.querySelector("button")
myButton.addEventListener('click', function(ev) { 
    console.log("Verified!") } )
title.addEventListener('mouseover', function(ev) { 
    console.log("Event: ", ev) } )

```

Perhaps the most important breakthrough today was the idea of using callbacks to hook our code to the events already happening in the browser.  BTW, if you want to explore other events available, this [MDN Events Reference](https://developer.mozilla.org/en-US/docs/Web/Events) is a good place to start.

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

https://github.com/jugonzal/JavaScript-Game-Controls

Try some stretch goals:  hack this game into "Asteroids!"