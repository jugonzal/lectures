const express = require("express")
const bodyParser = require("body-parser")

const app = express()
const PORT = process.env.PORT || 8000; // default port 8000

// parse application/x-www-form-urlencoded form data into req.body
app.use(bodyParser.urlencoded({ extended: false }))

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.set("view engine", "ejs")

const data = {
  users: [
    { username: 'monica', password: 'testing' },
    { username: 'khurram', password: 'testing2' },
    { username: 'juan', password: 'pwd'}
  ]
}

function obfuscate (word) {
  // let newWord = "";
  // for (let i=0; i<word.length;i++) {
  //   newWord += (word[i]+5);
  // }
  return 'X'+word;
}

function deobfuscate (word) {
  // if (word) {
  //   return 
  // }
  // let newWord = "";
  // for (let i=1; i<word.length;i++) {
  //   newWord += word[i];
  // }
  // return newWord;  
  return word.substring(1)
}

function attemptLogin(username, password) {
  for (user of data.users) {
    if (user.username === username && user.password === password) {
      return user;
    }
  }
}

// Show the treasure if they are logged in, otherwise redirect to LOGIN page.
app.get("/", (req, res) => {
  const currentUsername = req.cookies['username'];
  let currentPassword = ""
  if (req.cookies['password']) {
     currentPassword = deobfuscate( req.cookies['password']);
  } 
  if (attemptLogin(currentUsername,currentPassword)) {
    res.render('treasure', { currentUser: currentUsername });
  } else {
    res.redirect("login");
  }
});

app.get("/login", (req, res) => {
  res.render("login")
})

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = attemptLogin(username, password);

  if (user) {
    // success
    // cookies set to expire in 1 hour
    res.cookie('username', user.username, {expires: new Date(Date.now() + 1000*60*60)}); // Set-Cookie: lang=en
    res.cookie('password', obfuscate(user.password), {expires: new Date(Date.now() + 1000*60*60)}); // Set-Cookie: lang=en

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
  data.users.push({username: username, password: password});
  res.cookie('username', username); 
  res.redirect('/');
})

app.get("/logout", (req, res) => {
  res.redirect("/login")
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

