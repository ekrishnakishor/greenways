import React, { useRef } from 'react';
import styles from './Testimonials.module.css';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';

// Using the assets you specified
import reviewImg from '../../assets/review.jpg';

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 520; // Card width + gap
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const reviews = [
    {
      name: "Arjun Pillai",
      location: "Calicut, Kerala",
      review: "Amazing! They made the whole process smooth from start to finish.",
      image: reviewImg
    },
    {
      name: "Neha Nair",
      location: "Chennai, Tamil Nadu",
      review: "Super efficient, professional, and always on hand to answer questions.",
      image: reviewImg
    },
    {
      name: "Rahul Mehta",
      location: "Mumbai, Maharashtra",
      review: "The best houseboat experience we have ever had. Truly magical.",
      image: reviewImg
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Header with Arrows */}
        <div className={styles.header}>
          <div className={styles.titleBox}>
            <span className={styles.badge}>Our Travellers</span>
            <h2 className={styles.headline}>Explore Testimonials</h2>
          </div>
          
          <div className={styles.arrows}>
            <button className={styles.arrowBtn} onClick={() => scroll('left')}>
              ←
            </button>
            <button className={styles.arrowBtn} onClick={() => scroll('right')}>
              →
            </button>
          </div>
        </div>

        {/* Scrollable List */}
        <div className={styles.slider} ref={scrollRef}>
          {reviews.map((item, index) => (
            <TestimonialCard 
              key={index}
              name={item.name}
              location={item.location}
              review={item.review}
              image={item.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;