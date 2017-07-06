const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000; // default port 8080

// Use cookies!
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log('Cookies so far: ', req.cookies);
  if (req.cookies['language'] === 'EN') {
    res.render('english');
  } else if (req.cookies['language'] === 'FR') {
    res.render('french');
  } else {
    res.render('welcome');
  }
});

app.get("/english", (req, res) => {
  res.cookie('language','EN');
  res.redirect('/');
});

app.get("/french", (req, res) => {
  res.cookie('language','FR');
  res.redirect('/');
});

// app.get("/biz", (req, res) => {
//   res.cookie('tracker','We are listening to you');
//   res.render('biz');
// });

// app.get("/about", (req, res) => {
//   console.log("Are we tracking? ", req.cookies.tracker);
//   res.cookie('tracker','Still listening...')
//   res.render('about')
// })

// app.get("/language", (req, res) => {
//   if (req.cookies['lang'] == 'en') {
//     res.render('english');
//   } else if (req.cookies.lang == 'fr') {
//     res.render('french');
//   } else {
//     res.redirect('/');
//   }
// });

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});

