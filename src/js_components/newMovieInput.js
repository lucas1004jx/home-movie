import React,{Component} from 'react';
import {addMovie} from '../actions/fetchMovies';
import {typeNewMovie} from '../actions/typeNewMovie';
import {closeAddInput} from '../actions/closeAddInput';
import CloseButton from './closeButton';
import {connect} from 'react-redux';

class NewMovieInput extends Component{
    constructor(){
        super();
       this.onClose=this.onClose.bind(this);
       this.onConfirm=this.onConfirm.bind(this);
       this.onChangeHandler=this.onChangeHandler.bind(this);
    }
    onClose(){
        this.props.closeAddInput();
    }
    onConfirm(){
        this.props.addMovie(this.props.newMovie);
        this.props.closeAddInput();
    }
    onChangeHandler(e){
      this.props.typeNewMovie(e.target.value);
      console.log('change');
    }
    render(){
        console.log(this.props.movieList);
        
      let movieSuggestion=(
       <div className="movie-suggestion">
       {
           this.props.movieList.map((movie)=>
           <div className="suggestion-item" key={movie.time}>
           <p className="suggestion-title">{movie.title}</p>
           <p className="suggestion-time">{movie.time}</p>
          </div>
           )
       }
       
       </div>
      )
       
        
        return(
            <div className="newMovieInput-container">
            <div className="newMovieInput">
            <form >
                <input type="text" placeholder="Escribe el nombre de la película que quieres añadir" onChange={this.onChangeHandler}/>
                {movieSuggestion}
            </form>
                <span onClick={this.onClose} className="close"><CloseButton/></span>
                <div className="buttons">
                <button type="submit">preview</button>
                <button  type="submit" onClick={this.onConfirm}>confirmar</button>
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

export default connect(mapStatetoProps,{addMovie,typeNewMovie,closeAddInput})(NewMovieInput);