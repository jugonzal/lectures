const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000; // default port 8080

// const preferences = {
//   language: 'none'
// }

app.set("view engine", "ejs");

const cookieParser = require('cookie-parser');

app.use(cookieParser('this is juan gonzalez and nobody knows im el zorro'));

app.use(function(req,res,next) {
  console.log(req.cookies)
  next();
})

app.get("/", (req, res) => {
  if (  req.cookies.language === 'english' ) {
    res.render("english");  
  } else if ( req.cookies.language === 'french' ) {
    res.render("french");
  } else {
    res.render("choose_language");
  }
});

app.get("/choose_english", (req, res) => {
  // preferences.language = 'english';
  res.cookie('language','english',{signed: true});
  res.render("english");
})

app.get("/choose_french", (req, res) => {
  // preferences.language = 'french';
  res.cookie('language','french',{signed: true});
  res.render("french");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

