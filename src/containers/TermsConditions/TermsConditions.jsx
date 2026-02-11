import React from 'react';
import styles from './TermsConditions.module.css';

const TermsConditions = () => {
  return (
    <main className={styles.pageWrapper}>
      <article className={styles.container}>
        
        {/* SEO-Friendly Header */}
        <header className={styles.header}>
          <h1 className={styles.mainTitle}>Terms & Conditions</h1>
          <p className={styles.metaInfo}>
            Last updated: <time dateTime="2026-02-10">February 10, 2026</time>
          </p>
        </header>

        <div className={styles.content}>
          <section className={styles.section}>
            <p className={styles.introText}>
              Welcome to Greenway Backwater Cruises. These terms and conditions outline the rules and regulations for the use of our houseboat services and website. By booking a cruise with us, you accept these terms and conditions in full.
            </p>
          </section>

          <section className={styles.section}>
            <h2>1. Booking & Payments</h2>
            <p>To confirm a reservation, an advance payment is required. The specifics are as follows:</p>
            <ul className={styles.list}>
              <li><strong>Advance Payment:</strong> A minimum of 50% of the total tour cost must be paid at the time of booking to block the dates.</li>
              <li><strong>Balance Payment:</strong> The remaining balance must be paid prior to check-in or before the cruise commences.</li>
              <li><strong>Mode of Payment:</strong> We accept bank transfers, UPI, and cash payments. All prices mentioned are in Indian Rupees (INR).</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>2. Check-in & Check-out Policy</h2>
            <p>Strict adherence to timing is required to ensure the smooth operation of the cruise and compliance with local waterways regulations.</p>
            <ul className={styles.list}>
              <li><strong>Day Cruise:</strong> Check-in at 11:00 AM | Check-out at 5:00 PM.</li>
              <li><strong>Overnight Cruise:</strong> Check-in at 12:00 PM | Check-out at 9:00 AM (Next Day).</li>
              <li><strong>Late Arrival:</strong> In case of late arrival by the guest, the cruise time will not be extended. The boat must dock at the scheduled time (usually 5:30 PM) as per government regulations.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. Food & Beverages</h2>
            <p>We take pride in serving authentic Kerala cuisine tailored to your preferences.</p>
            <ul className={styles.list}>
              <li><strong>Menu:</strong> A fixed menu (Vegetarian/Non-Vegetarian) is provided. Any food allergies or special dietary requirements must be informed at least 24 hours prior to arrival.</li>
              <li><strong>Outside Food:</strong> Guests are permitted to bring additional beverages or snacks. However, cooking by guests inside the houseboat kitchen is strictly prohibited for safety reasons.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Air Conditioning (A/C) Usage</h2>
            <p>Please note the standard operational hours for A/C based on your booking type:</p>
            <ul className={styles.list}>
              <li><strong>Bedroom A/C:</strong> For overnight stays, A/C in the bedroom is operational from 9:00 PM to 6:00 AM.</li>
              <li><strong>Full-Time A/C:</strong> For "Premium" or "Luxury" bookings (including Day Cruises), A/C will be provided as per the package agreement.</li>
              <li><strong>Power Supply:</strong> The A/C is powered by generators/batteries. In the rare event of a technical failure, we will try to resolve it immediately, but refunds based solely on technical glitches are subject to management discretion.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>5. Cancellation & Refund Policy</h2>
            <p>If you wish to cancel your booking, the following charges apply based on the notice period given:</p>
            <ul className={styles.list}>
              <li><strong>15 Days before cruise:</strong> 100% refund of the advance amount.</li>
              <li><strong>7 to 14 Days before cruise:</strong> 50% refund of the advance amount.</li>
              <li><strong>Less than 7 Days:</strong> No refund of the advance amount.</li>
              <li><strong>Peak Season:</strong> During December 20th to January 5th, bookings are non-refundable.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>6. Guest Conduct & Safety</h2>
            <ul className={styles.list}>
              <li><strong>Illegal Activities:</strong> Use of drugs or illegal substances is strictly prohibited on board. We reserve the right to hand over violators to the police.</li>
              <li><strong>Safety:</strong> Guests must follow the instructions of the captain/crew. Jumping into the lake while the boat is moving is dangerous and strictly prohibited.</li>
              <li><strong>Plastics:</strong> Kerala Backwaters is a plastic-controlled zone. Please do not throw waste or plastic into the water. Bins are provided on board.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>7. Force Majeure</h2>
            <p>Greenway Backwater Cruises is not liable for cancellations or delays caused by natural calamities, strikes, political unrest, or technical breakdowns beyond our control. In such cases, we will try to offer an alternative date or a refund after deducting basic administrative costs.</p>
          </section>

          {/* Styled Contact Card */}
          <section className={`${styles.section} ${styles.contactSection}`}>
            <div className={styles.contactCard}>
              <h2>Contact Us</h2>
              <p>For clarifications regarding these terms, please contact:</p>
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
                  <span className={styles.label}>Address:</span> 
                  Greenway Backwaters, Alappuzha, Kerala
                </li>
              </ul>
            </div>
          </section>
          
        </div>
      </article>
    </main>
  );
};

export default TermsConditions;