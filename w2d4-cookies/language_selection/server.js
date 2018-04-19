const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000; // default port 8080

// let languageSelected; // can't really have one global lang

app.set("view engine", "ejs");
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(function (req, res, next) {
  console.log("Cookies: ", req.cookies);
  next();
})

app.get("/", (req, res) => {
  if (req.cookies.languageSelected == 'EN') {
    res.render('english')
  } else if (req.cookies.languageSelected == 'FR') {
    res.render('french')
  } else {
    res.render("choose_language");
  }
});

app.get("/choose_english", (req, res) => {
  res.cookie ('languageSelected', 'EN');
  res.render("english");
})

app.get("/choose_french", (req, res) => {
  res.cookie ('languageSelected', 'FR');
  res.render("french");
});

app.get("/information", (req, res) => {
  if (req.cookies.languageSelected == 'EN') {
    res.render("english")
  } else {
    res.render("french");
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

