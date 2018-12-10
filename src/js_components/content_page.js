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
import {addMovieButton} from '../actions/addMovieButton';
import {addMovie} from '../actions/fetchMovies';
import {closeAddInput} from '../actions/closeAddInput';
import {typeNewMovie} from '../actions/typeNewMovie';
import {connect} from 'react-redux';
import AddButton from './addButton';
import NewMovieInput from './newMovieInput';

// const URL = 'https://api.themoviedb.org/3/search/movie?api_key=89deb61f12ed0e8450259381e3836d63&language=es&query=';
const IMG_URL='https://image.tmdb.org/t/p/w342/';
const POSTER_URL='https://image.tmdb.org/t/p/w500/';
// const MOVIE_LIST = ['Ant-Man and the Wasp', 'upgrade', 'la monja', 'Venom', 'first man', 'aquaman', 'Bohemian Rhapsody', 'Los increíbles 2', 'A Star Is Born', 'La casa del reloj en la pared', 'Smallfoot','Megalodón','el depredador','el regreso de mary poppins','alpha','equalizer 2','johnny english 3','coco'];

 class ContentPage extends Component{
    constructor(){
        super();
        this.onChangeHandler=this.onChangeHandler.bind(this);
        this.onConfirmHandler=this.onConfirmHandler.bind(this);
        this.onCloseHandler=this.onCloseHandler.bind(this);
    }

    componentDidMount(){
        
        // MOVIE_LIST.map((movie)=>
        // axios.get(URL+movie)
        // .then((movieData)=>this.setState({[movie]:movieData.data}))
        // .catch((error)=>console.log('Fail to find movie'))
        // )
        this.props.fetchMovies();
        
    }

    onChangeHandler(e){
     this.props.typeNewMovie(e.target.value);
    }
  onConfirmHandler(){
      this.props.addMovie(this.props.newMovie);
      this.props.closeAddInput();
  }
  
  onCloseHandler(){
    this.props.closeAddInput();
  }

render(){
    if(this.props.add){
        document.body.style.overflowY='hidden';
    }else{
        document.body.style.overflowY='scroll';
    }
    console.log(this.props);
    let movies=this.props.movies;
    if( movies.length<1){
        return (
        <div className="main-content">
        {this.props.add?<NewMovieInput/>:null}
        <ul className="movies">
        <li className="addMovie" onClick={this.props.addMovieButton}>
         <AddButton className="addButton" />
       </li>
       </ul>
        </div>
        );
       }
       
       let display_movie=Object.values(this.props.displayedMovie)[0];
     
    return(
        <div className="main-content">
        {this.props.add?<NewMovieInput onConfirm={this.onConfirmHandler} onChange={this.onChangeHandler}onClose={this.onCloseHandler}/>:null}
        <Display 
        title={display_movie.title}
        original_title={display_movie.original_title}
        votes={display_movie.vote_average}
        total_votes={display_movie.vote_count}
        date={display_movie.release_date}
        poster={POSTER_URL+display_movie.poster_path}
        overview={display_movie.overview}
        />
        <ul className='movies'>
        {
        movies.map((movie,index)=>{
        let movie_data=Object.values(movie)[0];
        let movie_name=Object.keys(movie)[0];
        return <Movie title={movie_data.title}
        name={movie_name}
        original_title={movie_data.original_title}
        votes={movie_data.vote_average}
        date={movie_data.release_date}
        poster={IMG_URL+movie_data.poster_path}
        key={movie_data.id}
        onClick={this.props.selectDisplay}
        />
        })
        }
       <li className="addMovie" onClick={this.props.addMovieButton}>
         <AddButton className="addButton" />
       </li>
        </ul>
        </div>
    )
}
}
const mapStatetoProps=state=>({
    movies:state.movies.data,
    displayedMovie:state.movies.display,
    add:state.editMovie.add,
    newMovie:state.movies.newMovie
})

export default connect(mapStatetoProps,{fetchMovies,selectDisplay,addMovieButton,addMovie,typeNewMovie,closeAddInput})(ContentPage);