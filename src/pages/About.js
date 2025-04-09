import React from "react";
import './About.css';
import { Button } from '../components/Button';
import me from '../assets/me.jpeg';


export default function About() {
    return (
        <div className='about-me'>
            <div className="about-me-container">
                <span className="title">
                    <h2>Hi! I'm Mikaela Bukow. I’m a full time software engineer located in San Francisco, CA. </h2>
                    <h3> I find joy in creating things, whether it be paintings, automated solutions or some new ceramic mugs</h3>
                    <Button className='more-about-button' path={'#more-about'}>
                        Learn More About Me - Coming Soon
                    </Button>
                </span>
                <span className="pics">
                    <img src={me} />
                </span>
            </div>
        </div>
    );
}