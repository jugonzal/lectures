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
    { username: 'monica', password: 'testing', unique: '9090'},
    { username: 'khurram', password: 'testing2', unique: '8080' }
  ]
}

function validUser (username) {
  for (user of data.users) {
    if (user.unique === username ) {
      return user;
    }
  }  
}

function hashForUser(username) {
  return Math.random().toString().substr(10,5);
}

function checkLogin(username, password) {
  for (user of data.users) {
    if (user.username === username && bcrypt.compareSync(password, user.password)) {
      return user;
    }
  }
}

// Show the treasure if they are logged in, otherwise redirect to LOGIN page.
app.get("/", (req, res) => {
  const currentUsername = req.cookies['username'];
  currentUser = validUser(currentUsername)
  if (currentUser) {
    res.render('treasure', { currentUser: currentUser.username });
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
    // cookies set to expire in 2 minutes
    res.cookie('username', user.unique, {expires: new Date(Date.now() + 1000*60*2)}); // Set-Cookie: lang=en

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
  // const password = req.body.password;
  const password = bcrypt.hashSync(req.body.password, 15);

  let uniqueID = hashForUser(username);
  data.users.push({username: username, password: password, unique: uniqueID});
  console.log(data);
  res.cookie('username', uniqueID, {expires: new Date(Date.now() + 1000*60*5)}); 
  res.redirect('/');
})

app.get("/logout", (req, res) => {
  res.redirect("/login")
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

