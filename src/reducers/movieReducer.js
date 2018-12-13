import {FETCH_MOVIES} from '../actions/types';
import {SELECT_DISPLAY} from '../actions/types';
import {TYPE_NEW_MOVIE} from '../actions/types';
import {ADD_MOVIE} from '../actions/types';
import {REMOVE_MOVIE} from '../actions/types';
import {SELECT_MOVIE} from '../actions/types';
import {ADD_MOVIE_BUTTON,CLOSE_ADD_INPUT} from '../actions/types';

const initialState={
    data:[],
    display:'',
    newMovie:'',
    movieSuggestion:[]
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
            newMovie:action.payload,
            movieSuggestion:action.list
        }
        case SELECT_MOVIE:
        return{
            ...state,
            newMovie:action.payload,
            movieSuggestion:[]
        }
        case ADD_MOVIE: 
        return{
            ...state,
            data:[...state.data,{[action.key]:action.payload}],
            display:{[action.key]:action.payload}
        }
        case ADD_MOVIE_BUTTON:
        return{
            ...state,
            newMovie:''
        }
        case REMOVE_MOVIE:
        let data=[...state.data].filter((data)=> Object.keys(data)[0] !== action.payload);
        return{
            ...state,
            data:data,
            display:data.slice(-1)[0]
        }
        case CLOSE_ADD_INPUT:
         return{
             ...state,
             movieSuggestion:[]
         }
        default:
        return state;
    }

}