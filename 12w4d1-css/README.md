
So far we've been learning a very particular architecture style for web applications: one where the server is in charge. 

This week you'll learn a very different way of thinking about web applications. We'll focus on the front-end and realize the full potential of modern browsers. 


## HTML

You can find the first page we wrote: [index.html](https://github.com/jugonzal/lectures/tree/master/12w4d1-css/index.html)

This is an example of a basic HTML template to start with.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title></title>
</head>
<body></body>
</html>
```

We tried articulating the most important aspects of HTML and we came up with the following:

- There are `<tags>` and they appear in pairs to identifty a given HTML element.
- Tags can be nested but not overlap each other
- Tags can have attributes, or additional information that describes the element in particular.

- `<!doctype html>` Render the document in 'standards' mode
- `<html></html>` The entire document must be wrapped in exactly one html tag
- `lang="en"` Recommended by [W3C](https://www.w3.org/International/questions/qa-html-language-declarations) to declare the language of the document
- `<head></head>` Contains exactly one head tag that contains meta information that describes the contents of the body tag
- `<meta charset="utf-8">` Avoid some bugs due to not specifying the document encoding
- `<meta name="viewport" content="width=device-width,initial-scale=1.0">` Responsive design stuff
- `<title></title>` The title of the document, show in the tab
- `<body></body>` Contains exactly one body tag that describes anything you want to be visible

## Cascading Style Sheets

The technology that we use to define the way that the documents looks is CSS. The term 'Cascading' describes the behaviour where styles applied to one element are inherited by it's children.

```html
<html>
  <body>
    Content
    <div>
      Content
      <p>Content</p>
    </div>
  </body>
</html>
```

```css
html {
  background-color: mediumaquamarine;
  color: floralwhite;
}

body {
  border: 4px solid darkorange;
}

div {
  background-color: darkslategray;
  color: darkorange;
}

p {
  color: floralwhite;
}
```

With this example we set the color of all content within the `html` tag to 'floralwhite'. That means that the content within the body tag will also be white. We set the color of the content within the `div` to 'darkorange', and back to 'floralwhite' in the `p` tag. Some properties like `border` need to be applied specifically to each tag that needs a border.

### Defining Styles

It is impossible to learn CSS in a day. Don't expect to be comfortable with it by the end of the week. If CSS is something you want to focus on for your job then you will need to spend a lot of time practicing. A good place to start is the [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) documentation on MDN.

There are a few ways to define styles within a document.

1. Use a `<style>` tag in the `<head>`.
2. Use a `<link>` tag in the `<head>`.
3. Provide a style attribute to an element.

Each of these approaches has a purpose. The approach that you will use most often includes external style sheet documents with a `<link>` tag.


### The Syntax

The ability to style something depends on what style [properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) are supported by the browser. Properties can have values assigned to them. If we want to set the background colour for something that contains that property we can assign it `background-color: #fff`.

If we want to provide multiple declarations, we can separate them with a semi-colon `background-color: #fff; color: #000`. This works well for assigning styles directly to elements with the style attribute. We want to avoid doing this, since it doesn't scale very well.

Instead a good approach is to setup a rule. A rule allows us to provide one or more selectors to match. We can use a declaration block to group a series of declarations.

```css
/*
selector list {
  property: value;
}
*/

div, p {
  color: black;
}
```

More details available on [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax).

### The Box Model

By applying a certain border to all things in our page we realized that the browser interprets every HTML element to be some kind of box.  Each box has a number of properties that define the space that is used around it.

```css
* {
  border-style: dotted;
  border-color: red;
}
```

Those boxes that we discovered around most elements are known as _blocks_ and they tend to be greedy, or use as much space as they can.  Not great for layout decisions.  While most elements are _block_ elements, some of the such as the  `<span>` tag are _inline_ elements. These elements are very conservative with space and will try to use as little as possible.

We talked about two ways to make this evident, one by using the Chrome Developer Tools to _inspect_ any given element. The inspection process would highlight the whole box assigned to that particular element.

There are 5 properties that contribute to the sizing and layout of an element.

- Content: Area that contains the content.
- Padding: The whitespace between the content and the border.
- Border: A border around the element.
- Margin: The whitespace around the border.
- Position: More on this later.

There are `width` and `height` properties that affect the size of the content area. When setting the `padding` or `margin` you need to define the values for the top, right, bottom and left sides of the box.

```css
nav {
  padding-top: 100px;
  padding-right: 200px;
  padding-bottom: 300px;
  padding-left: 400px;
}
```

If the padding is meant to be the same all the way around the box, then you could use a shorthand property.

```css
nav {
  padding: 100px;
}
```

It's also possible to set multiple values with a shorthand property. The order for the properties is top, right, bottom and left. The acronym __TRBL__ is a good way to remember this.

```css
nav {
  padding: 100px 200px 300px 400px;
}
```

More [shorthand properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) can be used to reduce the amount of typing.

## Semantic HTML

For a while HTML was used heavily to describe the *structure* of a document.  But around 2005 its use started to evolve to focus more on describing the content and its meaning. HTML allows us to provide context to the content in a document. HTML5 has a number of semantic elements. This means that we can use HTML to highlight the meaning of content. Tags like `<article>`, `<nav>`, `<section>` and `<footer>` are good examples of this. It's not a bad idea to check what tags are available on [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

You can find the more advanced version of our page, the one using the semantic approach and all the advanced CSS rules at [weather.html](https://github.com/jugonzal/lectures/tree/master/12w4d1-css/weather.html)

## CSS Specificity

Principles for sorting out conflicting CSS rules.

### Rule Ordering

If there are two rules with identical selectors, the later one will override the earlier one:

```css
/* This rule will not be visible */
p { background: red }

/* This rule will override the previous one */
p { background: green }
```

### Specificity Hierarchy

In order of most specific to least specific:

1. Inline styles
2. ID selectors
3. Class selectors, attributes selectors, and pseudo-classes
4. Element selectors and pseudo-element selectors

One way to calculate this is to assign "points" to each of these selectors. The selector with the highest number of points will end up being applied.

#### Inline Styles (worth 1,000 points)

Writing the actual style into the HTML element:

```html
<h1 style="color: red">
```

This essentially overrides all the CSS rules declared elsewhere.

There is an exception to this with the `!important` rule (which is basically a trump card you can use in your CSS rule), but it is very dangerous and should only be used temporarily for testing.

#### ID Selectors (worth 100 points)

IDs should be used for things where you are certain there will only be one of. In other words, it's for elements that you are certain to be unique.

HTML:

```html
<div id="header">My Header</div>
```

CSS:

```css
#header { color: red }
```

This is the most specific selector we have, and thus it has a very high specificity.

#### Class, Attributes, and Pseudo-class Selectors (worth 10 points)

```css
.class-name { color: red }

[type="text"] { color: red }

p:hover { color: red }
```

Each of the these selectors are worth 10 points each, and you'll likely be using classes very often.


#### Element selectors and pseudo-element selectors (worth 1 point)

```css
p { color: red }

p:after { color: red }
```

Directly selecting the HTML tag (such as `div`, `body`, `p`, etc.) is often used, but it only has a specificity of one point.

Pseudo-elements are a confusing feature of CSS and is outside of the scope of this discussion.

### Calculating Specificity

Here are some examples:

```css
/* 100 */
#test { background: red }

/* 10 + 1 = 11 */
.item p { background: orange }

/* 1 */
p { background: green }

/* 1 + 100 + 1 = 102 */
body #wrap p { background: yellow }
```

Note that combinators such as `>`, `~` ,`+`, and `[space]` have no effect on specificity.

If you still end up getting confused, use the specificity calculator: https://specificity.keegan.st/

### CSS Combinators

#### Descendant Selector (space)

```css
.wrap p { color: blue; }
```

This is saying that any `<p>` tags underneath an element with a class of `wrap` should be coloured blue. Note that it doesn't matter how deeply nested the `<p>` tag is. In the following HTML, all of the `<p>` tags would get colored blue.

```html
<div class="wrap">
  <p>I'm blue!</p>
  <div>
    <p>Me too!</p>
  </div>
</div>
```

#### Direct Child Selector (>)

```css
.wrap > p { color: red; }
```

This is saying that any `<p>` tags **directly** under an element with a class of `wrap` should be coloured red. In the following HTML, only the first `<p>` tag will be colored red.

```html
<div class="wrap">
  <p>I'm red!</p>
  <div>
    <p>Not me!</p>
  </div>
</div>
```

#### Adjacent Sibling Selector (+)

```css
.item + p { color: yellow; }
```

This is saying that any `<p>` tag immediately after (and on the same level of nesting as) an element with a class of `item` should be coloured yellow. Note that the word "sibling" in this context means elements that are after the first element we are selecting. In the following example, you'll notice that the first `<p>` tag is not yellow even though it is on the same level of nesting as the `<span class="item">` tag.

```html
<p>Not yellow!</p>

<span class="item">
   <p>Not yellow!</p>
</span>

<p>I'm yellow!</p>
```

#### General Sibling Selector (~)

```css
.item ~ p { color: pink; }
```

This is saying that any `<p>` tag after (and on the same level of nesting as) an element with a class of `item` should be colored pink. In the following example, all but the first `<p>` tag will be colored pink.

```html
<p>Not pink!</p>

<span class="item"></span>

<p>I'm pink!</p>
<p>I'm pink!</p>
<p>I'm pink!</p>
```

### CSS Gotchas

#### `display: block`

Block elements are elements that will start on a new line and expand as wide as it can. `<div>` tags are, by default, block elements as are all the header tags (`<h1>`, `<h2>`, `<h3>`, etc.) and paragraph (`<p>`) tags.

- [Block-level elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements) can have a width and a height. Consecutive block-level elements will each break to their own line. The display property is set to 'block' by default.

#### `display: inline`

Inline elements are elements that will sit happily without creating a new line or disrupting the flow of elements around it. Think of a `<span>` tag inside a paragraph, you can use it to surround a word inside a paragraph without affecting the flow of the paragraph itself. These elements cannot take a width, they conform to their surroundings.

- [Inline elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements) cannot have their width and height set. Inline elements do not break to a new line, they will flow with the text around them. The display property is set to 'inline' by default.

#### `display: none`

This hides the element completely, as if it wasn't there to begin with.


### Centering in CSS

Centering things in CSS can be very very very tricky. As a general rule, horizontal centering tends to be a lot easier to deal with than vertical centering. Of course, it also depends on what you are trying to center and how you want it to display depending on its container size.

Many times, for horizontal centering, it's as easy as setting `text-align: center` or `margin: auto`. In other times, it may require you to use flex box techniques or some form of `position: absolute` and `transform: translate(-50%,-50%)`. The discussion for this is rather lengthy, so I'll leave the details to other articles.

Use may article as a reference: https://www.w3.org/Style/Examples/007/center.en.html

## CSS Best Practices

Article: [8 simple rules for a robust, scalable CSS architecture](https://github.com/jareware/css-architecture)

### IDs vs Classes

IDs are for unique elements (i.e. there should only ever be one of this), try not to use this everywhere.

Classes are for things that can conceivably be repeated (i.e. everything else). Naturally, you'd expect classes to be used very frequently.

### Class Naming

The most common convention is to use `kabab-case` rather than `camelCase` or `snake_case`. That being said, the most important thing is to be consistent. Choose a particular style and stick with it, or else your CSS can get very messy and difficult to maintain.


### Box Sizing

It's important to bring up the topic of the `box-sizing` property. CSS originally implemented the sizing of elements as `content + padding + border`.

```css
div {
  width: 100px;
  height: 100px;
  padding: 20px;
  border: 10px solid black;
}
```

When inspecting this div in the developer tools it is reported that this box is 160x160 pixels. If we want the div to size based on width and height with padding and borders included we can set the `box-sizing` property.

```css
div {
  box-sizing: border-box;
}
```

Now when the box is being sized it will only take up 100x100px of space.

```css
* {
  box-sizing: border-box;
}
```

It would be more common to apply it to all elements with a wildcard like `*`.



