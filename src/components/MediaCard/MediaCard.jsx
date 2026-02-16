import React from 'react';
import styles from './MediaCard.module.css';

const MediaCard = ({ item, className }) => {
  return (
    <div className={`${styles.card} ${className}`}>
      
      {/* RENDER YOUTUBE (Atmospheric Mode) */}
      {item.type === 'youtube' && (
        <div className={styles.videoWrapper}>
          <iframe
            // Updated Params: autoplay, mute, loop, no controls, no keyboard
            src={`https://www.youtube.com/embed/${item.src}?autoplay=1&mute=1&controls=0&loop=1&playlist=${item.src}&playsinline=1&showinfo=0&rel=0&disablekb=1&modestbranding=1`}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className={styles.iframe}
          ></iframe>
          {/* Transparent layer to prevent clicking/pausing */}
          <div className={styles.videoOverlay}></div>
        </div>
      )}

      {/* RENDER IMAGE */}
      {item.type === 'image' && (
        <div className={styles.imageWrapper}>
           <img src={item.src} alt={item.title} className={styles.image} loading="lazy" />
           <div className={styles.overlay}>
             <h3 className={styles.title}>{item.title}</h3>
           </div>
        </div>
      )}

    </div>
  );
};

export default MediaCard;