import React from 'react';
import styles from '../styles/TrustedBy.module.css';

export default function TrustedBy() {
  const companies = [
    "com1", "com2", "com3", "com4", "com5", "com6",
    "com7", "com8", "com9", "com10", "com11", "com12"
  ];

  return (
    <section className={styles.trustedByContainer}>
      <h2 className={styles.trustedByTitle}>
        Trusted by more than 100 teams of all sizes
      </h2>
      <div className="mt-8 flex flex-wrap justify-center space-x-8">
        {companies.map((company, index) => (
          <img
            key={index}
            src={`/logos/${company}.png`} 
            alt={`${company} logo`}
            className={styles.companyLogo}
          />
        ))}
      </div>
    </section>
  );
}
