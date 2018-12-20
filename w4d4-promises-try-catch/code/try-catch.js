let magicNumber = Number(process.argv[2])

try {
  if (magicNumber > 5) {
    let a = undefined
    // a.gotcha
    throw "Magic is too strong!"
  } else
    console.log(magicNumber)
}
catch (e) {
  console.log( "Oh oh...  ", e)
  let newNumber = Math.floor((Math.random() * 5) + 1)
  console.log(`Maybe try ${newNumber}?`);
}
