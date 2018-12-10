import React,{Component} from 'react';
import {movieRef} from '../firebase';
export default class Header extends Component{
    
    render(){
        
        //movieRef.on('value',snap=>console.log(snap.val()));
        //movieRef.push().set('lala land:lal');
        return(
            <div className="header">
            <h2 >Luqui Y Mati´s</h2>
            <h1>{this.props.title}</h1>
            </div>
        )
    }
}