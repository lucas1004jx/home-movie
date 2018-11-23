import React,{Component} from 'react';
import fire from '../fire';
export default class Header extends Component{
    
    render(){
        let dbRef=fire.database().ref().child('movies');
        dbRef.on('value',snap=>console.log(snap.val()))
        return(
            <div className="header">
            <h2 >Luqui Y Mati´s</h2>
            <h1>{this.props.title}</h1>
            </div>
        )
    }
}