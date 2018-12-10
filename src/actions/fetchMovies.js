import {FETCH_MOVIES} from './types';
import axios from 'axios';
import { movieRef } from '../firebase';

const URL = 'https://api.themoviedb.org/3/search/movie?api_key=89deb61f12ed0e8450259381e3836d63&language=es&query=';

export const MOVIE_LIST = ['Ant-Man and the Wasp', 'upgrade', 'la monja', 'Venom', 'first man', 'aquaman', 'Bohemian Rhapsody', 'Los increíbles 2', 'A Star Is Born', 'La casa del reloj en la pared', 'Smallfoot','Megalodón','el depredador','el regreso de mary poppins','alpha','equalizer 2','johnny english 3','coco'];


export const fetchMovies=()=>dispatch=>{
    movieRef.on('value',snapshot=>{
        let movie_data=[];
        let dataBase=snapshot.val();
    console.log(dataBase);
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
//     Object.values(snapshot.val()).map((movie)=>axios.get(URL+movie)
//     .then((res)=>movie_data=[...movie_data,{[movie]:res.data.results[0]}])
//    .then((data)=>dispatch({
//        type:FETCH_MOVIES,
//        payload:data
//    })).catch((error)=>console.log('network isn´t working'))
//    )});
//}

// export const fetchMovies=()=> dispatch=>{
//     movieRef.on('value',snapshot=>{
//         dispatch({
//             type:FETCH_MOVIES,
//             payload:snapshot.val()
//         })
//     })
// }

export const addMovie=(movie)=>dispatch=>{
   
    movieRef.push().set(movie);
}

export const removeMovie=(movie_id)=>dispatch=>{
  movieRef.child(movie_id).remove();
  
}


