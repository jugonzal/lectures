var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  })
  .listen(3000, 'localhost', function (err, result) {
    if (err) {
      console.log(err);
    }

    console.log('Running at http://0.0.0.0:3000');
  });


const express = require("express");
const app = express();
const countries = [
  "Canada",
  "Poland",
  "Brazil",
  "Korea",
  "Zimbabwe",
  "China",
  "Japan",
  "Taiwan",
  "Americuh!",
  "Mexico",
  "France",
  "Italy"
]

app.get("/countries", (req, res) => {
  res.json(countries);
});

app.listen(3002, function(err) {
  console.log("Server started");
});


