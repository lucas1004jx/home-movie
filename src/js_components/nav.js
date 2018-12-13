import React,{Component} from 'react';
import logo from '../images/logo.png';

const menuItems=[];
export default class Nav extends Component{
render(){
    return(
   <nav className="navbar">
       <img src={logo} alt="luqui y mati logo" className="logo"/>
    <div className="menu">
       <form className="search-bar">
      <input type="text" placeholder="Buscar una pelicula" name="search"/>
      <button type="submit" className="search"></button>
    </form>
    <ul className="menu-items">
      {menuItems.map((menuItem,index)=>
        <li key={index}>{menuItem}</li>
        )}
    </ul>
       </div>
   </nav>

    );
}

}