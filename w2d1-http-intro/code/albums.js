var request = require('request');

// Get request
// Some URLs:
// 	http://jsonplaceholder.typicode.com/albums?userId=8
//  https://techmeme.com/img/techmeme135.png
request('http://jsonplaceholder.typicode.com/albums?userId=8', function (error, response, body) {
  if (error) {
	console.log('error:', error); // Print the error if one occurred
	return;
  } else if (response && response.statusCode === 200) {
	  console.log('body:', body); // Print the HTML for the Google homepage.
	  var data = JSON.parse(body);
	  // console.log('data:', data);
	  data.forEach(function(user) {
	  	console.log(user.title);
	  })
  } else {
  	console.log("Some other status code: ",  response.statusCode)
  }
});


// the following line was used to prove that the 
// response could come AFTER the program appeared 
// to end.
console.log("All Done.  Out of here.")









//post request
// request.post(
//     {
//       url:'http://jsonplaceholder.typicode.com/albums', 
//       form: {title:'This is my new album'}
//     }, function (error, response, body) {
// });

