import React,{Component} from 'react';

export default class ContentPage extends Component{
render(){
    return(
        <div className="main-content">
        <div className="poster-descri">
        <div className="poster"></div>
        <div className="descri"></div>
        </div>
        <ul className="movies">
        <li className="movie"></li>
        <li className="movie"></li>
        <li className="movie"></li>
        <li className="movie"></li>
        </ul>
        </div>
    )
}
}