import { createGenerateClassName } from '@material-ui/styles';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { Link } from 'react-router-dom'; 


function MovieDetails( props ){
    
    const movieDetails = useSelector( store => store.movieDetails);
    const genres = useSelector( store => store.genres);
    // const [name, setName] = useState( null );

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES', payload:movieDetails.id});
    }, []);


    const dispatch = useDispatch();

    return(
        <div>
            <h1>Movie Details</h1>
                
                {genres.map(genres => {

                    return(
                    <div>
                        <h3>{genres.name}</h3>
                    </div>
                    )})}

            
                <h3>{movieDetails.id}</h3>
                <h3>{movieDetails.title}</h3>
                <img src={movieDetails.poster}/>
                <h3>{movieDetails.description}</h3>
            

            <Link to="/"><button>Back to Movie List</button></Link>
           
        </div>
        
    )
}

export default MovieDetails;