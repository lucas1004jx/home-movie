import React,{Component} from 'react';
import Nav from './nav';
import Header from './header';

export default class LandingPage extends Component{
render(){
    return(
        <div className="landingPage">
           <Nav/>
           <Header title="home cinema"/>
        </div>
   
    );
}

}