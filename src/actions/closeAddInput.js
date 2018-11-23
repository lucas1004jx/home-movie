import {CLOSE_ADD_INPUT} from './types';

export const closeAddInput=()=>dispatch=>(
    dispatch({
        type:CLOSE_ADD_INPUT,
        payload:false
    })
)