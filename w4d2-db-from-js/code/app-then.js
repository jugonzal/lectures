// const musicdb = require('./musicdb') // regular version
const musicdb = require('./musicdb-promises') // promises version

// See musicdb.js for function interface
musicdb.getArtists()
  .then(results => {
    results.rows.forEach((row) => {
      let output = [];
      for (column in row) {
        output.push(`${column}: ${row[column]}`);
      }
      console.log(output.join(', '));
    })
  })
  .catch(err => console.log(err));


// artistName, albumName, (rows) => {
//   console.log(`Found ${rows.length} tracks:\n`);
//   rows.forEach((row) => {
//     let output = [];
//     for (column in row) {
//       output.push(`${column}: ${row[column]}`);
//     }
//     console.log(output.join(', '));
//   })
// });
