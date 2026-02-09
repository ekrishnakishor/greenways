import React from 'react';
import styles from './PersonalisedSection.module.css';
import Button from '../../components/Button/Button';
import bgImage from '../../assets/personalised-banner.png'; 

const PersonalisedSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* The Sunset Background Card */}
        <div className={styles.bgCard} style={{ backgroundImage: `url(${bgImage})` }}>
          
          {/* The White Form Card */}
          <div className={styles.formCard}>
            <span className={styles.subhead}>Personalized Assistance</span>
            <h2 className={styles.headline}>Plan Your<br />Perfect Backwater Cruise</h2>
            <p className={styles.description}>
              Book a quick call with our team to design your ideal day aboard Greenway Backwaters, routes, timing, and special requests, all taken care of.
            </p>
            
            <form className={styles.form}>
              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>Full Name</label>
                  <input type="text" className={styles.input} />
                </div>
                <div className={styles.inputGroup}>
                  <label>Phone</label>
                  <input type="tel" className={styles.input} />
                </div>
              </div>
              
              <div className={styles.inputGroup}>
                <label>Email</label>
                <input type="email" className={styles.input} />
              </div>
              
              <div className={styles.inputGroup}>
                <label>How can we help?</label>
                <textarea className={styles.textarea}></textarea>
              </div>
              
              <div className={styles.submitWrapper}>
                <Button variant="primary" style={{ width: '100%', borderRadius: '12px' }}>Submit</Button>
              </div>
            </form>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default PersonalisedSection;