/* eslint-disable max-len */
import React from 'react';
import styles from './About.css';

const About = () => {
  return (
    <main className={styles.General}>
      <section className={styles.About}>
        <h3>About Us</h3>
      </section>

      <section className={styles.Team}>
        <div className={styles.Person}>
          <p className={styles.Head}>
            <h2>Tucker</h2>
            <div className={styles.links}>
              <a href="https://github.com/Grahf0085">
                <img src="./GitHub.png" className={styles.icon} />
              </a>
              <a href="https://www.linkedin.com/in/tuckerhoog/">
                <img src="./LinkedIn.png" className={styles.icon} />
              </a>
            </div>
          </p>

          <p>
            Backend-leaning software engineer focused on user-centric pragmatic
            design with real world applications. My passion for coding began as
            a kid, building basic websites in HTML but decided on pursuing other
            career opportunities since then. I continued learning Scheme, C++,
            and SQL to accomplish hobbyist goals. Always eager to find solutions
            to problems and goals by continually learning.
          </p>
        </div>

        <div className={styles.Person}>
          <p className={styles.Head}>
            <h2>Nick</h2>
            <div className={styles.links}>
              <a href="https://github.com/NickDayFSD">
                <img src="./GitHub.png" className={styles.icon} />
              </a>
              <a href="https://www.linkedin.com/in/nickdayfsd/">
                <img src="./LinkedIn.png" className={styles.icon} />
              </a>
            </div>
          </p>
          <p>
            I&apos;m a fullstack software developer. I have great concern for
            our environment and I want to use my technical prowess to make a
            difference in our struggle against global warming. My experience
            growing up with an artist and in technical and creative writing
            gives me an eye for design and clean code.
          </p>
        </div>

        <div className={styles.Person}>
          <p className={styles.Head}>
            <h2>Austi</h2>
            <div className={styles.links}>
              <a href="https://github.com/austinxduong">
                <img src="./GitHub.png" className={styles.icon} />
              </a>
              <a href="https://www.linkedin.com/in/austinxduong/">
                <img src="./LinkedIn.png" className={styles.icon} />
              </a>
            </div>
          </p>
          <p>
            <p>
              Full stack software engineer. I have over 7+ years in operations &
              professional services, with an accounting/economics discipline. I
              have held positions as an ERP consultant to an account manager,
              working alongside janitors to C-suites, all over the US. Enjoyable
              and easy to work with, my mission is to build useful applications
              that solves real world, human-centered problems.
            </p>
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
