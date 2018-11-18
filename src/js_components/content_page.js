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
import {fetchMovies} from '../actions/fetchMovies';
import {selectDisplay} from '../actions/selectDisplay';
import {connect} from 'react-redux';
import {MOVIE_LIST} from '../actions/fetchMovies';



const URL = 'https://api.themoviedb.org/3/search/movie?api_key=89deb61f12ed0e8450259381e3836d63&language=es&query=';
const IMG_URL='https://image.tmdb.org/t/p/w342/';
const POSTER_URL='https://image.tmdb.org/t/p/w500/';
// const MOVIE_LIST = ['Ant-Man and the Wasp', 'upgrade', 'la monja', 'Venom', 'first man', 'aquaman', 'Bohemian Rhapsody', 'Los increíbles 2', 'A Star Is Born', 'La casa del reloj en la pared', 'Smallfoot','Megalodón','el depredador','el regreso de mary poppins','alpha','equalizer 2','johnny english 3','coco'];
const MOVIE_DISPLAY='Venom';
 class ContentPage extends Component{

    componentDidMount(){
        
        // MOVIE_LIST.map((movie)=>
        // axios.get(URL+movie)
        // .then((movieData)=>this.setState({[movie]:movieData.data}))
        // .catch((error)=>console.log('Fail to find movie'))
        // )
        this.props.fetchMovies();
           
    }


render(){
    //console.log(this.props);
    
    if( this.props.movies.length<MOVIE_LIST.length){
        return <div></div>;
       }
       let movies=this.props.movies;
       let display_movie_data=this.props.movies.filter((movie_data)=>Object.keys(movie_data)==this.props.displayedMovie)[0];
       let display_movie=Object.values(display_movie_data)[0];
     
    return(
        <div className="main-content">
        {movies.length>=MOVIE_LIST.length?
        <Display 
        title={display_movie.title}
        original_title={display_movie.original_title}
        votes={display_movie.vote_average}
        total_votes={display_movie.vote_count}
        date={display_movie.release_date}
        poster={POSTER_URL+display_movie.poster_path}
        overview={display_movie.overview}
        />:null}
        <ul className='movies'>
        {movies.length>=MOVIE_LIST.length?
        MOVIE_LIST.map((movie_name,index)=>{
        let movie=movies.filter((movie_data)=>Object.keys(movie_data)==movie_name)[0][movie_name];
        
        return <Movie title={movie.title}
        name={movie_name}
        original_title={movie.original_title}
        votes={movie.vote_average}
        date={movie.release_date}
        poster={IMG_URL+movie.poster_path}
        key={index}
        movie={movie}
        onClick={this.props.selectDisplay}
        />
        })
        :null}
        </ul>
        </div>
    )
}
}
const mapStatetoProps=state=>({
    movies:state.movies.data,
    displayedMovie:state.movies.display
})

export default connect(mapStatetoProps,{fetchMovies,selectDisplay})(ContentPage);