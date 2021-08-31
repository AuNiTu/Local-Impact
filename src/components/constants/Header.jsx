import React from 'react';
import OneLogin from '../home/OneLogin';
import { useSession, useLogout, useLoading } from '../../state/SessionProvider';
import styles from './headerStyles.css';

const Header = () => {
  const session = useSession();
  const logout = useLogout();
  const { setLoading } = useLoading();

  console.log(session);

  // if (loading) return <h2>Loading</h2>;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    logout();
  };

  return (
    <header className={styles.Header}>
      <section>
        <h1>Hack the Planet</h1>
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
