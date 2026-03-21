import React from 'react'
import About from './About';

const Packages = () => {

    const Ourpackages = [
  {
    id: 1,
    title: "Beach Vibes Escape",
    tagline: "Sunsets, waves & golden hour magic.",
    description:
      "Escape to dreamy beaches where every moment feels like a movie. From sunset photoshoots to late-night beach parties, this trip is all about vibes and visuals.",
    includes: [
      "Personal photographer",
      "Sunset beach photoshoot",
      "Instagram reels + drone shots",
      "Beach hopping",
      "Night parties & music vibes"
    ],
    perfectFor: "Friends, content creators, chill + party lovers"
  },
  {
    id: 2,
    title: "Mountain Escape",
    tagline: "Cozy, calm & aesthetic.",
    description:
      "Wake up to misty mountains, sip coffee in aesthetic cafés, and capture cozy moments that feel straight out of Pinterest.",
    includes: [
      "Aesthetic mountain photoshoots",
      "Bonfire nights",
      "Café hopping",
      "Cinematic reels",
      "Nature walks & hidden spots"
    ],
    perfectFor: "Soft aesthetic lovers, couples, peaceful vibe seekers"
  },
  {
    id: 3,
    title: "City Aesthetic Tour",
    tagline: "Main character energy in every street.",
    description:
      "Explore vibrant cities with a stylish twist—street photography, outfit shoots, and iconic locations for your next viral reel.",
    includes: [
      "Street style photoshoots",
      "Outfit-based shoots",
      "Reel creation",
      "Iconic + hidden spots",
      "Café & shopping exploration"
    ],
    perfectFor: "Fashion lovers, influencers, urban explorers"
  },
  {
    id: 4,
    title: "Party Trip Experience",
    tagline: "No sleep. Just vibes.",
    description:
      "For those who want to go all out—music, parties, and unforgettable nights captured in the most aesthetic way.",
    includes: [
      "Club & party access",
      "Nightlife photography",
      "Party reels",
      "Group activities",
      "Chill + after-party hangouts"
    ],
    perfectFor: "Friend groups, party lovers"
  },
  {
    id: 5,
    title: "Custom Dream Trip",
    tagline: "Your trip, your vibe.",
    description:
      "Want something unique? We design your entire trip based on your mood, aesthetic, and budget.",
    includes: [
      "Fully personalized itinerary",
      "Photographer included",
      "Custom content creation",
      "Unique experience planning"
    ],
    perfectFor: "Anyone who wants a unique experience"
  }
];


  return (
    <div className='section'>
        <h1>Our Packages</h1>
        <div className='package-grid'>
            {Ourpackages.map((packagee) => (
                <div className='card' key={packagee.id}>
                    <h1>{packagee.title}</h1>
                    <h3>{packagee.tagline}</h3>
                    <p>{packagee.description}</p>
                    <ul>
                        <li>{packagee.includes}</li>
                    </ul>
                    <h3>{packagee.perfectFor}</h3>
                </div>
            ))}
        </div>
        <About />
    </div>
  )
}

export default Packages;