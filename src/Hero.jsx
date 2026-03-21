import React from 'react'
import { Link } from 'react-router-dom'
import { ImAirplane } from "react-icons/im";
import { TbPackages } from "react-icons/tb";
import Navbar from './Navbar';

const Hero = () => {
  return (
    <section>
        <div className='hero'>
            <h1>Travel. Vibe. Capture</h1>
            <p className='sub'>We do not just plan trips — we turn your moments into stories.
               Travel with your squad, and we willl bring a professional photographer
                to capture every aesthetic second.</p>
            
            <Link className='btn-secondary' to="/packages">View Packages <TbPackages className='icon'/></Link>
            <Link className='btn-secondary' to="/contact">Plan my Trip 
            <ImAirplane 
            className='icon'/></Link>
        
        </div>
    </section>
  )
}

export default Hero