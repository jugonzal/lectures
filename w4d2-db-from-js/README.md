## SQL from Javascript

In this lecture we took our first steps to talk to a database (Postgres in this
case) from Node. We've used the [pg](https://www.npmjs.com/package/pg) package
(and alternatively [pg-then](https://www.npmjs.com/package/pg-then)) to
implement the simplest query interface available. 

As compact as [the demo code](https://github.com/jugonzal/lhl-lectures/tree/master/w4d2-db-from-js/albums.js) is, it is a good opportunity to discuss the following:

- When using databases, make sure you know which library/driver you are using to connect to your particular database server.  In our case `pg` is only good for connecting to PostgreSQL.
```javascript
const pg = require('pg');
```

- Make sure your connection settings are valid.  Test them using the `psql` interface. 

- Notice how the `query` function takes a callback as a parameter. It is very important to remember that when it comes to databases, you will likely have to assume that data will come back *asynchronosuly*. This means that your code could do other things while it waits for data. This is a frequent source of errors when starting to write queries from javascript.

- Sanitizing user input refers to the practice of making sure ANY parameters that are passed to a query have been checked and double-checked *before* they are used because the most common vulnerability in a web system is something called "SQL Injection".  

The `pg-then` package uses [ES6
promises](http://www.datchley.name/es6-promises/) to reduce callback hell when
talking to Postgres. This is a highly recommended pattern for everything
asynchronous! Check out [`musicdb.js`](https://github.com/jugonzal/lhl-lectures/tree/master/w4d2-db-from-js/code/musicdb.js) and
[`musicdb-promises.js`](https://github.com/jugonzal/lhl-lectures/tree/master/w4d2-db-from-js/code/musicdb-promises.js) to see the differences. Both
do the exact same thing.

DB setup and seed data can be found in the [`sql`](https://github.com/jugonzal/lhl-lectures/tree/master/w4d2-db-from-js/sql/) folder.

Here is the [documentation](https://www.npmjs.com/package/pg) to the `pg` package we used.
