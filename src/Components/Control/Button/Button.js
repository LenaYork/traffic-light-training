import React from 'react';
import './Button.css';

export function Button(props) {
    return(
        <div className='button' >
            { props.text }
        </div>
    )
}