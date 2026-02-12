import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Button from '../Button/Button';

// 1. Accept the onBookClick prop
const Navbar = ({ onBookClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Helper to close menu when mobile contact is clicked
  const handleMobileContact = () => {
    setIsOpen(false); // Close the mobile menu
    onBookClick();    // Open the Booking Modal
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        
        {/* LOGO */}
        <div className={styles.logoWrapper}>
            <h3 className={styles.logoText}>GREENWAY</h3>
            <span className={styles.logoSub}>BACKWATER CRUISES</span>
        </div>

        {/* NAVIGATION LINKS */}
        <div className={`${styles.links} ${isOpen ? styles.active : ''}`}>
          <a href="/">Home</a>
          <a href="/#about">About</a>
          <a href="/route">Cruise Route</a>
          <a href="/experience">Experience</a> {/* Updated link to anchor */}
          
          {/* Mobile Action Button */}
          <div className={styles.mobileAction}>
             {/* 2. Attach function to Mobile Button */}
             <Button variant="primary" onClick={handleMobileContact}>
                Contact Us
             </Button>
          </div>
        </div>

        {/* Desktop Action Button */}
        <div className={styles.desktopAction}>
          {/* 3. Attach function to Desktop Button */}
          <Button variant="primary" onClick={onBookClick}>
            Contact Us
          </Button>
        </div>

        {/* Hamburger Menu Toggle */}
        <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;