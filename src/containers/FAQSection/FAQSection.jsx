import React, { useState } from 'react';
import styles from './FAQSection.module.css';
import AccordionItem from '../../components/AccordionItem/AccordionItem';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // First one open by default, or null for none

  const faqs = [
    {
      question: "Is the houseboat fully air-conditioned during the cruise?",
      answer: "Yes, our luxury houseboats are fully air-conditioned. You can enjoy a cool and comfortable atmosphere in the bedroom and dining areas throughout your cruise."
    },
    {
      question: "Can we customize the route or itinerary?",
      answer: "Absolutely! Since this is a private cruise, we can tailor the route to your preferences, whether you want to explore narrow canals, visit villages, or stick to the main lakes."
    },
    {
      question: "Do you allow private bookings for couples or small groups?",
      answer: "Yes, our boats are exclusively designed for private bookings. Whether you are a couple on a romantic getaway or a small family, you get the entire boat to yourselves."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Badge and Title */}
        <div className={styles.header}>
          <span className={styles.badge}>FAQ's</span>
          <h2 className={styles.headline}>Frequently Asked Questions</h2>
        </div>

        {/* List of Items */}
        <div className={styles.list}>
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;