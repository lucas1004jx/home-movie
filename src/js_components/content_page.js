// API https://api.themoviedb.org/3/movie/550?api_key=89deb61f12ed0e8450259381e3836d63
// poster path https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
/*
"poster_sizes": [
      "w92",
      "w154",
      "w185",
      "w342",
      "w500",
      "w780",
      "original"
    ],
*/
/*
property: title,original tilte,vote_averge,overview,release_Date,popularity
*/
import React,{Component} from 'react';
import Movies from './movies';
import Display from './display_movie';

export default class ContentPage extends Component{
render(){
    return(
        <div className="main-content">
        <Display/>
        <Movies/>
        </div>
    )
}
}