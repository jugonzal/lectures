
module.exports = (function() {

  const { Client } = require('pg')
  const client = new Client()

  client.connect()

  function titleOfAlbum (callback) {
    client.query('select title from albums', [], (err, res) => {
      if (err) {
        console.log("We found an error")
      } else {
        callback(res.rows[0].title) 
      }
      // console.log(err ? err.stack : res.rows[0].title) // Hello World!
      // client.end()
    })
  }

  function tracksOfAlbum (album, callback) {
    client.query(`
      select tracks.title from tracks, albums
        where tracks.album_id = albums.id
        and albums.title = $1` , [album])
    .then(response => {
      callback(null, response.rows)
    })
    .catch(error => {
      callback(error)
    })
  }

  return {
    tracksOfAlbum: tracksOfAlbum,
    titleOfAlbum: titleOfAlbum
  }

})();


// titleOfAlbum(function(output) {
//   console.log("Title found ", output)
// })

// tracksOfAlbum("Cowboy Bebop", function(err, output) {
//   if (!err) {
//     console.log("Track found ", output)
//   } else {
//     console.log(err)
//   }
// })
