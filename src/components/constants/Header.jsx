import React from 'react';
import OneLogin from '../home/OneLogin';
import { useSession, useLogout, useLoading } from '../../state/SessionProvider';
import styles from './headerStyles.css';

import { useHistory } from 'react-router';

const Header = () => {
  const { session } = useSession();
  const logout = useLogout();
  const { loading } = useLoading();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    logout();
  };

  const handleClick = ({ target }) => {
    history.push(target.value);
  };

  if (loading) return <h2>Loading...</h2>;

  return (
    <>

      <header className={styles.Header}>

        <section>
          <h1>Hack the Planet</h1>
          <h4>Here to help discern the truth, with data & tech</h4> 
          <button value="/" onClick={handleClick}>🏛️ Home </button>
          <button value="/about" onClick={handleClick}>🔮 Leadership</button>
          <button value="/esriPartnership" onClick={handleClick}>🌱 Partner with ESRI</button>
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
