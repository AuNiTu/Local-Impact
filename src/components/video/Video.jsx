import React from 'react';
import styles from './Video.css';

const Video = () => {
  return (
    <section className={styles.Video}>
      <div className={styles.VideoContainer}>
        <video playsInline 
          muted 
          loop 
          autoPlay 
          src="local.mp4"
          style={{
            position:'fixed',
            width: '100%',
            left: '50%',
            top: '50%',
            height: '100%',
            objectFit: 'cover',
            transform: 'translate(-50%, -50%)',
            zIndex: '-1',
          }}
        />
      </div>
    </section>
  );

};

//migrated to AMAZON S3 1 year free tier. moved from cloudinary, they are expiring on sept 10 2021
//updated sept 21. Amazon S3 free tier for month of sept, reached 85% free 5gb. hosting video locally

export default Video;
