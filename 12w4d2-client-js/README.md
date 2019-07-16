# Client-side Javascript 

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
avatar.srcset="https://avatars0.githubusercontent.com/u/2307249?s=460&v=4"
```

In the end we agreed that `document.querySelector` would probably the most useful of all function to find elements because it allows us to use the same CSS rules we've mastered to target specific elements in our page.   

```javascript
list = document.querySelector('#toc ul')
todo = document.createElement("li")
todo.innerText="Very last thing to do..."
list.appendChild(todo)
```

It would be impossible to cover all of the possibilities with the `document` object, but here is a good place to continue learning about it: [MDN Web APIs - Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)

From there we went on to learn about jQuery and all the ways in which it makes it easier to manipulate the DOM.  For example, to actually append the following HTML to the list:

```html
<li class="toclevel-1 tocsection-6">
    <a href="#External_links">
        <span class="tocnumber">6</span> 
        <span class="toctext">External links</span>
    </a>
</li>
```

We use the `append` function but notice how we can either append one element at a time, or a whole bunch in a single batch!

```javascript
$("#toc ul").append(
    $(`<li class="toclevel-1 tocsection-7">`).append(
        $("<a>", {
            href: "#GoodStuff"
        })
            .append($(`
                <span class="tocnumber">7</span> 
                <span class="toctext">Good Stuff</span>`))

    )
)
```

### Handling events

Perhaps the most important breakthrough today was the idea of using callbacks to hook our code to the events already happening in the browser.  BTW, if you want to explore other events available, this [MDN Events Reference](https://developer.mozilla.org/en-US/docs/Web/Events) is a good place to start.

```javascript
title.innerHTML="Juan Gonzalez - Inventor of Javascript<button>Verify!</button>"

// vanillaJS way of addint an event
//
// var myButton = document.querySelector("button")
// myButton.addEventListener('click', function(ev) { 
//    console.log('Event source:', ev) } )

$('button').on('click', function(evt) {
    var $btn = $(this);
    $btn.closest("h1").text("Back to Brendan")
})
```

Notice the use of `$(this)` to refer to "the actual element that fired up the event itself".  And from there go through you jQuery functions to find the elements of the page that may be most relevant to what you are trying to do.

Since events can be attached to *any* element in the page, it is possible that the same event may trigger *multiple* events at the same time.  This is called *event propagation* and you can control it too.

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