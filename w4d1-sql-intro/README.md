# Intro to relational databases and SQL

Tables! Schemas! Relations! Primary keys! Foreign keys! Welcome to the world of relational databases and SQL.

* Quick review: why do we need databases?
* The main types of database
  * Key-value storage (Redis, Memcache)
  * Document (MongoDB, CouchDB, Cassandra)
  * Relational/SQL (SQLite, PostgreSQL, mySQL, Oracle)
    * Why are relational databases so popular? It's all about consistency and flexibility.

## How data is organized in relational databases

* Database: the structure of information and the data stored within that structure
  * Tables: represent collections of information
    * Rows: represents a single object in a particular collection/table
      * Columns (or fields)
* Keys
  * Natural keys
    * Some column in a table that is naturally unique between each object
  * Primary keys
    * Provide a way to uniquely identify each row in a table.
    * By convention, we use an auto-incrementing counting number. This column is named identically (usually `id`) in every table for programming convenience.
  * Foreign keys
    * Describe the association between two tables.
    * The data in a foreign key column in the child table must be the same as the data in the primary key column of a row in the parent table.

## ERD - Entity Relationship Diagram

ERD is a well-established standard used to visualize database relationships (and more!). There are several tools available to draw ERDs and even convert them directly into SQL code to create tables. [Lucidchart](http://www.lucidchart.com) is a good example of online ERD.

Here's an ERD example for the music database we've discussed in class:

![Music Database ERD](https://fzero.github.io/lhl-lectures/assets/musicdb.svg)

## Querying using SQL

Relational databases have their own language to manipulate data, called [SQL](https://en.wikipedia.org/wiki/SQL). The language itself is fairly simple, with the basic CRUD operations represented by four commands: `INSERT`, `SELECT`, `UPDATE` and `DELETE`.

Each one of these commands have a number of options to restrict operations using conditions (`WHERE`), aggregate results (`SUM`, `AVERAGE`, ...), group data (`GROUP BY`) and sort results (`ORDER BY`).

A SQL statement can (and should) be divided in multiple lines. The end of the statement is always marked by a semicolon (`;`).

`SELECT` statements are broken up into six clauses:

1. `SELECT` - list the data you wanna get
2. `FROM` - list the tables that you wanna get data from
3. `WHERE` - filter down which rows are gonna come in the output
4. `GROUP BY` - treat a bunch of rows that would have been in the output as a single row
5. `HAVING` - is like WHERE for the result of aggregated data
6. `ORDER BY` - what order do you want the resulting rows to come back in

Example:
```sql
SELECT
  total_amount
FROM
  invoices
WHERE
  total_amount > 100
ORDER BY
  total_amount DESC
LIMIT 10;
```

### `JOIN`s

`JOIN`s allow you to cross-reference data between two tables. They put the _relational_ in _relational databases_.

Example:
```sql
-- Find all tracks including with artist name and album name

SELECT
  tracks.title AS title,
  albums.title AS album,
  artists.name AS artist
FROM tracks
JOIN albums ON tracks.album_id = albums.id
JOIN artists ON albums.artist_id = artists.id;
```

### `OUTER JOIN` vs `INNER JOIN`

The difference is simple:
* `OUTER JOIN`s will return all results present on the left side (or first table) of the join **no matter if related data is present on the right side**.
* `INNER JOIN`s will only return data if **both sides of the relationship contain the referenced data**.

In other words, `INNER JOIN`s need reciprocity, while `OUTER JOIN`s don't care.

When the type of `JOIN` isn't specified, SQL will assume you're talking about a `LEFT INNER JOIN`.

I've created a [seed script for music database](https://github.com/jugonzal/lhl-lectures/blob/master/w4d1-sql-intro/pgseed.sql) 
that you can use to recreate the database we used during lecture.  This can be run simly with:

```shell
psql < pgseed.sql
```

You can also find all the various [examples of queries](https://github.com/jugonzal/lhl-lectures/blob/master/w4d1-sql-intro/queries.sql) we ran in class.