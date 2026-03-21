import React from 'react'
import Packages from './Packages';

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
    
  return (
    <div>
        <div className='section'>
        <h1>Our Services</h1>
        <div className='services-grid'>
            {Ourservice.map((service) => (
                <div className='ser-card' key={service.id}>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                </div>
            ))}
        </div>
        </div>
        <Packages/>
    </div>
  )
}

export default Services;