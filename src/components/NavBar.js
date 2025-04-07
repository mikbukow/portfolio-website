import { Link } from 'react-router-dom'
import './NavBar.css'
export default function NavBar() {
    return (
        <nav className="nav">
            <Link to='/' className='site-title'>Mikaela</Link>
            <ul>
                <li>
                    <Link to='/experience' className='nav-link'>Experience</Link>
                </li>
                <li>
                    <Link to="/about" className='nav-link'>About</Link>
                </li>
            </ul>
        </nav>
    );
}