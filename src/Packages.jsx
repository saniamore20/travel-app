import React from "react";
import About from "./About";
import { motion } from "motion/react";

// ✅ images
import beach from "./assets/beach.jpg";
import mountain from "./assets/mountain.jpg";
import city from "./assets/city.jpg";
import party from "./assets/party.jpg";
import dream from "./assets/dream.jpg";

/* 🎬 CARD ANIMATION (same as demo) */
const cardVariants = {
  offscreen: {
    y: 200,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const Packages = () => {

  const Ourpackages = [
    {
      id: 1,
      title: "Beach Vibes Escape",
      image: beach,
      tagline: "Sunsets, waves & golden hour magic.",
      description: "Escape to dreamy beaches with cinematic vibes.",
    },
    {
      id: 2,
      title: "Mountain Escape",
      image: mountain,
      tagline: "Cozy, calm & aesthetic.",
      description: "Misty mountains + Pinterest vibes.",
    },
    {
      id: 3,
      title: "City Aesthetic Tour",
      image: city,
      tagline: "Main character energy.",
      description: "Urban shoots + stylish reels.",
    },
    {
      id: 4,
      title: "Party Trip",
      image: party,
      tagline: "No sleep. Just vibes.",
      description: "Clubs + nightlife + memories.",
    },
    {
      id: 5,
      title: "Custom Dream Trip",
      image: dream,
      tagline: "Your vibe, your rules.",
      description: "Fully personalized experience.",
    }
  ];

  return (
    <>
    <div className="package-title">OUR PACKAGES</div>
    <div className="scroll-container">

      {Ourpackages.map((pkg, i) => (

        <motion.div
          key={pkg.id}
          className="scroll-card-container"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.5 }}
        >

          {/* 💫 CARD */}
          <motion.div className="scroll-card" variants={cardVariants}>

            {/* LEFT TEXT */}
            <div className="card-text">
              <h1>{pkg.title}</h1>
              <h3>{pkg.tagline}</h3>
              <p>{pkg.description}</p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="card-image">
              <img src={pkg.image} alt={pkg.title} />
            </div>

          </motion.div>

        </motion.div>
        

      ))}

      <br></br>

      
    </div>
    <About />
    </>
  );
};

export default Packages;