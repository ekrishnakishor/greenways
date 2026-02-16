import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import Navigation Hook
import styles from './HeroSection.module.css';
import Button from '../../components/Button/Button';
import heroBg from '../../assets/banner-img.webp'; 

const HeroSection = ({ onBookClick }) => { // 2. Accept the booking function
  const navigate = useNavigate(); // 3. Initialize hook

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
            {/* Button 1: Goes to the Route Page */}
            <Button variant="white" onClick={() => navigate('/route')}>
              View Itinerary
            </Button>

            {/* Button 2: Opens the WhatsApp Modal */}
            <Button variant="primary" onClick={onBookClick}>
              Book Now
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;