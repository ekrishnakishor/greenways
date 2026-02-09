import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Button from '../Button/Button';
import logo from '../../assets/nav-logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <img src={logo} alt="Greenway Logo" className={styles.logoImage} />
        </div>

        <div className={`${styles.links} ${isOpen ? styles.active : ''}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#packages">Cruise Route</a> {/* Updated text */}
          <a href="#packages">Packages</a>
          
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