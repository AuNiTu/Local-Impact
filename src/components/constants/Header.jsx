import React from 'react';
import OneLogin from '../home/OneLogin';
import { useSession, useLogout, useLoading } from '../../state/SessionProvider';
import styles from './headerStyles.css';
// import styles from '../About.css'
import { NavLink } from 'react-router-dom';

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

      <nav className={styles.NavLinks}>
        <NavLink to ="/"
          exact={true}
          style={{ color:'orange' }}
          activeStyle={{ color: 'blue' }}>
      🏛️ Home 
        </NavLink>

        <NavLink to ="/about"
          exact={true}
          style={{ color:'orange' }}
          activeStyle={{ color: 'blue' }}>
      🔮 About
        </NavLink>

      </nav>

      <header className={styles.Header}>
        <section>
          <h1>Hack the Planet</h1>
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
    </>
  );
};

export default Header;
