import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Button from '../Button/Button';
// import logo from '../../assets/nav-logo.png'; // You can remove this import now if unused

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        
        {/* NEW TEXT LOGO STRUCTURE */}
        <div className={styles.logoWrapper}>
            <h3 className={styles.logoText}>GREENWAY</h3>
            <span className={styles.logoSub}>BACKWATER CRUISES</span>
        </div>

        <div className={`${styles.links} ${isOpen ? styles.active : ''}`}>
          <a href="/">Home</a>
          <a href="/#about">About</a>
          <a href="/route">Cruise Route</a>
          <a href="/route">Packages</a>
          
          <div className={styles.mobileAction}>
             <Button variant="primary">Contact Us</Button>
          </div>
        </div>

        <div className={styles.desktopAction}>
          <Button variant="primary">Contact Us</Button>
        </div>

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