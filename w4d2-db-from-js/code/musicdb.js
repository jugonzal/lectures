const pg = require('pg');

// Create a config to configure both pooling behavior
// and client options.
// Note: all config is optional and the environment variables
// will be read if the config is not present
// You can put this data on a .env file if you'd like.
const config = {
  user: 'labber', //env var: PGUSER
  database: 'vagrant', //env var: PGDATABASE
  password: 'labber', //env var: PGPASSWORD
  port: 5432 //env var: PGPORT
};

// Instantiate a new client
// If there's no config object,
// the client will read connection information from
// the same environment variables used by postgres cli tools.

module.exports = (function() {

  const db = new pg.Client(config);
  db.connect((err) => { // Open DB connection
    if (err) throw err;
  })

  // Get all album tracks for an artist.
  // The callback receives result.rows from `pg`
  const getAlbumTracks = (artistName, albumName, callback) => {

      let query =
        `SELECT
        tracks.title AS title,
        albums.title AS album,
        artists.name AS artist
        FROM tracks
        JOIN albums ON tracks.album_id = albums.id
        JOIN artists ON albums.artist_id = artists.id
        WHERE artists.name = $1::text AND albums.title = $2::text;`;

      db.query(query, [artistName, albumName], (err, result) => {
        if (err) {
          console.log("Something went wrong:", err);
          callback([]);
        }
        else {
          callback(result.rows);
        }
        // db.end(); // Close db connection - if we don't do this the app doesn't close.
      });
  }

  return {
    getAlbumTracks: getAlbumTracks   
    closeEverything: function () {
      db.end();
    } 
  }

// Add other query functions here and export them below

})()

// module.exports = {
//   getAlbumTracks: getAlbumTracks
// };
