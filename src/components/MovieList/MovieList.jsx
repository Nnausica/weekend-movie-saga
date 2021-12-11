import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { Link } from 'react-router-dom'; 


function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
        // dispatch({ type: 'SET_GENRES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    //map through movies and then create a dispatch for each movie as an object
                    const setMovieDetail = ()=>{
                        dispatch({
                            type: 'SET_MOVIE_DETAILS',
                            payload:{id: movie.id, 
                                    title: movie.title,
                                    poster: movie.poster, 
                                    description: movie.description}
                        })
                    }

                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <Link to="/details">
                            <img src={movie.poster} alt={movie.title} onClick={setMovieDetail}/>
                            </Link>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;