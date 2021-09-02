import React from 'react';
import OneLogin from '../home/OneLogin';
import { useSession, useLogout, useLoading } from '../../state/SessionProvider';
import styles from './headerStyles.css';

const Header = () => {
  const { session } = useSession();
  const logout = useLogout();
  const { loading } = useLoading();

  const handleSubmit = (e) => {
    e.preventDefault();
    logout();
  };

  if (loading) return <h2>Loading...</h2>;

  return (
    <>
      <header className={styles.Header}>
        <section>
          <h1>Hack the Planet</h1>
        </section>
        <section>
          {session ? (
            <form onSubmit={handleSubmit}>
              <p>Logged in as</p>
              <p>{session.username}</p>
              <button>Logout</button>
            </form>
          ) : (
            <OneLogin />
          )}
        </section>
      </header>
    </>
  );
};

export default Header;
