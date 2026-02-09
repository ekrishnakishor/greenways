import React from 'react';
import styles from './FeatureSection.module.css';
import FeatureCard from '../../components/FeatureCard/FeatureCard';

// Importing the icons you confirmed are in assets
import diamondIcon from '../../assets/diamond-icon.png';
import palmIcon from '../../assets/palm-tree-icon.png';
import boatIcon from '../../assets/boat-icon.png';

const FeaturesSection = () => {
  const features = [
    {
      icon: diamondIcon,
      title: "Private Luxury on Water",
      description: "A fully air-conditioned, single-bedroom houseboat crafted for privacy and comfort. Perfectly suited for couples, families, or small groups seeking a premium and peaceful backwater stay."
    },
    {
      icon: palmIcon,
      title: "Authentic Kerala Experience",
      description: "Cruise through timeless backwaters while enjoying traditional hospitality, local cuisine, and the slow rhythm of Kerala's village life—blending culture with comfort."
    },
    {
      icon: boatIcon,
      title: "Personalized & Peaceful Cruising",
      description: "From flexible itineraries to attentive onboard service, every journey aboard DHARIYA II is designed around your pace—unhurried, intimate, and memorable."
    }
  ];

  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        
        {/* The Badge and Title */}
        <div className={styles.header}>
          <span className={styles.badge}>About</span>
          <h2 className={styles.headline}>Explore What We Have To Offer</h2>
        </div>
        
        {/* The Grid of Cards */}
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;