const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const app = express();
const PORT = process.env.PORT || 8080;

var knex = require('knex')({
  client: 'sqlite3',
  connection: {filename: './DB.sqlite3'}
})

// knex.schema.createTable('todos', (table) => {
//     table.increments('_id');
//     table.string('desc');
//     table.integer('priority');
//   }).then(r => console.log("Created"))
knex('todos').insert({desc: 'Something to do', priority: 10}).then(r => console.log("Inserted"))

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride("_method"));

// EXPRESS ROUTES //

// Just so home page doesn't 404 (annoying!)
app.get('/', (req, res) => {
  res.redirect('/todos');
});

app.get("/todos", (req, res) => {
  knex
  .select('')
  .from('todos')
  .then( results => {
    const templateVars = {
      todos: results
    };
    res.render("todos/index", templateVars);
  });
});

// Form to create new todo
app.get("/todos/new", (req, res) => {
  res.render("todos/new");
});

app.post("/todos", (req, res) => {
  knex('todos')
  .insert({
    desc: req.body.desc, 
    priority: req.body.priority
  })
  .then(r => { 
    console.log("Inserted")
    res.redirect("/todos");
  });
});

// // Edit form
// app.get("/todos/:id/edit", (req, res) => {
//   const id = req.params.id;
//   let filter = { _id: Mongo.ObjectId(id) };
//   db.collection("todos").findOne(filter, (err, result) => {
//     const templateVars = {
//       todo: result
//     };
//     res.render("todos/edit", templateVars);
//   });
// });

// // Update a todo
// app.put("/todos/:id", (req, res) => {
//   const id = req.params.id;
//   let filter = { _id: Mongo.ObjectId(id) };
//   const todo = {
//     desc: req.body.desc,
//     priority: Number(req.body.priority)
//   }; // mongo doc
//   db.collection("todos").updateOne(filter, {"$set":{"desc":req.body.desc}}, (err, result) => {
//     if (err) {
//       console.log("Something exploded on PUT /todos!");
//     }
//     res.redirect("/todos");
//   });
// });

// Delete by (mongo) ID
app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  knex('todos')
  .where('_id', id)
  .del()
  .then(r => {
    res.redirect("/todos");
  })
});

// END OF ROUTES //


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});


// The code below here is to make sure that we close the conncetion to mongo when this node process terminates
function gracefulShutdown() {
  console.log("\nShutting down gracefully...");
  try {
    db.close();
  }
  catch (err) {
    throw err;
  }
  finally {
    console.log("I'll be back.");
    process.exit();
  }
}

process.on('SIGTERM', gracefulShutdown); // listen for TERM signal .e.g. kill
process.on('SIGINT', gracefulShutdown);  // listen for INT signal e.g. Ctrl-C
