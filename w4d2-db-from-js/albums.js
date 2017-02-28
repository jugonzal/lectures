const pg = require('pg');

// Create a config to configure both pooling behavior
// and client options.
// Note: all config is optional and the environment variables
// will be read if the config is not present
// You can put this data on a .env file if you'd like.
const config = {
  user: 'labber', //env var: PGUSER
  database: 'vagrant', //env var: PGDATABASE
  password: 'labber', //env var: PGPASSWORD
  port: 5432 //env var: PGPORT
};

// Instantiate a new client
// If there's no config object,
// the client will read connection information from
// the same environment variables used by postgres cli tools.
const db = new pg.Client(config);

db.connect (error => {
  if (error) throw error;

  var someId = process.argv[2];

  // if (typeof(someId) !== "number") throw error;

  db.query(`select title from albums where id = ${someId}`, (error, results) => {
    if (error) throw error;

    // display all results received
    results.rows.forEach(row => {
      for (column in row) {
        console.log(column, row[column]);
      }
    });

    console.log("Or grab one field",results.rows[0].title);

    db.end(error => {
      if (error) throw error;
    });
  });

  console.log("Done with that.");

});
