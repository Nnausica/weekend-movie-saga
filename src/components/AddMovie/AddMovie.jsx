import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { Link } from 'react-router-dom'; 

function AddMovie( props ){
    // const reducerName = useSelector( store => store.reducerName );
    // const [name, setName] = useState( null );

    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch({ type: 'FETCH_NEWMOVIE', payload:newMovie});
    // }, []);

    const[titleChange, setNewTitle]= useState('');
    const[posterChange, setNewPoster]= useState('');
    const[descriptionChange, setNewDescription]= useState('');
    const[genreChange, setNewGenre]= useState(1);



    const newTitle = ()=>{
        console.log('in titleChange');
        setNewTitle(event.target.value);
    }

    const newPoster = ()=>{
        console.log('in posterChange');
        setNewPoster(event.target.value);
    }

    const newDescription = ()=>{
        console.log('in descriptionChange');
        setNewDescription(event.target.value);
    }

    const newGenre = ()=>{
        console.log('in genreChange');
        setNewGenre(event.target.value);
    }

    const newMovie = useSelector(store=> store.newMovie);


    return(
        <div>
            <h1>AddMovie</h1>
            <input type="text" placeholder="Movie Title" onChange={(event)=>newTitle(event)}></input>
            <input type="text" placeholder="Movie Poster" onChange={(event)=>newPoster(event)}></input>
            <input type="text" placeholder="Movie Description" onChange={(event)=>newDescription(event)}></input>

            <p>What is the Movie's Genre?</p>

        <label for="Genres">Genre:</label>

            <select value={newMovie.genre} onChange={(event)=>newGenre(event)}>
            {/* <option value=""></option> */}
            <option value={1}>Adventure</option>
            <option value={2}>Animated</option>
            <option value={3}>Biographical</option>
            <option value={4}>Comedy</option>
            <option value={5}>Disaster</option>
            <option value={6}>Drama</option>
            <option value={7}>Epic</option>
            <option value={8}>Fantasy</option>
            <option value={9}>Musical</option>
            <option value={10}>Romantic</option>
            <option value={11}>Science Fiction</option>
            <option value={12}>Space-Opera</option>
            <option value={13}>Superhero</option>
            </select>

        <Link to="/"><button onClick={()=>dispatch({type:'FETCH_NEWMOVIE', payload:{title:titleChange, poster:posterChange, description:descriptionChange, genre:genreChange } })}>Save</button></Link>
        
        <Link to="/"><button>Cancel</button></Link>



        </div>

    )
}

export default AddMovie;