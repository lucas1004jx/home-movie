//search movie https://api.themoviedb.org/3/search/movie?api_key=89deb61f12ed0e8450259381e3836d63&query='upgrade'
// poster path https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
import React, { Component } from 'react';
// const URL = 'https://api.themoviedb.org/3/search/movie?api_key=89deb61f12ed0e8450259381e3836d63&language=es&query=';
// const IMG_URL='https://image.tmdb.org/t/p/w342/';
// const MOVIE_LIST = ['Ant-Man and the Wasp', 'upgrade', 'la monja', 'Venom', 'first man', 'aquaman', 'Bohemian Rhapsody', 'Los increíbles 2', 'A Star Is Born', 'La casa del reloj en la pared', 'Smallfoot'];

export default class Movie extends Component {
    
    render() { 
        return (    
                <li className='movie' onClick={this.props.onClick} data-title={this.props.title} data-id={this.props.id}>
                <div className='delete-container' onClick={this.props.onDelete} data-id={this.props.id}>
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

