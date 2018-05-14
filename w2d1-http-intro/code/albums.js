var request = require('request');

// Get request
request.get('http://jsonplaceholder.typicode.com/albums?userId=8', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  console.log('body length:', body.length);
  var data = JSON.parse(body);
  console.log("actual data:", data[0].title)
  console.log('One more',data[1].title);
});

//post request
request.post(
    {
      url:'http://jsonplaceholder.typicode.com/albums', 
      form: {title:'This is my new album'}
    }, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  console.log('body length:', body.length);
});
console.log('This is the END')

