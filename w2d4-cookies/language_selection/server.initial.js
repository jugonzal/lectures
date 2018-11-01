const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000; // default port 8000

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("choose_language");  
});

app.get("/choose_english", (req, res) => {
  res.render("english");
})

app.get("/choose_french", (req, res) => {
  res.render("french");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

