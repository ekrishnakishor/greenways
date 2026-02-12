import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

// 1. Accept the onBookClick prop
const Footer = ({ onBookClick }) => {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        
        {/* Left Column: CTA */}
        <div className={styles.column}>
          <h2 className={styles.headline}>
            Lets Explore<br />Together
          </h2>
          {/* 2. Trigger the Modal here */}
          <button className={styles.contactBtn} onClick={onBookClick}>
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
            <li><a href="/#about">About Us</a></li>
            <li><a href="/#houseboat">Our Houseboat</a></li>
            <li><a href="/route">Day Cruise Package</a></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/terms">Booking & Refund Policy</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Right Column: Contact & Socials */}
        <div className={styles.column}>
          <div className={styles.contactInfo}>
            <h4 className={styles.contactLabel}>Contact</h4>
            <p className={styles.contactName}>Mr. Rejaneesh K R</p>
            
            {/* 3. Clickable Phone Number with Icon */}
            <a href="tel:+919633083312" className={styles.iconLink}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              +91 96330 83312
            </a>

            {/* 4. Clickable Instagram Link with Icon */}
            <a 
              href="https://instagram.com/greenway_cruises" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.iconLink}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              @greenway_cruises
            </a>

            {/* Clickable Email */}
            <a href="mailto:greenwaybackwatercruise@gmail.com" className={styles.iconLink}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              greenwaybackwatercruise@gmail.com
            </a>
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