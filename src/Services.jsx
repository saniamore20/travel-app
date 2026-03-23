import React from 'react'
import Packages from './Packages';
import { easeIn, motion } from 'framer-motion';

const Services = () => {
  
    const Ourservice = [
    {
        id: 1,
        title: "Personal Travel Photographer",
        description: "Capture every moment with a professional photographer traveling with you."
    },
    {
        id: 2,
        title: "Aesthetic Reels & Videos",
        description: "Get cinematic reels and Instagram-worthy videos from your trip."
    },
    {
        id: 3,
        title: "Custom Trip Planning",
        description: "Personalized itineraries based on your vibe, budget, and preferences."
    },
    {
        id: 4,
        title: "Group Travel Experiences",
        description: "Curated trips designed for fun, bonding, and unforgettable memories."
    },
    {
        id: 5,
        title: "Hidden Gems Exploration",
        description: "Discover aesthetic, less-crowded locations beyond typical tourist spots."
    },
    {
        id: 6,
        title: "Outfit & Shoot Guidance",
        description: "Get styling tips and pose ideas for the perfect travel photos."
    }
    ];

    const containerVariant = {
        hidden: {},
        show: {
            transition: {staggerChildren: 0.2}
        }
    }
    
    const cardVariant = {
        hidden: {y: 80, opacity: 0},
        show: {
            y: 0, opacity: 1,
            transition: {type: "spring", stiffness: 300, damping: 20, ease: "easeIn"}

        }
    }

  return (
    <div>
        <div className='section'>
        <h1>Our Services</h1>
            <motion.div className="services-grid"
                variants={containerVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false , margin: "-100px"}}>
                {Ourservice.map((service) => (
                    <motion.div variants={cardVariant} className='ser-card' key={service.id}>
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
        <Packages/>
    </div>
  )
}

export default Services;