import React from 'react';

const CloseButton=({
    style={
        'width':'35px',
        'height':'35px'
         },
    className='',
    viewBox="0 0 48 48"
})=>(
    <svg x="0px" y="0px" viewBox={viewBox} style={style}  className={className}>

    <g transform="translate(-1178.000000, -334.000000)">
            <g id="close_btn" transform="translate(1178.000000, 334.000000)">
                <circle id="Oval" fill="#E11C24" cx="24" cy="24" r="24" strokeWidth="0"></circle>
                <path d="M15,15 L32.6776695,32.6776695" id="Line"  strokeWidth="4" strokeLinecap="round"></path>
                <path d="M15,15 L32.6776695,32.6776695" id="Line-Copy"  strokeWidth="4" strokeLinecap="round" transform="translate(23.838835, 23.838835) rotate(90.000000) translate(-23.838835, -23.838835) "></path>
            </g>
        </g>

    </svg>
)

export default CloseButton;