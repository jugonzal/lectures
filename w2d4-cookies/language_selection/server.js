const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000; // default port 8080
const cookieParser = require("cookie-parser")

// let chosenLanguage = undefined

function seeCookies (req, res, next) {
  console.log(req.headers.cookie)
  console.log(req.cookies)
  console.log(req.signedCookies)
  next()
}

app.use(cookieParser("juan gonzalez has a very secret secret"))
app.use(seeCookies)

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  if (!req.signedCookies.chosenLanguage) {
    res.render("choose_language");  
  } else if (req.signedCookies.chosenLanguage == 'EN') {
    res.render("english")
  } else if (req.signedCookies.chosenLanguage == 'FR') {
    res.render("french")
  }
});

app.get("/choose_english", (req, res) => {
  res.cookie('chosenLanguage', 'EN',{signed: true})
  res.render("english");
})

app.get("/choose_french", (req, res) => {
  res.cookie('chosenLanguage','FR',{signed: true})
  res.render("french");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
