const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000; // default port 8080

// Use cookies!
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log('Cookies so far: ', req.cookies);
  if (req.cookies['doBiz'] == 'yes') {
    res.render('biz');
  } else {
    res.render('welcome');
  }
});

app.get("/biz", (req, res) => {
  res.cookie('doBiz','yes');
  res.render('biz');
});

// app.get("/information", (req, res) => {
//   if (req.cookies['lang'] == 'en') {
//     res.render('english');
//   } else if (req.cookies['lang'] == 'fr') {
//     res.render('french');
//   } else {
//     res.redirect('/');
//   }
// });

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});

