

module.exports = (function() {

  const { Client } = require('pg')
  const client = new Client({
    user: 'vagrant',
    host: 'localhost',
    database: 'vagrant',
    password: 'labber'
  })
  client.connect()


  function tracksByAlbum (album, callback) {
    client.query(`
      select t.title as Track, a.title as Album
        from albums as a, tracks as t
        where t.album_id = a.id
        and a.title = $1::text`, [album, other], (err, res) => {
            // console.log(res.rows)
            if (err) {
              callback([])
            } else {
              callback(res.rows)
            }
    })  
  }

  async function allAlbums (callback) {
    let res = await client.query(`select title, year from albums`)
    res.rows.push('Final')
    callback(res)
  }

  function finish() {
    console.log("bye bye")
    client.end()
  }

  return {
    tracksByAlbum: tracksByAlbum,
    allAlbums: allAlbums,
    finish: finish 
  }

})()

// tracksByAlbum('Cowboy Bebop', (rows) => {
//   console.log('Found ',rows.length,' in Cowboy')
//   tracksByAlbum(`'Classics' ; delete * from tracks; `, (rows) => {
//     console.log('Found ',rows.length,' in Classics')
//     finish()
//   })
// })




