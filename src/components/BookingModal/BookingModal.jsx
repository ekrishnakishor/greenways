import React, { useState } from 'react';
import styles from './BookingModal.module.css';

const BookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: ''
  });

  // State to track which fields have errors
  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    date: false
  });

  if (!isOpen) return null;

  // Real-time Validation Function
  const validateField = (name, value) => {
    let isError = false;

    if (name === 'name') {
      // Regex: Allows only Letters and Spaces (No numbers/symbols)
      const nameRegex = /^[A-Za-z\s]*$/;
      isError = !nameRegex.test(value); 
    } 
    else if (name === 'phone') {
      // Regex: Allows only Numbers
      const phoneRegex = /^[0-9]*$/;
      isError = !phoneRegex.test(value);
    }
    
    // Update the error state for this specific field
    setErrors(prev => ({ ...prev, [name]: isError }));
    
    return isError;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // 1. Validate immediately as user types
    validateField(name, value);

    // 2. Update the value
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Final check before sending
    const nameInvalid = validateField('name', formData.name);
    const phoneInvalid = validateField('phone', formData.phone);
    
    // Check for empty fields
    if (!formData.name || !formData.phone || !formData.date) {
      alert("Please fill in all required fields marked with *");
      return;
    }

    // If validation fails (red boxes), stop here
    if (nameInvalid || phoneInvalid) {
      return;
    }

    // --- SUCCESS: SEND TO WHATSAPP ---
    const { name, phone, date } = formData;
    const message = `*New Booking Request*%0A%0AName: ${name}%0APhone: ${phone}%0ADate: ${date}%0A%0APlease contact me back.`;
    const phoneNumber = "919633083312"; 
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');

    onClose();
  };

  return (
    <div className={styles.overlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>&times;</button>
        
        <h2 className={styles.title}>Plan Your Escape</h2>
        <p className={styles.subtitle}>Leave your details and we will call you back.</p>
        
        <form className={styles.form} onSubmit={handleSubmit}>
          
          {/* NAME FIELD */}
          <div className={styles.inputGroup}>
            <label className={styles.label}>
              Your Name <span className={styles.required}>*</span>
            </label>
            <input 
              type="text" 
              name="name"
              placeholder="e.g. John Doe" 
              value={formData.name}
              onChange={handleChange}
              // If error is true, add the 'error' class
              className={errors.name ? styles.inputError : ''} 
              required 
            />
            {errors.name && <span className={styles.errorText}>Text only, please.</span>}
          </div>

          {/* PHONE FIELD */}
          <div className={styles.inputGroup}>
            <label className={styles.label}>
              Phone Number <span className={styles.required}>*</span>
            </label>
            <input 
              type="tel" 
              name="phone"
              placeholder="e.g. 9876543210" 
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? styles.inputError : ''}
              required 
              maxLength="15"
            />
            {errors.phone && <span className={styles.errorText}>Numbers only, please.</span>}
          </div>

          {/* DATE FIELD */}
          <div className={styles.inputGroup}>
             <label className={styles.label}>
               Preferred Date <span className={styles.required}>*</span>
             </label>
            <input 
              type="date" 
              name="date"
              value={formData.date}
              onChange={handleChange}
              required 
            />
          </div>
          
          <button type="submit" className={styles.submitBtn}>Request Callback</button>
        </form>

        <div className={styles.divider}>OR</div>

        <a 
          href="https://wa.me/919633083312?text=Hi,%20I%20have%20a%20general%20query" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.whatsappBtn}
        >
           <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default BookingModal;