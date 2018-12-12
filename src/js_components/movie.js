//search movie https://api.themoviedb.org/3/search/movie?api_key=89deb61f12ed0e8450259381e3836d63&query='upgrade'
// poster path https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
import React, { Component } from 'react';
import {removeMovie} from '../actions/fetchMovies';
import {selectDisplay} from '../actions/selectDisplay';
import {connect} from 'react-redux';
// const URL = 'https://api.themoviedb.org/3/search/movie?api_key=89deb61f12ed0e8450259381e3836d63&language=es&query=';
// const IMG_URL='https://image.tmdb.org/t/p/w342/';
// const MOVIE_LIST = ['Ant-Man and the Wasp', 'upgrade', 'la monja', 'Venom', 'first man', 'aquaman', 'Bohemian Rhapsody', 'Los increíbles 2', 'A Star Is Born', 'La casa del reloj en la pared', 'Smallfoot'];

 class Movie extends Component {
     constructor(){
         super();
         this.onDeleteHandler=this.onDeleteHandler.bind(this);
     }
    onDeleteHandler(e){
        e.stopPropagation();
        console.log(e.target.dataset.id);
        this.props.removeMovie(e.target.dataset.id);
    }
    render() { 
        return (    
                <li className='movie' onClick={this.props.selectDisplay} data-title={this.props.title} data-id={this.props.id}>
                <div className='delete-container' onClick={this.onDeleteHandler} data-id={this.props.id}>
                <span className='delete'></span>
                </div>
                <div className='info'>
                <h2 className='title'>{this.props.title}</h2>
                <p className='original-title'>({this.props.original_title})</p>
                <span className='votes'>{this.props.votes}</span>
                <span className='release-date'>{this.props.date}</span>
                </div>
                <img src={this.props.poster} className='poster' alt={this.props.title}/>
                </li>
                   
        )
    }
}
const mapStatetoProps=state=>({
  
})

export default connect(mapStatetoProps,{removeMovie,selectDisplay})(Movie)
