// const musicdb = require('./musicdb') // regular version
// const musicdb = require('./musicdb') // promises version
const musicdb = require('./live')

// var artistName = process.argv[2];
var albumName = process.argv[2];

// See musicdb.js for function interface
musicdb.tracksXalbum(albumName, (err, rows) => {
  console.log(`Found ${rows.length} tracks:\n`);
  rows.forEach((row) => {
    console.log('naked row ',row)
    let output = [];
    for (column in row) {
      output.push(`${column}: ${row[column]}`);
    }
    console.log(output.join(', '));
  })

  musicdb.finish();
});


// musicdb.getAlbumTracks(artistName, albumName, (rows) => {
//   console.log(`Found ${rows.length} tracks:\n`);
//   rows.forEach((row) => {
//     let output = [];
//     for (column in row) {
//       output.push(`${column}: ${row[column]}`);
//     }
//     console.log(output.join(', '));
//   })
// });
