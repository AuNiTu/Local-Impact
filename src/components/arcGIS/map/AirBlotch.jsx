import React from 'react';
import { useWebMap } from 'esri-loader-hooks';
import { useDbLocation } from '../../../state/SessionProvider';
import styles from './map.css';

function AirBlotchMap() {
  const { dbLocation } = useDbLocation();

  const [ref] = useWebMap('92e772c4f65a4848a29bcc24c8f61bab', {
    view: {
      center: dbLocation,
      zoom: 8,
    },
  });

  return <div className={styles.map} ref={ref}></div>;
}

export default AirBlotchMap;
