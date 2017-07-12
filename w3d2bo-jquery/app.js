// What happens when you pass a function into jQuery?
// It registers the function as an event handler for the document
// DOMContentLoaded event.
// document.addEventListener('DOMContentLoaded', function () {});
// $(document).ready(function () {});
$(function () {

  console.log('DOMContentLoaded has fired');

  // You can pass a CSS selector into the jQuery function
  // and get back an array-like object containing the DOM elements
  // that were selected.
  // This object has a TON of REALLY COOL methods on it.
  // We call this a jQuery "collection" object.
  var anH1Iguess = $('h1');
  console.log(anH1Iguess[0].innerText);

  anH1Iguess.css({
    color: 'green',
    fontFamily: 'Papyrus'
  });

  // We don't do this very much, but yeah you can pass a DOM element in
  var aRealH2 = document.createElement('h2');
  var anH2Iguess = $(aRealH2);
  console.log(anH2Iguess);

  // What you're more likely to do, is pass an HTML-like fragment.
  var actuallyAnH2maybe = $('<h2>')
    .text('Got it!')
    .appendTo('body');
  // console.log(actuallyAnH2maybe);
  // actuallyAnH2maybe.text('mayby it\'s an h2');
  // actuallyAnH2maybe.appendTo('body');

  // jQuery is all about chaining. That is, most of these helper methods
  // return the collection they were called on.
  $('<h3>').text('this is an h3').appendTo('body');

  // You can pass in as much HTML as you want.
  $(`<p class="whoa-snit">
      Hi, my name is <b>Juan</b>.
     </p>`)
    .addClass('cool-p')
    .appendTo('body');

  // actuallyAnH2maybe[0].addEventListener('click', function (event) {
  //   alert('don\' use alert')
  // });
  actuallyAnH2maybe.on('click', function (event) {
    alert('don\' use alert')
  });

  // Let's make a link
  $('<a>')
    .attr('href', 'http://example.com/')
    .text('Final Demo here!')
    .appendTo('body')
    .on('click', function (event) {
      event.preventDefault();
      console.log("Awesome!");
      // console.log(event.pageX);
      // console.log(event.pageY);
    });

  $('body').on('mousemove', function (event) {
    console.log(event.pageX, event.pageY);
  })

});
