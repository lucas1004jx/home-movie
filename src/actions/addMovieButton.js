import {ADD_MOVIE_BUTTON} from './types';

export const addMovieButton=()=>dispatch=>(
    dispatch({
        type:ADD_MOVIE_BUTTON,
        payload:true
    })
)