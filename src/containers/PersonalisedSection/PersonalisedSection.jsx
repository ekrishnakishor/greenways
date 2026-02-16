import React, { useState } from 'react';
import styles from './PersonalisedSection.module.css';
import Button from '../../components/Button/Button';
import bgImage from '../../assets/personalised-banner.webp'; 

const PersonalisedSection = () => {
  // 1. State for Form Data
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  // 2. State for UI (Errors, Loading, Success)
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (!/^[A-Za-z\s]+$/.test(formData.name)) newErrors.name = "Name must be text only";

    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^\d{10,15}$/.test(formData.phone)) newErrors.phone = "Invalid phone number";

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 5. Handle Submit -> Send Email via Web3Forms
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitting(true);

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            // -----------------------------------------------------------
            // PASTE YOUR ACCESS KEY HERE
            access_key: "8dc05c4d-af57-471a-a1ac-a4bb873d2f36", 
            // -----------------------------------------------------------
            
            subject: "Form submitted from Greenways Website", // YOUR CUSTOM SUBJECT
            from_name: "Greenway Website",
            
            // Form Data
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            message: formData.message,
          }),
        });

        const result = await response.json();

        if (result.success) {
          setIsSuccess(true);
          setFormData({ name: '', phone: '', email: '', message: '' }); // Reset form
        } else {
          alert("Something went wrong. Please try again.");
        }
      } catch (error) {
        alert("Error sending message. Please check your connection.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.bgCard} style={{ backgroundImage: `url(${bgImage})` }}>
          
          <div className={styles.formCard}>
            
            {/* CONDITIONAL RENDERING: Show Success Message or Form */}
            {isSuccess ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ fontSize: '50px', marginBottom: '20px' }}>🎉</div>
                <h3 className={styles.headline} style={{ fontSize: '24px' }}>Request Received!</h3>
                <p className={styles.description}>
                  Thank you, {formData.name}. <br/>
                  We have received your details and will call you shortly to plan your cruise.
                </p>
                <Button 
                  variant="primary" 
                  onClick={() => setIsSuccess(false)}
                  style={{ marginTop: '10px' }}
                >
                  Send Another Request
                </Button>
              </div>
            ) : (
              <>
                <span className={styles.subhead}>Personalized Assistance</span>
                <h2 className={styles.headline}>Plan Your<br />Perfect Backwater Cruise</h2>
                <p className={styles.description}>
                  Book a quick call with our team to design your ideal day aboard Greenway Backwaters.
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
                    <Button 
                        variant="primary" 
                        style={{ width: '100%', borderRadius: '12px' }}
                        onClick={handleSubmit}
                        disabled={isSubmitting} // Prevent double clicks
                    >
                        {isSubmitting ? "Sending..." : "Submit Request"}
                    </Button>
                  </div>
                </form>
              </>
            )}
            
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default PersonalisedSection;