import React from 'react';
import {Button} from'../components/Button';
import {Link} from 'react-router-dom';
import './Home.css';

export default function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <h1>Mikaela Bukow</h1>
                <p>Hi! I'm Mikaela. I'm currently working as a Software Engineer at Playstation in San Francisco, CA. </p>
                <Button path='./about'>
                    About Me
                </Button>
                <div className='social-icons'>
                    <Link className='social-icon-links'
                    to='http://linkedin.com/in/mikaela-b-41844b125'>
                        <i class='fab fa-linkedin fa-2x'></i>
                    </Link>
                    <Link className='social-icon-links'
                    to='https://github.com/mikbukow'>
                        <i class='fab fa-github fa-2x'></i>
                    </Link>
                    
                </div>
            </div>

        </div>
    );
}