import React from 'react';
import Login from '../home/Login';
import Signup from '../home/Signup';
import OneLogin from '../home/OneLogin';
import { useSession } from '../../state/SessionProvider';
import styles from './headerStyles.css';

const Header = () => {

  const session = useSession();

  return (
  
    <header className={styles.Header}>
      <section>
        <h1>Local Impact</h1>
        <h4>Powered by ESRI, Environmental Systems Research Institute</h4>
      </section>
      { session ? <h1>Logout</h1> : <section> <OneLogin /></section> }
    </header>
  );

};

export default Header;
