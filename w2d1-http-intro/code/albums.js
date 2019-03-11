var request = require('request');

// Get request
// Some URLs:
// 	http://jsonplaceholder.typicode.com/albums?userId=8
//  https://techmeme.com/img/techmeme135.png
request.get('http://jsonplaceholder.typicode.com/albums?userId=8', function (error, response, body) {
	// console.log('Got it!');
	if (error) {
		console.log("There was an ERROR: ", error);
	} else if (response.statusCode == 200) {
		// console.log("Body ---------------- ")
		console.log(body)
	} else {
		console.log("Weird Status: ", response.statusCode)
	}
});
// the following line was used to prove that the 
// response could come AFTER the program appeared 
// to end.
// console.log("All Done.  Out of here.")









//post request
// request.post(
//     {
//       url:'http://jsonplaceholder.typicode.com/albums', 
//       form: {title:'This is my new album'}
//     }, function (error, response, body) {
// });

