import {FETCH_MOVIES} from '../actions/types';
import {MOVIE_LIST} from '../actions/fetchMovies';

const initialState={
    data:[],
    display:''
}

export default function(state=initialState,action){
    switch(action.type){
        case FETCH_MOVIES:
        return{
            ...state,
            data:action.payload,
            display:action.payload.slice(-1)[0]
        }
        default:
        return state;
    }

}