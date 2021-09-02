import React from 'react';
import styles from './Video.css';

const AboutVideo = () => {
  return (
    <section className={styles.Video}>
      <div className={styles.VideoContainer}>
        <video playsInline 
          muted 
          loop 
          autoPlay 
          src="https://res.cloudinary.com/duwtuqr0p/video/upload/v1630551863/Pexels_Videos_1851190_ci2njg.mp4"
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
    
    
export default AboutVideo;


