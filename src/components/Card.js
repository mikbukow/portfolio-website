import React from "react";
import './Card.css';

export const Card = ({title, children}) => { 
    return (

        <div className='card'>
            {children}
        </div>
    )
};