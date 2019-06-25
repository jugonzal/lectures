
function Do () {
	try {
		let a = 2 + 3 
		throw "Tantrum"
	} catch (err) {
		console.log("Something went wrong: ", err)
	}
  
}

Do()
