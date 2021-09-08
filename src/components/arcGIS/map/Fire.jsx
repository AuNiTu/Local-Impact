import React from 'react';
import { useWebMap } from 'esri-loader-hooks';
import { useDbLocation } from '../../../state/SessionProvider';
import styles from './map.css';

function FireMap() {
  const { dbLocation } = useDbLocation();

  const [ref] = useWebMap('89ff30d783b849c8b22fc812d4c2f205', {
    view: {
      center: dbLocation,
      zoom: 8,
    },
  });

  return <div className={styles.map} ref={ref}></div>;
}

export default FireMap;
