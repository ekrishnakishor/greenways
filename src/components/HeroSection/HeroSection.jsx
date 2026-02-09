import React from 'react';
import styles from './HeroSection.module.css';
import Button from '../../components/Button/Button';
import heroBg from '../../assets/banner-img.png'; 

const HeroSection = () => {
  return (
    <section className={styles.sectionPadding}>
      <div className={styles.heroCard} style={{ backgroundImage: `url(${heroBg})` }}>
        
        <div className={styles.content}>
          <h1 className={styles.headline}>
            Let's Explore<br />Together
          </h1>
          <p className={styles.subhead}>
            A private backwater journey crafted for calm, comfort and connection.
          </p>
          
          <div className={styles.ctaWrapper}>
            <Button variant="white">Explore More</Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;