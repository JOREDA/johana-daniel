import React from 'react';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={`flex justify-between items-center px-6 py-4 ${styles.headerContainer}`}>
      <div className="flex items-center">
      <Image 
        src="https://media.licdn.com/dms/image/v2/D4D0BAQFnMo8sYJdPJA/company-logo_200_200/company-logo_200_200/0/1702550996404?e=1738800000&v=beta&t=ZT08omlKUUKyAnzqq24nF8vNrj0MywbB6gjuMM4MfL0"
        alt="Company Logo"
        width={200} 
        height={200} 
        />
        <span className="ml-2 font-semibold text-gray-900">23BG</span>
      </div>

      <nav className="space-x-8">
        <a href="#workSpacedemo" className={styles.headerNavLink}>WorkSpace Demo</a>
        <a href="#resources" className={styles.headerNavLink}>Resources</a>
        <a href="#company" className={styles.headerNavLink}>Company</a>
        <a href="#contactus" className={styles.headerNavLink}>Contact us</a>
      </nav>
      <div>
        <button className={`mr-4 ${styles.headerNavLink}`}>Login</button>
        <button className={`${styles.headerButton} px-4 py-2 rounded-md`}>Sign up</button>
      </div>
    </header>
  );
}
