import React from 'react'
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import Packages from './Packages';
import About from './About';
import Hero from './Hero';
import Services from './Services';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;