import React,{Component} from 'react';

export default class Header extends Component{
    render(){
        return(
            <div className="header">
            <h2>Luqui Y Mati´s</h2>
            <h1>{this.props.title}</h1>
            </div>
        )
    }
}