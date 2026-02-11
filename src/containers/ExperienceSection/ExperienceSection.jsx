import React from 'react';
import styles from './ExperienceSection.module.css';
import Button from '../../components/Button/Button';

const ExperienceSection = () => {
  // Your video ID
  const videoId = "2k06MmlAKfU";

  return (
    <section className={styles.section} id="packages">
      <div className={styles.container}>
        
        <h2 className={styles.mainHeadline}>
          A Premium Backwater Experience<br />
          in Just One Perfect Day
        </h2>

        {/* The Card */}
        <div className={styles.card}>
          
          {/* --- NEW: YouTube Video Background --- */}
          <div className={styles.videoWrapper}>
            <iframe 
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1`} 
              title="Experience Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              className={styles.iframeVideo}
            ></iframe>
          </div>

          {/* Content sits on top */}
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