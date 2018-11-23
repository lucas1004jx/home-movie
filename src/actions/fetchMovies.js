import {FETCH_MOVIES} from './types';
import axios from 'axios';

const URL = 'https://api.themoviedb.org/3/search/movie?api_key=89deb61f12ed0e8450259381e3836d63&language=es&query=';

export const MOVIE_LIST = ['Ant-Man and the Wasp', 'upgrade', 'la monja', 'Venom', 'first man', 'aquaman', 'Bohemian Rhapsody', 'Los increíbles 2', 'A Star Is Born', 'La casa del reloj en la pared', 'Smallfoot','Megalodón','el depredador','el regreso de mary poppins','alpha','equalizer 2','johnny english 3','coco'];

let movie_data=[];
export const fetchMovies=()=>dispatch=>{
    MOVIE_LIST.map((movie)=>axios.get(URL+movie)
     .then((res)=>movie_data=[...movie_data,{[movie]:res.data.results[0]}])
    .then((data)=>dispatch({
        type:FETCH_MOVIES,
        payload:data
    })).catch((error)=>console.log('network isn´t working'))
    );
}

