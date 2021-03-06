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
          src="https://localimpactvideo.s3.us-west-2.amazonaws.com/local.mp4"
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

export default Video;
