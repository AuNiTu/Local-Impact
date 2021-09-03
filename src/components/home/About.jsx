/* eslint-disable max-len */
import React from 'react';
import styles from './About.css';
import { useHistory } from 'react-router';

const About = () => {
  const history = useHistory();

  const handleClick = ({ target }) => {
    history.push(target.value);
  };

  return (
    <>
      <main className={styles.About}>
        <h3>About Us</h3> 
      </main>

      <main className={styles.Person}>
        <div>
          <h2>Tucker</h2>
          <button value="/linkedinTucker" onClick={handleClick}> 💼 LinkedIn</button>
          <button value="/githubTucker" onClick={handleClick}> 🐱 GitHub</button>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            
          <h2>Nick</h2>
          <button value="/linkedinNick" onClick={handleClick}> 💼 LinkedIn</button>
          <button value="/githubNick" onClick={handleClick}> 🐱 GitHub</button>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          <h2>Austi</h2>
          <button value="/linkedinAusti" onClick={handleClick}> 💼 LinkedIn</button>
          <button value="/githubAusti" onClick={handleClick}>🐱 GitHub</button>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </main>
    </>
  );
};

export default About;
