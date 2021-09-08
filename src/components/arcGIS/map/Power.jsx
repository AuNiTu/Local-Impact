import React from 'react';
import { useWebMap } from 'esri-loader-hooks';
import { useDbLocation } from '../../../state/SessionProvider';
import styles from './map.css';

function PowerPlantsMap() {
  const { dbLocation } = useDbLocation();

  const [ref] = useWebMap('f18b0ae4d06743bd87cbaea51e8109e9', {
    view: {
      center: dbLocation,
      zoom: 10,
    },
  });

  return <div className={styles.map} ref={ref}></div>;
}

export default PowerPlantsMap;
