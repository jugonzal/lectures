const express = require("express");
const parser = require("cookie-parser");
const app = express();
const PORT = process.env.PORT || 8000; // default port 8000

let preference = null;

app.use(parser('I am el zorro'))

app.use(function(req, res, next) {
  console.log(req.url, req.headers.cookie)
  console.log(req.cookies)
  console.log(req.signedCookies)
  next()
})

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  if (req.signedCookies.preference == 'EN') {
    res.render("english")
  } else if (req.signedCookies.preference == 'FR') {
    res.render("french")
  } else {
    res.render("choose_language");  
  }
});

app.get("/choose_english", (req, res) => {
  res.cookie('preference', 'EN', {signed: true})
  res.render("english");
})

app.get("/choose_french", (req, res) => {
  res.cookie('preference', 'FR', {signed: true})
  res.render("french");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

