# CRUD over HTTP with Express - forms and more

We've used a very minimal Express server (simpler than the one created with
`express-generator`!) to implement a simple application with a (mostly) complete
workflow, including pages and forms.

We went through the following topics:

* Implementing CRUD over HTTP with Express
* Render vs Redirect pattern in multi-page apps
* Forms (action, method)
* Links (`<a>` tags) compared to Forms
* Exploring the DevTools network tab in Chrome
* Explore the full lifecycle of GET -> Submit Form -> POST -> Redirect -> GET
* Query string params vs Post Data params (and how they are encoded)
* Express debugging tactics

## A pinch of MVC

The [Model-View-Controller
pattern](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) is
a very popular pattern to organize web applications. It advocates separating
data storage logic (**Model**) from display logic (**View**) using a layer in between to
handle user requests (**Controller**).

We've applied this pattern to our blog application (see my[repo / 12w3d2-crud / code](https://github.com/jugonzal/lectures/tree/master/12w3d2-crud/code)
folder).
