import {ADD_MOVIE} from './types';

export const addMovie=()=>dispatch=>(
    dispatch({
        type:ADD_MOVIE,
        payload:true
    })
)