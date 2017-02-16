const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000; // default port 8080

// Use cookies!
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// let languageSelected; // can't really have one global lang

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log('Cookies: ', req.cookies);

  if (req.cookies['lang'] == 'en') {
    res.render('english');
  } else if (req.cookies['lang'] == 'fr') {
    res.render('french');
  } else {
    res.render("choose_language");
  }
});

app.get("/choose_english", (req, res) => {
  res.cookie('lang', 'en'); // Set-Cookie: lang=en
  res.redirect("/");
})

app.get("/choose_french", (req, res) => {
  res.cookie('lang', 'fr'); // Set-Cookie: lang=fr
  res.redirect("/");
});

app.get("/information", (req, res) => {
  if (req.cookies['lang'] == 'en') {
    res.render('english');
  } else if (req.cookies['lang'] == 'fr') {
    res.render('french');
  } else {
    res.redirect('/');
  }
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

