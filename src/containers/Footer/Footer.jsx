import React from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link for routing
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        
        {/* Left Column: CTA */}
        <div className={styles.column}>
          <h2 className={styles.headline}>
            Lets Explore<br />Together
          </h2>
          <button className={styles.contactBtn}>
            Contact Us 
            <span className={styles.arrowCircle}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </span>
          </button>
        </div>

        {/* Center Column: Links */}
        <div className={styles.column}>
          <ul className={styles.linksList}>
            {/* Note: We use /#id so these work even when clicked FROM the privacy page */}
            <li><a href="/#about">About Us</a></li>
            <li><a href="/#houseboat">Our Houseboat</a></li>
            <li><a href="/route">Day Cruise Package</a></li>
            
            {/* Internal Pages use Link */}
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/terms">Booking & Refund Policy</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Right Column: Contact & Logo */}
        <div className={styles.column}>
          <div className={styles.contactInfo}>
            <h4 className={styles.contactLabel}>Contact</h4>
            <p className={styles.contactName}>Mr. Rejaneesh K R</p>
            <p>+91 96330 83312</p>
            <p>greenwaybackwatercruise@gmail.com</p>
          </div>
          
          <div className={styles.logoWrapper}>
            <h3 className={styles.logoText}>GREENWAY</h3>
            <span className={styles.logoSub}>BACKWATER CRUISES</span>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className={styles.copyrightBar}>
        © 2026 Greenway Backwaters. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;