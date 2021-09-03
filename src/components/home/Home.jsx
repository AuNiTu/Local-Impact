import React from 'react';
import Video from '../video/Video';
import styles from '../../styles/styles.css';

const Home = () => {
  return (
    <>
      <main className={styles.Home}>
        <Video />
      </main>

      <main className={styles.MissionStatement}>
        <div>
          <p>
            Hack the Planet is a web app designed to show you some of the
            climate change factors in your area using ArcGIS maps from ESRI.
          </p>
          <p>
            How is your area impacting climate change? What can you do to make
            an impact?
          </p>
          <p>
            Whether you wish to make changes to your habits or legislature,
            we&apos;re here to help you figure out where to start.
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
