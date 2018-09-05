
const DB = [{
  title: "Greatest Hits",
  artist: "Queen",
  year: 1989
},{
  title: "Time Out",
  artist: "Dave Brubeck",
  year: 1959
}]

function create (newLP) {
  DB.push(newLP)
}

create({
  title: "Kind of Blue",
  artist: "Miles Davis",
  year: 1966
})

// console.log(DB);

function read (query, value) {
  for (let lp of DB) {
    if (lp[query] == value) {
      //lp.year
      //lp.artist
      return lp;
    }
  }
}

function all () {
  return DB;
}

module.exports = {
  read: read,
  create: create,
  all: all
}


// console.log(read('year',1966))

// console.log(read('artist','Dave Brubeck'))