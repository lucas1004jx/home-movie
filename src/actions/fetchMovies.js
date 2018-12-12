import {FETCH_MOVIES, ADD_MOVIE,REMOVE_MOVIE} from './types';
import axios from 'axios';
import { movieRef } from '../firebase';

const URL = 'https://api.themoviedb.org/3/search/movie?api_key=89deb61f12ed0e8450259381e3836d63&language=es&query=';

export const MOVIE_LIST = ['Ant-Man and the Wasp', 'upgrade', 'la monja', 'Venom', 'first man', 'aquaman', 'Bohemian Rhapsody', 'Los increíbles 2', 'A Star Is Born', 'La casa del reloj en la pared', 'Smallfoot','Megalodón','el depredador','el regreso de mary poppins','alpha','equalizer 2','johnny english 3','coco'];

let movie_data=[];
export const fetchMovies=()=>dispatch=>{
    movieRef.once('value',snapshot=>{
        //let movie_data=[];
        let dataBase=snapshot.val();
    //console.log(dataBase);
    if(dataBase == null){return dispatch({type:FETCH_MOVIES,payload:''})}
    for(let key in dataBase){
        let movie=dataBase[key];
        axios.get(URL+movie)
        .then((res)=>movie_data=[...movie_data,{[key]:res.data.results[0]}])
        .then((data)=>dispatch({
           type:FETCH_MOVIES,
           payload:data
       })).catch((error)=>console.log('network isn´t working'));
    }
})
}


// export const addMovie=(movie)=>dispatch=>{  
//     movieRef.push().set(movie);
// }
export const addMovie=(movie)=>dispatch=>{   
    axios.get(URL+movie)
    .then((res)=>{ 
        if(res.data.results[0]===undefined){alert('Esta película no existe!');throw 'no existe'}
        return res.data.results[0]
    })
    .then((data)=>{
        let key='';
        movieRef.once('child_added',(child)=>{
            key=child.key;
        })
        movieRef.push().set(data.title);
        return dispatch({
            type:ADD_MOVIE,
            payload:data,
            key:key
        })
    })

}



// export const removeMovie=(movie_id)=>dispatch=>{
//   movieRef.child(movie_id).remove();
  
// }

export const removeMovie=(movie_id)=>dispatch=>{
    movieRef.child(movie_id).remove();
    return dispatch({
        type:REMOVE_MOVIE,
        payload:movie_id
    })
}


