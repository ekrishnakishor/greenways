import React from 'react';
import styles from './AccordionItem.module.css';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`${styles.item} ${isOpen ? styles.open : ''}`}>
      <div className={styles.header} onClick={onClick}>
        <h4 className={styles.question}>{question}</h4>
        <span className={styles.icon}>
          {/* Simple Chevron SVG */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </div>
      
      <div className={styles.contentWrapper} style={{ maxHeight: isOpen ? '200px' : '0' }}>
        <div className={styles.answer}>
          {answer}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;