
module.exports = (function() {
  const { Client } = require('pg')
  const client = new Client({
    user: 'vagrant',
    host: 'localhost',
    database: 'vagrant',
    password: 'labber'
  })
  client.connect()

  function tracksByAlbum(albumName, callback) {

    client.query(`
      select t.title
        from albums as a, tracks as t
        where t.album_id = a.id
        and a.title = $1::text;`, [albumName], (err, res) => {
          if (err) {
            callback(err)
          } else {
            // should expect res to be full of data
            // console.log(res.rows)
            callback(null, res.rows)
          }
      // client.end()
    })
    // is there anything else I can do????
    // nope
    // callback("Done with this")
  }

  return {
    tracksXalbum: tracksByAlbum,
    finish: function () { client.end }
  }
})()


// tracksByAlbum('Cowboy Bebop', (err, data) => {
//   if (err) {
//     console.log("Error: ", err)
//   } else {
//     console.log(data)
//   }
// })



