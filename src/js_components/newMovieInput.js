import React,{Component} from 'react';
import {addMovie} from '../actions/fetchMovies';
import {typeNewMovie} from '../actions/typeNewMovie';
import {selectMovie} from '../actions/selectMovie';
import {closeAddInput} from '../actions/closeAddInput';
import CloseButton from './closeButton';
import {connect} from 'react-redux';
let timer='';
const IMG_URL='https://image.tmdb.org/t/p/w92/';
class NewMovieInput extends Component{
    constructor(){
        super();
       this.onClose=this.onClose.bind(this);
       this.onConfirm=this.onConfirm.bind(this);
       this.onChangeHandler=this.onChangeHandler.bind(this);
       this.onSelectMovie=this.onSelectMovie.bind(this);
       this.moveiInput=React.createRef();
    }
    
    onClose(){
        this.props.closeAddInput();
    }
    onConfirm(){
        this.props.addMovie(this.props.newMovie);
        this.props.closeAddInput();
    }
    onChangeHandler(e){
        let value=e.target.value;
        clearTimeout(timer);
        timer=setTimeout(() => {
        this.props.typeNewMovie(value);
        }, 300);
      
      //console.log('change');
    }
    onSelectMovie(e){
        this.props.selectMovie(e.target.dataset.title); 
       this.moveiInput.current.value=e.target.dataset.title;
       console.log(e.target.dataset.title);
       
    }
    render(){
        
        let movieSuggestion='';
        if(this.props.movieList.length >=1){
             movieSuggestion=(
                <div className="movie-suggestion">
                {
                    this.props.movieList.map((movie,index)=>
                    <div className="suggestion-item" key={index} data-title={movie.title} onClick={this.onSelectMovie}>
                    <figure>
                        <img src={`${IMG_URL}${movie.img}`}/>
                    </figure>
                    <div className="info">
                    <p className="suggestion-title">{movie.title}</p>
                    <p className="suggestion-time">{movie.time}</p>
                    </div>  
                   </div>
                    )
                } 
                </div>
               )
        }
        
        return(
            <div className="newMovieInput-container">
            <div className="newMovieInput">
            <form >
                <input type="text" placeholder="Escribe el nombre de la película que quieres añadir" onChange={this.onChangeHandler} ref={this.moveiInput} />
                {movieSuggestion}
            </form>
                <span onClick={this.onClose} className="close"><CloseButton/></span>
                <div className="buttons">
                <button  type="submit" onClick={this.onConfirm}>añadir</button>
                </div>
                </div>
            </div>
        )
    }
}
   


const mapStatetoProps=state=>({
    add:state.editMovie.add,
    newMovie:state.movies.newMovie,
    movieList:state.movies.movieSuggestion
})

export default connect(mapStatetoProps,{addMovie,typeNewMovie,selectMovie, closeAddInput})(NewMovieInput);