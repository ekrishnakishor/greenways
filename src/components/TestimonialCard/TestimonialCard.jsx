import React from 'react';
import styles from './TestimonialCard.module.css';
import starIcon from '../../assets/star.png'; // Make sure this exists

const TestimonialCard = ({ image, name, location, review }) => {
  return (
    <div className={styles.card}>
      {/* Left Side: Image */}
      <div className={styles.imageWrapper}>
        <img src={image} alt={name} className={styles.image} loading='lazy' />
      </div>

      {/* Right Side: Content */}
      <div className={styles.content}>
        {/* 5 Stars Row */}
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map((_, i) => (
            <img key={i} src={starIcon} alt="star" className={styles.star} />
          ))}
        </div>

        <p className={styles.review}>"{review}"</p>

        <div className={styles.authorBox}>
          <h4 className={styles.name}>{name}</h4>
          <span className={styles.location}>{location}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;