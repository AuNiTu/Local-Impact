/* eslint-disable max-len */
import React from 'react';
import styles from './About.css';

const About = () => {
  return (
    <section className={styles.General}>
      <main className={styles.About}>
        <h3>About Us</h3>
      </main>

      <main className={styles.Person}>
        <div>
          <h2>Tucker</h2>
          <a href="https://github.com/Grahf0085">
            <img src="./GitHub.png" className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/in/tuckerhoog/">
            <img src="./LinkedIn.png" className={styles.icon} />
          </a>

          <p>
               Backend-leaning software engineer focused on user-centric pragmatic design with real world applications. My passion for coding began as a kid, building basic websites in HTML but decided on pursuing other career opportunities since then. I continued learning Scheme, C++, and SQL to accomplish hobbyist goals. Always eager to find solutions to problems and goals by continually learning. 
          </p>

          <h2>Nick</h2>
          <a href="https://github.com/NickDayFSD">
            <img src="./GitHub.png" className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/in/nickdayfsd/">
            <img src="./LinkedIn.png" className={styles.icon} />
          </a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <h2>Austi</h2>
          <a href="https://github.com/austinxduong">
            <img src="./GitHub.png" className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/in/austinxduong/">
            <img src="./LinkedIn.png" className={styles.icon} />
          </a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </main>
    </section>
  );
};

export default About;
