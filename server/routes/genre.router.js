const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // Add query to get all genres
  console.log('why????')
  const query = `SELECT genres.name, movies.title FROM movies JOIN movies_genres on movies.id=movies_genres.movie_id JOIN genres ON movies_genres.genre_id=genres.id
  WHERE movies.id=$1;`
  pool.query(query, [req.params.id])
  .then( result => {
    console.log('------------>', result.rows);
    res.send(result.rows);
  })
  .catch(err =>{
    console.log('error in GET GENRES router', err);
    res.sendStatus(500)
  })
});

module.exports = router;
