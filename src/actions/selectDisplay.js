import {SELECT_DISPLAY} from './types';

export const selectDisplay=(e)=>dispatch=>{
    //console.log(e.target.dataset.title);
    
    dispatch({
        type:SELECT_DISPLAY,
        payload:e.target.dataset.id
    })
}