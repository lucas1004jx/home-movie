import {FETCH_MOVIES} from '../actions/types';
import {SELECT_DISPLAY} from '../actions/types';
import {MOVIE_LIST} from '../actions/fetchMovies';

const initialState={
    data:[],
    display:''
}

export default (state=initialState,action)=>{
    switch(action.type){
        case FETCH_MOVIES:
        return{
            ...state,
            data:action.payload,
            display:MOVIE_LIST.slice(-1)[0]
        }
        case SELECT_DISPLAY:
        return{
            ...state,
            display:action.payload
        }
        default:
        return state;
    }

}