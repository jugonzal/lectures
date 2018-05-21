Portions of these notes and additional snippets of code available at [https://github.com/jensen/css-notes/](https://github.com/jensen/css-notes/) courtesy of Karl in Vancouver.

## Introduction to CSS

Last week you used the first approach to make the client portion of TinyApp. You didn't spend a lot of time with CSS and client side JS. Instead templates were created and executed on the server side to generate dynamic pages with HTML.

This week you'll learn a very different way of thinking about web applications. We'll focus on the front-end and realize the full potential of modern browsers. 

### Tweeter

The project this week is a single page application. We will start by using CSS to style the user interface. Then we will use jQuery to manipulate the DOM and Ajax to retrieve data without requiring a browser refresh.

Later in the week the assignments will take you through the process of refactoring the server to use a database.

## Semantic HTML

HTML has nothing to do with the way a document looks. HTML allows us to provide context to the content in a document. HTML5 has a number of semantic elements. This means that we can use HTML to highlight the meaning of content. Tags like `<article>`, `<nav>`, `<section>` and `<footer>` are good examples of this. It's not a bad idea to check what tags are available on [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

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

Load `cascade.html` into the browser and check the Chrome Developer Tools to see how the styles are applied.

## Defining Styles

It is impossible to learn CSS in a day. Don't expect to be comfortable with it by the end of the week. If CSS is something you want to focus on for your job then you will need to spend a lot of time practicing. A good place to start is the [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) documentation on MDN.

There are a few ways to define styles within a document.

1. Use a `<style>` tag in the `<head>`.
2. Use a `<link>` tag in the `<head>`.
3. Provide a style attribute to an element.

Each of these approaches has a purpose. The approach that you will use most often includes external style sheet documents with a `<link>` tag.

## Boxes

During class we used the example of a `<span>` tag to understand how browsers process _inline_ elements. On the contrary, _box_ elements are assumed to need more space and are given a big box around them, sometimes taking more space than what is really needed.

We talked about two ways to make this evident, one by using the Chrome Developer Tools to _inspect_ any given element. The inspection process would highlight the whole box assigned to that particular element.

Alternatively you may want to assign a `border-style: dotted;` style to the element in question to make it evident where the browser considers the boundaries of that element. 

```css
* {
  border-style: dotted;
  border-color: red;
}
```

## The Syntax

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

## The Box Model

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

## Block-level vs. Inline

We can specify how we want an element to behave within the layout. The two primary settings for the `display` property are 'block' and 'inline'. There are a lot of other options too. To start just focus on understanding the difference between 'block' and 'inline'.

- [Block-level elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements) can have a width and a height. Consecutive block-level elements will each break to their own line. The display property is set to 'block' by default.
- [Inline elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements) cannot have their width and height set. Inline elements do not break to a new line, they will flow with the text around them. The display property is set to 'inline' by default.

More on [MDN CSS Display](https://developer.mozilla.org/en-US/docs/Web/CSS/display).

### Inline Block

The inline-block flows with surrounding text like an inline element. It can also be sized with width and height like a block-level element. This improves our options when creating layouts. See the `blockfloat.html` example for usage.

## Box Sizing

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


## Bonus

You are going to notice that when you search for HTML, CSS and JavaScript keywords the primary results will be from W3Schools. Avoid these results. Anytime you search for something add the term 'MDN' for Mozilla Developer Network documentation. Even better would be to use the search at [developer.mozilla.org](https://developer.mozilla.org/).

Good search engine optimization doesn't mean good documentation. The W3Schools material is likely to include the information you need. In my opinion it doesn't provide the same quality of information and provides a dated user experience.

Google helps us find a lot of good information. It is important to start recognizing the difference between good and bad documentation. Clicking on the first returned result without considering the source is a good habit to __break__.

