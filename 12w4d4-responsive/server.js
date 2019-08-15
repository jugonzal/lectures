const express = require('express');
const morgan = require('morgan');

// Initialize express
const app = express();

app.use(express.static('public'))

app.use(morgan('dev'));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
