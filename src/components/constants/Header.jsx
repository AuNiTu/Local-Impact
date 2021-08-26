import React from 'react';
import Login from '../home/Login';
import styles from './styles.css';

const Header = () => (
  <header className={styles.Header}>
    <h1>Local Impact</h1>
    <h4>Powered by ESRI, Environmental Systems Research Institute</h4>
    <Login />
  </header>
);

export default Header;
