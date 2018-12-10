import React,{Component} from 'react';
import {addMovie} from '../actions/fetchMovies';
import {typeNewMovie} from '../actions/typeNewMovie';
import {closeAddInput} from '../actions/closeAddInput';
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
    }
    render(){
        return(
            <div className="newMovieInput-container">
            <form className="newMovieInput">
                <input type="text" placeholder="Escribe el nombre de la película que quieres añadir" onChange={this.onChangeHandler}/>
                <div className="buttons">
                <button type="submit" onClick={this.onClose}>cancelar</button>
                <button type="submit">preview</button>
                <button  type="submit" onClick={this.onConfirm}>confirmar</button>
                </div>
            </form>
            </div>
        )
    }
}
   


const mapStatetoProps=state=>({
    add:state.editMovie.add,
    newMovie:state.movies.newMovie
})

export default connect(mapStatetoProps,{addMovie,typeNewMovie,closeAddInput})(NewMovieInput);