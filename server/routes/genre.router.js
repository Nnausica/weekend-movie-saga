const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  const query = 'SELECT genres.name FROM movies JOIN movies_genres on movies.id=movies_genres.movie_id JOIN genres on genres.id=movies_genres.genre_id WHERE movies.id = `:id`;'
  pool.query(query)
  .then( result => {
    res.send(results.rows);
  })
  .catch(err =>{
    console.log('error in GET GENRES router', err);
    res.sendStatus(500)
  })
});

module.exports = router;
