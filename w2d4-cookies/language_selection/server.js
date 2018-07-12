const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000; // default port 8080

const cookieParser = require('cookie-parser');
app.use(cookieParser('this is juan gonzalez and nobody knows im el zorro'));

app.use(function(req,res,next) {
  console.log("Cookies: ", req.headers.cookie)
  console.log("CookieParser: ", req.cookies)
  next()
})

// const Preferences = {
//   language: undefined
// }

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  if (req.cookies.language === 'EN') {
    res.render("english")
  } else if (req.cookies.language === 'FR') {
    res.render("french")
  } else {
    res.render("choose_language");
  }
});

app.get("/choose_english", (req, res) => {
  res.cookie ('language','EN')
  res.render("english");
})

app.get("/choose_french", (req, res) => {
  res.cookie ('language','FR')
  res.render("french");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

