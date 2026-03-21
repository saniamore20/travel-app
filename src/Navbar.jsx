import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1>WanderLens</h1>
        <ul className='nav-links'>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/about" >About us</Link></li>
            <li><Link to="/packages" >Packages</Link></li>
            <li><Link to="/contact" className='btn-primary color-white-700'>Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar