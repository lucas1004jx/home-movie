import {SELECT_MOVIE} from './types';

export const selectMovie=(movie)=>diapatch=>(
    diapatch({
        type:SELECT_MOVIE,
        payload:movie
    })
)