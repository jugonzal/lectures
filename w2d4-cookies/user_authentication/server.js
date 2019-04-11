const express = require("express")
const bodyParser = require("body-parser")
const bcrypt = require("bcrypt")

const app = express()
const PORT = process.env.PORT || 8000; // default port 8000

app.use(express.static('public'))

// parse application/x-www-form-urlencoded form data into req.body
app.use(bodyParser.urlencoded({ extended: false }))

const cookieParser = require('cookie-parser');
app.use(cookieParser('The chipmunk made a lot of noise'));

app.set("view engine", "ejs")

const data = {
  users: [
    { username: 'monica', password: 'testing', token: '1234'},
    { username: 'khurram', password: '12345' }
  ]
}

function createToken() {
  Math.random().toString().substr(5,5)
}

function validUser (username) {
  for (user of data.users) {
    if (user.username === username ) {
      return user;
    }
  }  
}

function checkLogin(username, password) {
  for (user of data.users) {
    if (user.username === username && password === user.password) {
      return user;
    }
  }
}

// Show the treasure if they are logged in, otherwise redirect to LOGIN page.
app.get("/", (req, res) => {
  const currentUsername = req.cookies['username'];
  if (validUser(currentUsername)) {
    res.render('treasure', { currentUser: currentUsername });
  } else {
    res.redirect("login");
  }
});

app.get("/login", (req, res) => {
  res.cookie('username', '')
  res.render("login")
})

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = checkLogin(username, password);

  if (user) {
    // success
    // cookies set to expire in 1 hour
    res.cookie('username', user.username, {expires: new Date(Date.now() + 1000*60*60)}); // Set-Cookie: lang=en
    // res.cookie('password', user.password, {expires: new Date(Date.now() + 1000*60*60)}); // Set-Cookie: lang=en

    res.redirect('/');
  } else {
    // failed attempt
    res.render('login', { errorFeedback: 'Failed to find a user.' });
  }
  console.log(`You attempted to log in with ${username}. User: ${user && user.username}`);
})

app.get("/signup", (req, res) => {
  res.render("signup")
})

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log("password: ", req.body.password);
  console.log("bcrypt: ",bcrypt.hashSync(req.body.password, 15));

  data.users.push({username: username, password: password});
  res.cookie('username', username, {expires: new Date(Date.now() + 1000*60*60)}); 
  res.redirect('/');
})

app.get("/logout", (req, res) => {
  res.redirect("/login")
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

