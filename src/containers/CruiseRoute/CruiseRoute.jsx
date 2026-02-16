import React, { useEffect, useRef, useState } from 'react';
import styles from './CruiseRoute.module.css';
import Button from '../../components/Button/Button';
import heroBg from '../../assets/section-img-3.webp';
import ctaBg from '../../assets/personalised-banner.webp';

// 1. Accept the prop here
const CruiseRoute = ({ onBookClick }) => {
  const sectionRef = useRef(null);
  const [boatTop, setBoatTop] = useState(0); 
  
  const stopRefs = useRef([]);
  const [visibleStops, setVisibleStops] = useState(new Set());

  const stops = [
    { id: 1, name: "Edakochi", desc: "Our journey begins here. Board the houseboat and settle in with a welcome drink.", side: "left" },
    { id: 2, name: "Vembanad Lake", desc: "Cruise into the longest lake in India. Witness vast horizons.", side: "right" },
    { id: 3, name: "Thevara Canal", desc: "Navigate through narrow, lush canals. A perfect spot for photography.", side: "left" },
    { id: 4, name: "Kundanoor", desc: "Pass by the bustling island region, blending modern bridges with rustic life.", side: "right" },
    { id: 5, name: "Valanthakad", desc: "An untouched mangrove island. Experience pure silence.", side: "left" },
    { id: 6, name: "Cheppanam", desc: "Famous for shrimp farming. Watch the village rhythm from your deck.", side: "right" },
    { id: 7, name: "Aroor", desc: "The industrial yet scenic gateway, marking the return leg.", side: "left" },
    { id: 8, name: "Edakochi", desc: "We dock back at sunset, concluding a memorable day.", side: "right" }
  ];

  // 1. LOGIC: Move Boat based on Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const startPoint = sectionTop - (windowHeight / 2); 
      const endPoint = sectionTop + sectionHeight - windowHeight;
      
      let progress = (scrollY - startPoint) / (endPoint - startPoint);

      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;

      setBoatTop(progress * 100); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. LOGIC: Reveal Cards on Scroll (Intersection Observer)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setVisibleStops((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.4 } 
    );

    stopRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.pageWrapper}>
      
      <section className={styles.hero} style={{ backgroundImage: `url(${heroBg})` }}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <span className={styles.tagline}>The Journey</span>
          <h1 className={styles.heroTitle}>Our Signature Route</h1>
          <p className={styles.heroDesc}>
            Edakochi ➝ Vembanad Lake ➝ Thevara Canal ➝ Kundanoor ➝ Valanthakad ➝ Cheppanam ➝ Aroor ➝ Edakochi
          </p>
          <div className={styles.quoteBox}>
            "Enjoy serene canals, village life, lush greenery, and expansive lake views throughout the journey."
          </div>
        </div>
      </section>

      <section className={styles.timelineSection} ref={sectionRef}>
        <div className={styles.container}>
          
          <div className={styles.line}></div>

          {/* Moving Boat */}
          <div 
            className={styles.movingBoatWrapper} 
            style={{ top: `${boatTop}%` }}
          >
            <div className={styles.boatIcon}>
               <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 17L3 21H21L22 17H2Z" fill="#006D5B" stroke="#fff" strokeWidth="1.5"/>
                <path d="M4 17V12H20V17" stroke="#006D5B" strokeWidth="1.5"/>
                <path d="M4 12C4 12 5 8 12 8C19 8 20 12 20 12" stroke="#006D5B" strokeWidth="1.5"/>
              </svg>
            </div>
          </div>

          <div className={styles.stopsWrapper}>
            {stops.map((stop, index) => (
              <div 
                key={stop.id} 
                className={`${styles.stopRow} ${styles[stop.side]} ${visibleStops.has(index) ? styles.isVisible : ''}`}
                ref={(el) => (stopRefs.current[index] = el)}
                data-index={index}
              >
                <div className={styles.stopCard}>
                  <span className={styles.stopNumber}>0{stop.id}</span>
                  <h3 className={styles.stopName}>{stop.name}</h3>
                  <p className={styles.stopDesc}>{stop.desc}</p>
                </div>

                <div className={`${styles.dot} ${visibleStops.has(index) ? styles.activeDot : ''}`}></div>
                
                <div className={styles.spacer}></div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className={styles.finalCta} style={{ backgroundImage: `url(${ctaBg})` }}>
        <div className={styles.ctaOverlay}></div>
        <div className={styles.ctaContentWrapper}>
          <p className={styles.ctaSubtitle}>Experience the Rhythm of Kerala</p>
          <h2 className={styles.ctaTitle}>Ready to Sail?</h2>
          <div className={styles.ctaAction}>
             {/* 2. Attach the function here */}
             <Button variant="white" onClick={onBookClick}>Book Your Date</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CruiseRoute;