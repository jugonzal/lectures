const express = require("express");
const app = express();
const parser = require("cookie-parser")
const PORT = process.env.PORT || 8000; // default port 8080


app.use(parser('you should be just fine'))

app.use(function(req, res, next) {
  console.log("Headers: ", req.headers.cookie)
  console.log("Cookies: ", req.cookies)
  console.log("Signed: ", req.signedCookies)
  next()
})

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let preferredLanguage = req.cookies.lang
  if (preferredLanguage == 'EN') {
    res.render("english")
  } else if (preferredLanguage == 'FR') {
    res.render("french")
  } else {
    res.render("choose_language");  
  }
});

app.get("/choose_english", (req, res) => {
  res.cookie('lang','EN',{signed: true})
  res.render("english");
})

app.get("/choose_french", (req, res) => {
  res.cookie('lang','FR',{signed: true})
  res.render("french");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

