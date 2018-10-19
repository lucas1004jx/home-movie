//search movie https://api.themoviedb.org/3/search/movie?api_key=89deb61f12ed0e8450259381e3836d63&query='upgrade'
import React,{Component} from 'react';
const url='https://api.themoviedb.org/3/search/movie?api_key=89deb61f12ed0e8450259381e3836d63&query=';
const MOVIE_LIST=['Ant-Man and the Wasp','upgrade','la monja','Venom','first man','aquaman','Bohemian Rhapsody','Los increíbles 2','A Star Is Born','La casa con un reloj en sus paredes','Smallfoot'];

export default class Movies extends Component{
    constructor(props) {
        super(props);
        this.fetchMovie=this.fetchMovie.bind(this);
      }

      fetchMovie(movie){
          let data=10;
          fetch(url+movie).then((res)=>res.json()).then(res=>data=res.results[0]).then(()=>{return data});
          
      }
    render(){
        return(
        <ul className="movies">
        {MOVIE_LIST.map((movie,index)=>{
         let data=this.fetchMovie(movie);
         
        return (
        <li className="movie" key={index}>
        <h3>{movie}</h3>
        </li>)
        }    
        )}
        </ul>
        )
    }
}