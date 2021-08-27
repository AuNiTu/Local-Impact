import React from 'react';
import Login from '../home/Login';
import Signup from '../home/Signup';
import styles from './styles.css';

const Header = () => (
  <header className={styles.Header}>
    <h1>Local Impact</h1>
    <h4>Powered by ESRI, Environmental Systems Research Institute</h4>
    <Login />
    <Signup />
  </header>
);

export default Header;
