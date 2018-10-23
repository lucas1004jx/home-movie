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
import Movie from './movie';
import Display from './display_movie';

const URL = 'https://api.themoviedb.org/3/search/movie?api_key=89deb61f12ed0e8450259381e3836d63&language=es&query=';
const IMG_URL='https://image.tmdb.org/t/p/w342/';
const POSTER_URL='https://image.tmdb.org/t/p/w500/';
const MOVIE_LIST = ['Ant-Man and the Wasp', 'upgrade', 'la monja', 'Venom', 'first man', 'aquaman', 'Bohemian Rhapsody', 'Los increíbles 2', 'A Star Is Born', 'La casa del reloj en la pared', 'Smallfoot','Megalodón','el depredador','el regreso de mary poppins','alpha','equalizer 2','johnny english 3','coco'];
const MOVIE_DISPLAY='Venom';
export default class ContentPage extends Component{
    constructor(props){
      super(props);
      this.state={display:MOVIE_DISPLAY};
      this.handleOnClik=this.handleOnClik.bind(this);
    }

    componentDidMount(){
        MOVIE_LIST.map((movie)=>
        fetch(URL+movie)
        .then((response)=>response.json())
        .then((data)=>this.setState({[movie]:data}))
        .catch((error)=>console.log('Fail to find movie'))
        )
    }

    handleOnClik(movie){
       this.setState({display:movie});
    }

render(){
    if( Object.keys(this.state).length>MOVIE_LIST.length){
        let i=0;
        {MOVIE_LIST.map((movie,index)=>{   
            console.log(i);
            console.log(this.state[movie].results[0])
            i++;
           }
           )}
       }
       let display_movie=this.state.display;
      
    return(
        <div className="main-content">
        {Object.keys(this.state).length>MOVIE_LIST.length?
        <Display 
        title={this.state[display_movie].results[0].title}
        original_title={this.state[display_movie].results[0].original_title}
        votes={this.state[display_movie].results[0].vote_average}
        total_votes={this.state[display_movie].results[0].vote_count}
        date={this.state[display_movie].results[0].release_date}
        poster={POSTER_URL+this.state[display_movie].results[0].poster_path}
        overview={this.state[display_movie].results[0].overview}
        />:null}
        <ul className='movies'>
        {Object.keys(this.state).length>MOVIE_LIST.length?
        MOVIE_LIST.map((movie,index)=>
        <Movie title={this.state[movie].results[0].title}
        original_title={this.state[movie].results[0].original_title}
        votes={this.state[movie].results[0].vote_average}
        date={this.state[movie].results[0].release_date}
        poster={IMG_URL+this.state[movie].results[0].poster_path}
        key={index}
        movie={movie}
        onClick={this.handleOnClik}
        />
        )
        :null}
        </ul>
        </div>
    )
}
}