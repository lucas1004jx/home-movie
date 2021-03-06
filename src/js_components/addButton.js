
import React from 'react';

const AddButton=({
    style={},
    className='',
    viewBox='0 0 100 125'
})=>(
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox={viewBox} style={style} xmlSpace="preserve" className={className}><path d="M50,1.7C23.3,1.7,1.7,23.3,1.7,50c0,26.7,21.6,48.3,48.3,48.3S98.3,76.7,98.3,50C98.3,23.3,76.7,1.7,50,1.7z   M73.9,52.8H52.1v21.8c0,1.5-1.2,2.7-2.7,2.7s-2.7-1.2-2.7-2.7V52.8H25c-1.5,0-2.7-1.2-2.7-2.7c0-1.5,1.2-2.7,2.7-2.7h21.8V25.6  c0-1.5,1.2-2.7,2.7-2.7s2.7,1.2,2.7,2.7v21.8h21.8c1.5,0,2.7,1.2,2.7,2.7C76.6,51.6,75.4,52.8,73.9,52.8z"/></svg>
)

export default AddButton;