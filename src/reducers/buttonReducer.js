import {ADD_MOVIE_BUTTON} from '../actions/types';
import {CLOSE_ADD_INPUT} from '../actions/types';

const initialState={
    add:false
}

export default function(state=initialState,action){
    switch(action.type){
        case ADD_MOVIE_BUTTON:
        return{
            ...state,
            add:action.payload
        }
        case CLOSE_ADD_INPUT:
        return{
            ...state,
            add:action.payload
        }
        default:
        return state;
    }
}
