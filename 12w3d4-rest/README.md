# REST

Today's lecture had us rewriting our blog server to make it an actual API. Before getting started we had the talk about "RESTful APIs" and how they have been a powerful force to shape the web ecosystem. It all spawns from this old white paper:

https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm

However we soon realized the conventions to learn are quite trivial and come down to identifying the types of *resources* and *collections of resources* that our server is capable of managing. Then we can simply use existing `HTTP methods` to operate on them.

Here is the short list of routes that we designed for our potential API:

```
GET /users
  [{id: 1, name:'Juan'}]

GET /users/1
  {id: 1, name:'Juan'}

POST /users
  {id: 2, name:'Jose'}

PUT /users/1
  {id: 1, name:'Juan', email:'juan@lhl.ca'}

DELETE /users/1

GET /posts
GET /posts?name=juan
GET /posts/the-aleph/commenters
GET /posts/the-aleph
POST /posts
PUT /posts/the-aleph
DELETE /posts/the-aleph

GET /users/1/posts
GET /users/1/posts/the-aleph
```

What matters with these routes is that the URL itself is self-documenting and its meaning should be unambiguous. How it is implemented by the server is a different thing.

While we wrote everything on top of the application we already had, you should focus on the `routes/api.js` module as it is the one that has the implementation for our particular set of API routes.

You can find the whole project under [repo / 12W3D4-rest / code ](https://github.com/jugonzal/lectures/tree/master/12w3d4-rest/code)

If you need to test some of the operations, here is the snippet of javascript to use in your browser console:

```javascript
fetch('/api/posts', {
  method: 'POST', // replace with PUT
  mode:'cors',
  credentials:'same-origin',
  headers: 
    {
      'Content-Type': 'application/json'
    },
  body: JSON.stringify(
    {
      title:"New Works", 
      body:"By Juan Gonzalez"
    }
  )
}).then(response => console.log(response));
```

We didn't try it together, but the following `curl` command line should work too:

```shell
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"title":"New Works","body":"By Juan Gonzalez"}' \
  http://localhost:8000/api/posts
```
