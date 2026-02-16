import React from 'react';
import styles from './GallerySection.module.css';

// Importing the images based on your file list
// Make sure these match your actual file names in the assets folder
import img1 from '../../assets/section-img-1.webp'
import img2 from '../../assets/section-img-2.webp';
import img3 from '../../assets/section-img-3.webp';
import img4 from '../../assets/section-img-4.webp';
import img5 from '../../assets/section-img-5.webp';
import img6 from '../../assets/section-img-6.webp';

const GallerySection = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {images.map((img, index) => (
          <div key={index} className={styles.card}>
            <img src={img} alt={`Gallery ${index}`} className={styles.image} loading='lazy' />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;