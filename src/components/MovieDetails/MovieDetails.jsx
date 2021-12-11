import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { Link } from 'react-router-dom'; 


function MovieDetails( props ){
    
    const movieDetails = useSelector( store => store.movieDetails);
    const genres = useSelector( store => store.genres);
    // const [name, setName] = useState( null );

    const dispatch = useDispatch();

    return(
        <div>
            <h1>{genres.name}</h1>
            <h1>{genres.id}</h1>

            <h1>{movieDetails.id}</h1>
            <h1>{movieDetails.title}</h1>
            <img src={movieDetails.poster}/>
            <h1>{movieDetails.description}</h1>

            <Link to="/"><button>Back to Movie List</button></Link>
        </div>
        
    )
}

export default MovieDetails;