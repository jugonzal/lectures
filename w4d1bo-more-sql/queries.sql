-- all tracks, with artist name and album name

EXPLAIN ANALYZE SELECT
  tracks.title AS title,
  albums.title AS album,
  artists.name AS artist
FROM tracks
JOIN albums ON tracks.album_id = albums.id
JOIN artists ON albums.artist_id = artists.id;

-- same as above
-- using WHERE to specify an IMPLICIT JOIN

SELECT
  tracks.title AS title,
  albums.title AS album,
  artists.name AS artist
FROM tracks, albums, artists
WHERE albums.artist_id = artists.id AND tracks.album_id = albums.id;

-- another query, this time only with Albums and Artists, but
-- adding an additional condition.

SELECT * 
FROM albums, artists
WHERE albums.artist_id = artists.id
  AND albums.year < 2005;

-- sometimes joins get more than 2 tables involved.   
-- This was a good opportunity to talk about many-to-many
-- relationships... as in:

SELECT *                   
FROM tags, artists, artists_tags
WHERE artists_tags.artist_id = artists.id
  AND artists_tags.tag_id = tags.id
  AND (tags.name = 'instrumental'
  OR tags.name = 'electronic');


-- at this point we started to wonder how to find those 
-- artists that would have 2 different tags.   But this 
-- solution proved elusive.   Simply adding another AND
-- did not work as it would return an empty result set.
-- The OR operator seemed to cause a mess...

-- But the IN operator helped us get there by creating
-- a short list of values to be matched.

SELECT *                   
FROM tags, artists, artists_tags
WHERE artists_tags.artist_id = artists.id
  AND artists_tags.tag_id = tags.id 
  AND tags.name in (
    select name from tags where id > 2);

-- Lastly, to solve the question about which artists
-- are categorized in two tags, we used GROUP BY 

SELECT 
  artists.name, 
  count(*)
FROM tags, artists, artists_tags
WHERE artists_tags.artist_id = artists.id
  AND artists_tags.tag_id = tags.id 
  AND tags.name in (
    select name from tags where id > 2) 
GROUP BY artists.name 
HAVING count(*) > 1;


SELECT 
  artists.name, 
  string_agg(tags.name, ' - ') as which
FROM tags, artists, artists_tags
WHERE artists_tags.artist_id = artists.id
  AND artists_tags.tag_id = tags.id 
  AND tags.name in (select name from tags where id > 2) 
GROUP BY artists.name 
HAVING count(*) > 1;

EXPLAIN ANALYZE SELECT 
  artists.name, 
  string_agg(tags.name, ' - ')
FROM artists_tags
JOIN artists ON artists_tags.artist_id = artists.id
JOIN tags ON artists_tags.tag_id = tags.id 
WHERE tags.name in ('instrumental', 'electronic') 
GROUP BY artists.name 
HAVING count(*) > 1;

-- and we can add another query instead of a fixed list 
-- of tags.  As long as that query returns a single column
-- such as:

SELECT artists.name, count(*)
FROM tags, artists, artists_tags
WHERE artists_tags.artist_id = artists.id
  AND artists_tags.tag_id = tags.id
  AND tags.name in (
    SELECT name 
    FROM tags 
    WHERE id > 2
  )
GROUP BY artists.name;

-- # of albums per artist

SELECT
  artists.name as artist,
  COUNT(albums.id) as album_count
FROM artists
JOIN albums ON albums.artist_id = artists.id
GROUP BY artists.id;


-- # of albums per artist
-- who have more than 2 albums, in descending order

SELECT
  artists.name as artist,
  COUNT(albums.id) as album_count
FROM artists
JOIN albums ON albums.artist_id = artists.id
GROUP BY artist
HAVING COUNT(albums.id) >= 2
ORDER BY album_count DESC;


-- average tracks per album

SELECT COUNT(distinct tracks.id) / COUNT(distinct albums.id) AS average
FROM albums, tracks;


-- same as above
-- but using an implicit JOIN instead of DISTINCT

SELECT COUNT(tracks.id) / COUNT(distinct albums.id) AS avg
FROM albums, tracks
WHERE tracks.album_id = albums.id;


-- average number of tracks in albums of each tag, in order

SELECT
  tags.name as tag,
  COUNT(tracks.id) / COUNT(distinct albums.id) AS avg
FROM tags, artists, artists_tags AS at, albums, tracks
WHERE at.artist_id = artists.id AND at.tag_id = tags.id
AND albums.artist_id = artists.id
AND albums.id = tracks.album_id
GROUP BY tag
ORDER BY avg DESC;


-- demonstrate the usefulness of an outer join 
-- when we don't know where data will exist

select albums.title, sum(count) 
from tracks
left outer join plays on plays.track_id = tracks.id
inner join albums on tracks.album_id = albums.id
group by albums.title;
















