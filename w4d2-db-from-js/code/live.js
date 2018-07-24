const { Client } = require('pg')
const client = new Client({
  user: 'vagrant',
  host: 'localhost',
  database: 'vagrant',
  password: 'labber',
  port: 5432
})

client.connect()

let query = "select t.title from tracks t, albums b, artists a where t.album_id = b.id and b.artist_id = a.id and a.name = 'The Seatbelts'"

client.query(query, (err, res) => {
  console.log(err ? err.stack : res.rows) // Hello World!
  client.end()
})