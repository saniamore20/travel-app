import React from 'react'
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <footer className='footer'>
        <div class="footer-container">

    <div>
      <h3>Contact</h3>
      <p>Mumbai, India</p>
      <p>hello@yourbrand.com</p>
      <p>+91 XXXXX XXXXX</p>
    </div>

    <div>
      <h3>Quick Links</h3>
      <p>Home</p>
      <p>Packages</p>
      <p>Gallery</p>
      <p>About</p>
    </div>

    <div>
      <h3>Services</h3>
      <p>Travel Packages</p>
      <p>Photography</p>
      <p>Custom Trips</p>
    </div>

    <div>
      <h3>Follow Us</h3>
      <p>Instagram</p>
      <p>Pinterest</p>
      <p>YouTube</p>
    </div>

  </div>

  <p class="footer-bottom">© 2026 Your Brand. All rights reserved.</p>
        
    </footer>
  )
}

export default Contact;