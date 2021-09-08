import React from 'react';
import { useWebMap } from 'esri-loader-hooks';
import { useDbLocation } from '../../../state/SessionProvider';
import styles from './map.css';

function AltFuelMap() {
  const { dbLocation } = useDbLocation();

  const [ref] = useWebMap('511dfe0a721c40f598cb2195c2a02527', {
    view: {
      center: dbLocation,
      zoom: 10,
    },
  });

  return <div className={styles.map} ref={ref}></div>;
}

export default AltFuelMap;
