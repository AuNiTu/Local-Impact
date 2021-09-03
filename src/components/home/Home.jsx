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
            Local Change is a web app to see what&apos;s going on in your part
            of the world. We integrate ArcGIS; shining light on different factors that
            could be affecting your environment. Our app informs. We are here to help guide ways you can contribute towards the common good.
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
