import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from "./styles.module.css";



function ContactUs() {
  return (
  
      <div class="container">
        <div class="row padding--lg">
          <div class={"col col--6 centered"}>
            <div className={styles.message}>
              <h1 className={styles.heading}>Get in touch</h1>
              <p>
                Whether you're a student, alumni, faculty, or company we’d love to hear from you!<br />
                Please email us at <a href="mailto:eboard@calpolyswift.org" className={styles.email}>eboard@calpolyswift.org</a>
              </p>
            </div>
          </div>
        </div>
        <div class="row padding--lg">
          <div class={"col col--6 centered"}>
            <div className={styles.message}>
            <h1 className={styles.heading}>Visit us</h1>
              <p>
                Come to our General SWIFT meetings and workshops at building 163 Room 1005! If you cannot join in person, join us through zoom. 
                For more information, join our discord!
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}


function Contact() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '25vh',
          fontSize: '20px',
        }}>
      <h1>Contact</h1>
      </div>
      
      <main>
        <ContactUs />
      </main>
    </Layout>
  );
}

export default Contact;