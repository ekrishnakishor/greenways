import React, { useState } from 'react';
import styles from './PersonalisedSection.module.css';
import Button from '../../components/Button/Button';
import bgImage from '../../assets/personalised-banner.png'; 

const PersonalisedSection = () => {
  // 1. State for Form Data
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  // 2. State for Errors
  const [errors, setErrors] = useState({});

  // 3. Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // 4. Validate Inputs
  const validate = () => {
    let newErrors = {};
    
    // Name: Required & Text Only
    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (!/^[A-Za-z\s]+$/.test(formData.name)) newErrors.name = "Name must be text only";

    // Phone: Required & Numbers Only
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^\d{10,15}$/.test(formData.phone)) newErrors.phone = "Invalid phone number";

    // Email: Basic Regex
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 5. Handle Submit -> Send to WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const { name, phone, email, message } = formData;
      
      // Construct WhatsApp Message
      const text = `*New Custom Plan Request*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Email:* ${email || 'N/A'}%0A*Request:* ${message || 'N/A'}%0A%0APlease help me plan my cruise.`;
      
      const phoneNumber = "919633083312"; // Your WhatsApp Number
      
      // Open WhatsApp
      window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
      
      // Optional: Reset form
      setFormData({ name: '', phone: '', email: '', message: '' });
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.bgCard} style={{ backgroundImage: `url(${bgImage})` }}>
          
          <div className={styles.formCard}>
            <span className={styles.subhead}>Personalized Assistance</span>
            <h2 className={styles.headline}>Plan Your<br />Perfect Backwater Cruise</h2>
            <p className={styles.description}>
              Book a quick call with our team to design your ideal day aboard Greenway Backwaters, routes, timing, and special requests, all taken care of.
            </p>
            
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                {/* NAME INPUT */}
                <div className={styles.inputGroup}>
                  <label>Full Name <span className={styles.req}>*</span></label>
                  <input 
                    type="text" 
                    name="name"
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                </div>

                {/* PHONE INPUT */}
                <div className={styles.inputGroup}>
                  <label>Phone <span className={styles.req}>*</span></label>
                  <input 
                    type="tel" 
                    name="phone"
                    className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
                </div>
              </div>
              
              {/* EMAIL INPUT */}
              <div className={styles.inputGroup}>
                <label>Email</label>
                <input 
                  type="email" 
                  name="email"
                  className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                  value={formData.email}
                  onChange={handleChange}
                />
                 {errors.email && <span className={styles.errorText}>{errors.email}</span>}
              </div>
              
              {/* MESSAGE INPUT */}
              <div className={styles.inputGroup}>
                <label>How can we help?</label>
                <textarea 
                  name="message"
                  className={styles.textarea}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <div className={styles.submitWrapper}>
                {/* Note: Added onClick={handleSubmit} to ensure it triggers if Button type isn't 'submit' */}
                <Button 
                    variant="primary" 
                    style={{ width: '100%', borderRadius: '12px' }}
                    onClick={handleSubmit}
                >
                    Submit Request
                </Button>
              </div>
            </form>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default PersonalisedSection;