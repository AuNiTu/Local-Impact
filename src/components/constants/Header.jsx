import React from 'react';
import OneLogin from '../home/OneLogin';
import { useSession, useLogout } from '../../state/SessionProvider';
import styles from './headerStyles.css';

const Header = () => {
  const session = useSession();
  const logout = useLogout();

  const handleSubmit = async (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <header className={styles.Header}>
      <section>
        <h1>Local Impact</h1>
      </section>
      {session ? (
        <form onSubmit={handleSubmit}>
          <button>Logout</button>
        </form>
      ) : (
        <section>
          <OneLogin />
        </section>
      )}
    </header>
  );
};

export default Header;
