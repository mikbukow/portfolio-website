import React from "react";
import {Link} from 'react-router-dom'
import './Button.css';

export const Button = ({path, children}) => { 
    return (

        <div className='button'>
            <Link to={path}>
                <button className="button-link">
                    {children}
                </button>
            </Link>
        </div>
    )
};