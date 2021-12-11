import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
// watchers- same as the index
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_GENRES', getAllGenres);
    yield takeEvery('FETCH_NEWMOVIE', fetchNewMovie);
}


//generator functions 'TAGS_TAGS' same as the reducer
function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}

function* fetchNewMovie(action){
    console.log('add new movie action:', action.payload);
    try {
        const movies = yield axios.post(`/api/movie/`, { title: action.payload.title, poster: action.payload.poster, description: action.payload.description, genre_id: action.payload.genre });
        console.log('get all:', movies.data);
        yield put({ type: 'ADD_MOVIE', payload: movies.data });

    } catch {
        console.log('new post error');
    }
}

function* getAllGenres(action){
    //get all genres from the DB
    console.log('action.payload:', action.payload)
    try{
        const genres= yield axios.get(`/api/genre/${action.payload}`);
        console.log('get all genres:', genres.data);
        yield put({type: 'SET_GENRES', payload:genres.data});
    } catch {
        console.log('get genres error');
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            console.log('in genres:', action.payload);
            return action.payload;
        default:
            return state;
    }
}

//used to store movie details
const movieDetails = (state ={}, action)=>{
    switch(action.type){ 
        case 'SET_MOVIE_DETAILS':
            return action.payload;
        default: return state;
    }
}

const newMovie = (state ={}, action)=>{
    switch(action.type){ 
        case 'ADD_MOVIE':
            return action.payload;
        default: return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movieDetails,
        newMovie,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
