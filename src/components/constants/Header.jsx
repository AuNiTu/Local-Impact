import React from 'react';
import OneLogin from '../home/OneLogin';
import { useSession } from '../../state/SessionProvider';
import styles from './headerStyles.css';

const Header = () => {
  const session = useSession();

  return (
    <header className={styles.Header}>
      <section>
        <h1>Local Impact</h1>
      </section>
      {session ? (
        <button>Logout</button>
      ) : (
        <section>
          <OneLogin />
        </section>
      )}
    </header>
  );
};

export default Header;
