## SQL from Javascript

In this lecture we took our first steps to talk to a database (Postgres in this
case) from Node. We've used the [pg](https://www.npmjs.com/package/pg) package to
implement the simplest query interface available. 

As compact as [the demo code](https://github.com/jugonzal/lectures/tree/master/w4d2-db-from-js/code) is, it is a good opportunity to discuss the following:

- When using databases, make sure you know which library/driver you are using to connect to your particular database server.  In our case `pg` is only good for connecting to PostgreSQL.
```javascript
const pg = require('pg');
```

- Make sure your connection settings are valid.  Test them using the `psql` interface. This is important because the database may accept local connections but may not be OK with "remote" connections.  

```shell
psql -d vagrant -U vagrant -h 127.0.0.1 -p 5432 -W
```

- Even with all the precautions, we still ran into some connection issues from our code.  This is the page that explained why and how to [allow remote connections](https://blog.bigbinary.com/2016/01/23/configure-postgresql-to-allow-remote-connection.html). As I mentioned, it is unlikely that you will have to be troubleshooting this kind of thing in the near future because this is the realm of sysadmins.  However, it is always good to know. 

- Notice how the `query` function takes a callback as a parameter. It is very important to remember that when it comes to databases, you will likely have to assume that data will come back *asynchronosuly*. This means that your code could do other things while it waits for data. This is a frequent source of errors when starting to write queries from javascript.

- Sanitizing user input refers to the practice of making sure ANY parameters that are passed to a query have been checked and double-checked *before* they are used because the most common vulnerability in a web system is something called "SQL Injection".  

- We talked about proper code structure to create a database layer. This involved using what is known as the _module pattern_ which relies on a self-executing function and closures to make sure the database is managed by a module but all its functions are available to other areas of the code. 

During class I used a newer approach to handle the _waiting for results_ using `async/await`.  We'll have another opportunity this week to review this but please take a look at the `async function allAlbums` as an example of how to simplify your code. However remember that you should have a _newer_ version of Node.js if you are going to atttempt this.

DB setup and seed data can be found in the [`sql`](https://github.com/jugonzal/lhl-lectures/tree/master/w4d2-db-from-js/sql/) folder.

Here is the [documentation](https://node-postgres.com/) to the `pg` package we used.
