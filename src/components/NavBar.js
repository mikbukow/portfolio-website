import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import { animateScroll as Scroll } from 'react-scroll';
import './NavBar.css'

export default function NavBar() {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    const handleScroll = () => {
        if (window.scrollY > 20) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };
    return (
        <nav className={scrolling ? 'nav-scroll': 'nav'}>
            <Link to='/' className={scrolling ? 'site-title-scroll' : 'site-title'}>Mikaela</Link>
            <ul>
                <li>
                    <Link to='/experience' className={scrolling ? 'nav-link-scroll' : 'nav-link'}>Experience</Link>
                </li>
                <li>
                    <Link to="/about" className={scrolling ? 'nav-link-scroll' : 'nav-link'}>About</Link>
                </li>
            </ul>
        </nav>
    );
};