import React from 'react';
import styles from './PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
  return (
    <main className={styles.pageWrapper}>
      <article className={styles.container}>
        
        {/* SEO-Friendly Header */}
        <header className={styles.header}>
          <h1 className={styles.mainTitle}>Privacy Policy</h1>
          <p className={styles.metaInfo}>
            Last updated: <time dateTime="2026-02-10">February 10, 2026</time>
          </p>
        </header>

        <div className={styles.content}>
          <section className={styles.section}>
            <p className={styles.introText}>
              This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
            </p>
            <p>
              We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Interpretation and Definitions</h2>
            
            <h3>Interpretation</h3>
            <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
            
            <h3>Definitions</h3>
            <p>For the purposes of this Privacy Policy:</p>
            <ul className={styles.list}>
              <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
              <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to <span className={styles.highlight}>Greenway Backwater Cruises</span>.</li>
              <li><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</li>
              <li><strong>Country</strong> refers to: Kerala, India.</li>
              <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
              <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
              <li><strong>Service</strong> refers to the Website.</li>
              <li><strong>Website</strong> refers to Greenway Backwater Cruises, accessible from <a href="https://greenwaycruise.com" className={styles.link}>greenwaycruise.com</a></li>
              <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Collecting and Using Your Personal Data</h2>
            
            <h3>Types of Data Collected</h3>
            <h4>Personal Data</h4>
            <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
            <ul className={styles.list}>
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Address, State, Province, ZIP/Postal code, City</li>
              <li>Usage Data</li>
            </ul>
          </section>

          {/* ... You can keep the other text sections here structure the same ... */}

          <section className={styles.section}>
            <h2>Security of Your Personal Data</h2>
            <p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
          </section>

          {/* Styled Contact Card for Better UX */}
          <section className={`${styles.section} ${styles.contactSection}`}>
            <div className={styles.contactCard}>
              <h2>Have Questions?</h2>
              <p>If you have any questions about this Privacy Policy, please reach out to us:</p>
              <ul className={styles.contactList}>
                <li>
                   <span className={styles.label}>Email:</span> 
                   <a href="mailto:greenwaybackwatercruise@gmail.com">greenwaybackwatercruise@gmail.com</a>
                </li>
                <li>
                  <span className={styles.label}>Phone:</span> 
                  <a href="tel:+919633083312">+91 96330 83312</a>
                </li>
                <li>
                  <span className={styles.label}>Contact Person:</span> 
                  Mr. Rejaneesh K R
                </li>
              </ul>
            </div>
          </section>
          
        </div>
      </article>
    </main>
  );
};

export default PrivacyPolicy;