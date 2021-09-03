import React from 'react';
import styles from './footer.css';

const Footer = () => (
  <footer>
    <a
      className={styles.esri}
      href="https://www.esri.com/en-us/industries/environment-natural-resources/overview"
    >
      -Powered by ESRI, Environmental Systems Research Institute
    </a>
    <span className={styles.Footer}>Coded by Austin, Nick, and Tucker-</span>
  </footer>
);

export default Footer;
