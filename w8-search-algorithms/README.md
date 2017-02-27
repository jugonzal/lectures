Today we used a small collection of javascript algorithms to understand some of 
the decisions that affect performance of an algorithm or even a database system.

We started by challenging some of the common assumptions about databases today,
such as the fact that we always need to create a 'Key' for each table.

Here is the code we looked at (thanks David!)

https://gist.github.com/davidvandusen/17f5a6c682e6a515093b80d427c6e07d

The associative array is a great example of what we would attempt to do as a 
first solution: easy to implement but not very efficient once you start adding 
data. At this point we had a conversation about evaluating the "big O" of an 
algorithm and understood that the better algorithms are those that don't need to look through ALL the data.

A hash function was a small improvement that could make a big difference and so 
this was our next step. Yet there are challenges that remain in this approach, 
particularly collisions and balancing the hash table.

For a better feel on how databases work, we looked at Binary Search Trees.
This was a great opportunity to explore more advanced algorithms that remain 
stable with larger datasets while also understanding how Databases and Indices 
work behind the scenes.

We confirmed that everyone is well-versed in the art of setting up your own
database server, whether SQL or not.   More interesting it is to explore
a bit further about the equivalency between these two very different types
of databases.

For that we talked about what happens in a simple query such as:

```sql 
select user_id, count(*) as how_many
from blog
where posting_time + 60 > sysdate
group by user_id
having count(*) >= 30
order by how_many desc;
```

or 

```sql
select users.user_id, users.email, count(*), max(classified_ads.posted)
from users, classified_ads
where users.user_id = classified_ads.user_id
group by users.user_id, users.email
order by upper(users.email);
```

The two main take-aways for those of us learning about databases are:
- Just as SQL databases use joins to represent relationships, other databases such as Mongo will rely on nesting objects to reflect the same relationships.
- The power of SQL to aggregate, calculate, filter is also available in Mongo through their 'aggregate' method which allows several operations to be chained and applied to a collection.

The following article provides a good starting point to compare the two:

https://www.mongodb.com/blog/post/mongodb-vs-sql-day-14-queries
    

