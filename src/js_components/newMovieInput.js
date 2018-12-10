import React from 'react';
import {closeAddInput} from '../actions/closeAddInput';
import {connect} from 'react-redux';

const NewMovieInput=(props)=>(
    <div className="newMovieInput-container">
    <form className="newMovieInput">
        <input type="text" placeholder="Escribe el nombre de la película que quieres añadir" onChange={props.onChange}/>
        <div className="buttons">
        <button type="submit" onClick={props.onClose}>cancelar</button>
        <button type="submit">preview</button>
        <button  type="submit" onClick={props.onConfirm}>confirmar</button>
        </div>
    </form>
    </div>
)



export default NewMovieInput;