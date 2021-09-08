import React from 'react';
import styles from './map.css';

function FetchingMap() {
  return (
    <div className={styles.loading}>
      {/* <img src="" alt="fetching your location" /> */}
      <h3>👀 Fetching your new location</h3>
    </div>
  );
}

export default FetchingMap;
