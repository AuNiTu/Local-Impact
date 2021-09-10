import React from 'react';
import { useWebMap } from 'esri-loader-hooks';
import { useDbLocation } from '../../../state/SessionProvider';
import styles from './map.css';

function AirSensorMap() {
  const { dbLocation } = useDbLocation();

  const [ref] = useWebMap('730f553d21ea49e5a6cf38fe6cc63dc4', {
    view: {
      center: dbLocation,
      zoom: 8,
    },
  });

  return <div className={styles.map} ref={ref}></div>;
}

export default AirSensorMap;
