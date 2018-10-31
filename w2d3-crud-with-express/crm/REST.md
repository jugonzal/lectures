// TODO
// - make it look nicer

GET     /               Home
GET     /users          Show all users in a list
GET     /users/name/:someName 
GET     /users/phone/:somePhone
GET     /users?name=someName

GET     /new/user       show the form to add a new user
POST    /users          Adding a new user

GET     /users/:id      Shows info about one user
PUT     /users/:id      Update an existing user
DELETE  /users/:id      Delete an existing user


GET     /users/:id/companies




GET     /games
POST    /games
GET     /games/mediterranean
        /games/tictactoe
PUT     /games/risk
delete  /games/tictactoe