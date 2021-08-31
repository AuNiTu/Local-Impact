import React from 'react';
// import Video from '../video/Video';
import styles from '../../styles/styles.css';

const Home = () => {

  return (
    <>
      <main className={styles.Home}>
        {/* <Video /> */}
      </main>

      <main className={styles.MissionStatement}>
        <div>
          <p>
            Local Change is a web app to see what&apos;s going on in your part of
            the world. We utilize arcgis (put link for arc gis) to show you
            different factors that could be affecting your environment and how you
            are different from the rest of the world.
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
