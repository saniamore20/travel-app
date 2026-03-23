import React from 'react'
import { Link } from 'react-router-dom'
import { ImAirplane } from "react-icons/im";
import { TbPackages } from "react-icons/tb";
import Navbar from './Navbar';
import { animate, motion } from 'motion/react';
import bag from './assets/3dicons-travel-dynamic-color.png'

const Hero = () => {
  return (
    <section>
        <div className='hero'>
          <div className='content'>
            <div className='inside'>
            <motion.h1 className='title' initial={{opacity: 0, x: -100}} animate={{ opacity: 1, x: 0}}
             transition={{duration: 0.8, ease: 'easeInOut'}}>Travel. Vibe. Capture</motion.h1>
            <motion.p initial={{opacity: 0, x: -100}} animate={{ opacity: 1, x: 0}}
             transition={{duration: 0.8, ease: 'easeInOut'}} className='sub'>We do not just plan trips - we turn your moments into stories.
               Travel with your squad, and we willl bring a professional photographer
                to capture every aesthetic second.</motion.p>
              </div>
              <motion.img  initial={{ rotateY: -90, opacity: 0 }}
                  whileInView={{ rotateY: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  viewport={{ once: false }}  src={bag} alt='travel' style={{ width: "300px"}}/>
            </div>
              
            
            <Link className='btn-secondary' to="/packages">View Packages <TbPackages className='icon'/></Link>
            <Link className='btn-secondary' to="/contact">Plan my Trip 
            <ImAirplane 
            className='icon'/></Link>
        
        </div>
    </section>
  )
}

export default Hero