// const musicdb = require('./musicdb') // regular version
// const musicdb = require('./musicdb') // promises version
const musicdb = require('./live')

// var artistName = process.argv[2];
var albumName = process.argv[2];


musicdb.tracksOfAlbum(albumName, function(err, output) {
  if (!err) {
    console.log("Track found ", output)
  } else {
    console.log(err)
  }
})

