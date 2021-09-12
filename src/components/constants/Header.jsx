import React from 'react';
import OneLogin from '../home/OneLogin';
import { useSession, useLogout } from '../../state/SessionProvider';
import styles from './headerStyles.css';

import { useHistory } from 'react-router';

const Header = () => {
  const { session } = useSession();
  const logout = useLogout();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    logout();
  };

  const handleClick = ({ target }) => {
    history.push(target.value);
  };

  return (
    <section className={styles.headerContainer}>
      <header className={styles.Header}>
        <section>
          <h1>Local Impact</h1>
          <h4>Here to help discern the truth, with real data & technology</h4>
          <button value="/" onClick={handleClick}>
            🏛️ Home{' '}
          </button>
          <button value="/about" onClick={handleClick}>
            🔮 Leadership
          </button>
          {session ? (
            <button value="/map" onClick={handleClick}>
              🗺️ Map
            </button>
          ) : (
            <div></div>
          )}
        </section>

        {session ? (
          <form onSubmit={handleSubmit}>
            <p>Logged in as {session.username}</p>
            <button>Logout</button>
          </form>
        ) : (
          <section>
            <OneLogin />
          </section>
        )}
      </header>
    </section>
  );
};

export default Header;
