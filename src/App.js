import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import ParticlesComponent from './components/particles';

function App() {
  return (
  <Router>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/experience' element={<Experience />} /> 
      <Route path='/about' element={<About />} />
    </Routes>
    <ParticlesComponent id='particles'/>
  </Router>
  );
}

export default App;
