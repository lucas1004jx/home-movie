import {combineReducers} from 'redux';
import moviesReducer from './movieReducer';
import buttonReducer from './buttonReducer';

const rootReducer=combineReducers({
  movies:moviesReducer,
  editMovie:buttonReducer
})

export default rootReducer;