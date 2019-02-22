Hi all, today we devoted all our attention to CSS.  We started looking back at 
the web of 10 years ago, when two major trends collided:  absolute positioning in
CSS and smartphones.  They just didn't like each other and gave birth to a 
whole range of new techniques aimed at designing better pages for smaller screens.

Whether we call it Responsive Design, Adaptive Design, Progressive Design, or 
Mobile-first Design, they all have one thing in common:  they are concerned
for how a website will appear across different types of screens/devices.   The
techniques used to deal with this are old, coming from an era where people
wanted to *print* webpages and a different style-sheet would be needed to 
support the printer.   That "media" query would allow for a completely different
set of styles to be applied IF the page was rendered on paper instead.

Nowadays there are a great range of techniques and patterns, and the links below
contain good tutorials on these concepts, but if you have to remember one thing 
is this:  always start designing your web applications assuming the user needs
to do ONE thing and that thing is the only widget that matters in your page.
This focus will do wonders for your design and delight your users.

https://developers.google.com/web/fundamentals/design-and-ui/responsive/

and here are some full patterns for common flexible layouts:

https://developers.google.com/web/fundamentals/design-and-ui/responsive/patterns

and if your layout is super complex, consider a full FlexBox:

https://css-tricks.com/snippets/css/a-guide-to-flexbox/

Once we learned about Responsive Design patterns we looked at ways to make it 
easier to experiment with different patterns without having to do much work.
At that point we discovered SASS and learned a few techniques to leverage their
`import` and `extend` directives to apply a whole CSS template to a pre-existing
stylesheet we had designed.

I won't share the full code as you are still working on your Tweeter project,
but here is how that example we saw in class works, assuming a given CSS pattern we find on the web, we can bring it into our project as `_responsive.scss`:

``` 
.container {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-flow: row wrap;
  flex-flow: row wrap;
}

.c1, .c2, .c3, .c4, .c5 {
  width: 100%;
}
```

We would like to *redefine* our existing CSS to appropriate some of these styles. 
We can do so by:

```
body {
  color: #244751;
  background-color: #eee;
  font-family: 'Roboto Condensed', sans-serif;

  @extend .container; 
}

main {
  background: white; 
  @extend .c2;
}
```

The `@extend` directive will bring all styles from the original pattern into our
existing styles.

After doing this, all we need is to pre-process our SCSS files:

`sass my_scss.scss new_css.css`

This trick is powerful enough that we were able to create a Responsive version
of our Tweeter project with just those few changes.

For more information about other tricks available, look at this guide:

http://sass-lang.com/guide
