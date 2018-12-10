import {FETCH_MOVIES} from '../actions/types';
import {SELECT_DISPLAY} from '../actions/types';
import {TYPE_NEW_MOVIE} from '../actions/types';
import {REMOVE_MOVIE} from '../actions/types';

const initialState={
    data:[],
    display:'',
    newMovie:''
}

export default (state=initialState,action)=>{
    switch(action.type){
        case FETCH_MOVIES:
        //console.log(action.payload);
        
        return{
            ...state,
            data:action.payload,
            display:action.payload.slice(-1)[0]
        }
        case SELECT_DISPLAY:
        let display_movie=state.data.filter((movie)=>Object.keys(movie)[0]===action.payload)[0];
        return{
            ...state,
            display:display_movie
        }
        case TYPE_NEW_MOVIE:
        return{
            ...state,
            newMovie:action.payload
        }
    
        default:
        return state;
    }

}