const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000; // default port 8080

// Use cookies!
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log('Cookies so far: ', req.cookies);
  res.render('welcome');
  // if (req.cookies['spring'] == 'warm') {
  //   res.render('stay');
  // } else {
  //   res.render('goaway');
  // }
});

app.get("/warm", (req, res) => {
  res.cookie('spring','warm');
  res.render('stay');
});

app.get("/biz", (req, res) => {
  res.cookie('tracker','We are listening to you');
  res.render('biz');
});

app.get("/about", (req, res) => {
  console.log("Are we tracking? ", req.cookies.tracker);
  res.cookie('tracker','Still listening...')
  res.render('about')
})

app.get("/language", (req, res) => {
  if (req.cookies['lang'] == 'en') {
    res.render('english');
  } else if (req.cookies.lang == 'fr') {
    res.render('french');
  } else {
    res.redirect('/');
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});

