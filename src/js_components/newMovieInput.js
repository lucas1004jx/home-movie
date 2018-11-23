import React from 'react';
import {closeAddInput} from '../actions/closeAddInput';
import {connect} from 'react-redux';

const NewMovieInput=(props)=>(
    <div className="newMovieInput-container">
    <form className="newMovieInput">
        <input type="text" placeholder="Escribe el nombre de la película que quieres añadir"/>
        <div className="buttons">
        <button type="submit" onClick={props.closeAddInput}>cancelar</button>
        <button type="submit">preview</button>
        <button type="submit">confirmar</button>
        </div>
    </form>
    </div>
)

const mapStatetoprops=state=>({
    add:state.editMovie.add
})

export default connect(mapStatetoprops,{closeAddInput})(NewMovieInput);