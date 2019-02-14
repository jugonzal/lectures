const express = require("express");
const app = express();
const parser = require("cookie-parser");
const PORT = process.env.PORT || 8000; // default port 8000

app.set("view engine", "ejs");

// let chosen_language = null;

function echoRequest (req, res, next) {
  console.log("Request Cookie: ", req.headers.cookie);
  console.log("Cookies Parsed: ", req.cookies)
  console.log("Signed Cookies: ", req.signedCookies)
  next();
}

// function grabCookie (req, res, next) {
//   if (req.headers.cookie) {

//   }
// }

app.use(parser('good idea to initialize with some random phrase'))
app.use(echoRequest)

app.get("/", (req, res) => {
  if (!req.signedCookies.chosen_language) {
    res.render("choose_language"); 
  } else {
    res.render(req.signedCookies.chosen_language);
  } 
  // } else if (chosen_language == 'EN') {
  //   res.render("english");
  // } else if (chosen_language == 'FR') {
  //   res.render("french");
  // }
});

app.get("/choose_english", (req, res) => {
  res.cookie('chosen_language', 'english', {signed: true});
  res.render("english");
})

app.get("/choose_french", (req, res) => {
  res.cookie('chosen_language', 'french', {signed: true});
  res.render("french");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

