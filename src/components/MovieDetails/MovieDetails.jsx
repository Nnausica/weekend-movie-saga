import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { Link } from 'react-router-dom'; 




function MovieDetails( props ){
    
    const movieDetails = useSelector( store => store.movieDetails);
    // const [name, setName] = useState( null );

    const dispatch = useDispatch();

    return(
        <div>
            <h1>{movieDetails.id}</h1>
            <h1>{movieDetails.title}</h1>
            <img src={movieDetails.poster}/>
            <h1>{movieDetails.description}</h1>
        </div>
    )
}

export default MovieDetails;