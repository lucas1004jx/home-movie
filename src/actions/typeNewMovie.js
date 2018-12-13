
import {TYPE_NEW_MOVIE} from './types';
import axios from 'axios';
const URL = 'https://api.themoviedb.org/3/search/movie?api_key=89deb61f12ed0e8450259381e3836d63&language=es&query=';
 export const typeNewMovie=(movie)=>dispatch=>(
    axios.get(URL+movie).then((res)=>{ 
        let list=[];
        let results=res.data.results;
        results.map((movie)=>list=[...list,{title:movie.title,time:movie.release_date,img:movie.poster_path}]);
        return list;
    }).then((list)=>
    dispatch({
        type:TYPE_NEW_MOVIE,
        payload:movie,
        list:list
    })
    ).catch((error)=> 
    dispatch({
        type:TYPE_NEW_MOVIE,
        payload:'',
        list:[]
    })
    )
)