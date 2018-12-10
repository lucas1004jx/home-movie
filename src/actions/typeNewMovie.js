
import {TYPE_NEW_MOVIE} from './types';

 export const typeNewMovie=(movie)=>dispatch=>(
    dispatch({
        type:TYPE_NEW_MOVIE,
        payload:movie
    })
)