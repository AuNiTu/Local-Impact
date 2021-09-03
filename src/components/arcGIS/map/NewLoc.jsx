import React from 'react';
import styles from '../mapview.css';

function FetchingMap() {
  return (
    <div style={{ height: '60vh', width: '100vw' }} className={styles.fetch}>
      {/* <img src="" alt="fetching your location" /> */}
      <h3>👀 Fetching your new location</h3>
    </div>
  );
}

export default FetchingMap;
