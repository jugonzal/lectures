-- all tracks, with artist name and album name

SELECT
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
WHERE albums.artist_id = artists.id 
AND tracks.album_id = albums.id;


-- all artists with tags

SELECT
  artists.name AS artist, tags.*
FROM artists, tags, artists_tags as at 
WHERE at.artist_id = artists.id 
AND at.tag_id = tags.id

SELECT
  artists.name AS artist,
  string_agg(tags.name, ', ') AS tag,
  count(*)
FROM artists, tags, artists_tags as at 
WHERE at.artist_id = artists.id 
AND at.tag_id = tags.id
GROUP BY artist;




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
  artists.name, count(artists.id)
FROM artists
JOIN albums ON albums.artist_id = artists.id
GROUP BY artists.id
having count(artists.id) > 1

SELECT
  artists.name, count(artists.id)
FROM artists
JOIN albums ON albums.artist_id = artists.id
WHERE albums.year > 2000
GROUP BY artists.id
having count(artists.id) > 1;


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


-- demonstrate the usefulness of an outer join when we don't know where data will exist

select albums.title, sum(count) 
from tracks
left outer join plays on plays.track_id = tracks.id
inner join albums on tracks.album_id = albums.id
group by albums.title;






