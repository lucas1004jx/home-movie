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

export default class Display extends Component{
    render(){
        return(
         <div className="poster-descri">
        <div className="poster">
        <img src={this.props.poster} alt={this.props.title}/>
        </div>
        <div className="descri">
        <div className="title">
        <h2>título: <span className="spanish-title">{this.props.title}</span></h2>
        <h2>título original: <span className="original-title">{this.props.original_title}</span> </h2>
        </div>
        <div>
            <p>votos</p>
            <p className="vote">{this.props.votes}</p>
        </div>
        <div>
            <p>Popularidad</p>
            <p className="poplularity">{this.props.popularity}</p>
        </div>
        <div>
            <p>fecha de estreno:</p>
            <p className="release-date">{this.props.date}</p>
        </div>
        <div>
            <h3>resumen</h3>
            <p className="overview">{this.props.overview}</p>
        </div>
        </div>
        </div>
        )
    }
}
