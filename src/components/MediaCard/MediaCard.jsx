import React from 'react';
import styles from './MediaCard.module.css';

const MediaCard = ({ item, className }) => {
  return (
    <div className={`${styles.card} ${className}`}>
      
      {/* RENDER YOUTUBE */}
      {item.type === 'youtube' && (
        <div className={styles.videoWrapper}>
          <iframe
            src={`https://www.youtube.com/embed/${item.src}?controls=1&rel=0&modestbranding=1`}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.iframe}
          ></iframe>
        </div>
      )}

      {/* RENDER IMAGE */}
      {item.type === 'image' && (
        <div className={styles.imageWrapper}>
           <img src={item.src} alt={item.title} className={styles.image} loading="lazy" />
           {/* Gradient overlay for text readability */}
           <div className={styles.overlay}>
             <h3 className={styles.title}>{item.title}</h3>
           </div>
        </div>
      )}

    </div>
  );
};

export default MediaCard;