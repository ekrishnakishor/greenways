import React from 'react';
import styles from './ExperienceSection.module.css';
import Button from '../../components/Button/Button';
import bgImage from '../../assets/experience-banner.png'; // Make sure this is the boat image

const ExperienceSection = () => {
  return (
    <section className={styles.section} id="packages">
      <div className={styles.container}>
        
        {/* The Headline sits outside the card */}
        <h2 className={styles.mainHeadline}>
          A Premium Backwater Experience<br />
          in Just One Perfect Day
        </h2>

        {/* The Large Card */}
        <div className={styles.card} style={{ backgroundImage: `url(${bgImage})` }}>
          <div className={styles.content}>
            <h3 className={styles.packageTitle}>Day Cruise Escape</h3>
            
            <div className={styles.priceTag}>
              <span className={styles.amount}>Enquire Now</span>
              <span className={styles.detail}>for package*</span>
            </div>
            
            <p className={styles.description}>
              Relax, cruise, and experience Kerala's backwaters in complete comfort 
              aboard our fully air-conditioned luxury houseboat.
            </p>
            
            <div className={styles.actions}>
              <Button variant="white">Explore More</Button>
              <Button variant="primary">Book Now</Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;