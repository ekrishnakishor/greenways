import React from 'react';
import styles from './ExperiencePage.module.css';
import { experienceData } from '../../data/experienceData';
import MediaCard from '../../components/MediaCard/MediaCard';

const ExperiencePage = () => {
  return (
    <div className={styles.pageWrapper}>
      
      {/* Header Section */}
      <section className={styles.header}>
        <span className={styles.subhead}>Guest Diaries</span>
        <h1 className={styles.headline}>Moments That Last Forever</h1>
        <p className={styles.description}>
          Real stories, genuine smiles, and unfiltered views captured by the guests who sailed with us.
        </p>
      </section>

      {/* The Social Wall Grid */}
      <section className={styles.wallSection}>
        <div className={styles.gridContainer}>
          {experienceData.map((item) => (
            <MediaCard 
              key={item.id} 
              item={item} 
              // Dynamically assign CSS classes based on 'size' property
              className={styles[item.size] || ''}
            />
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className={styles.ctaSection}>
        <p>Ready to create your own memories?</p>
      </section>

    </div>
  );
};

export default ExperiencePage;