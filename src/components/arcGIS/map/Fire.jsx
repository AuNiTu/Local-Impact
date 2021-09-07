import React from 'react';
import { useWebMap } from 'esri-loader-hooks';
import { useDbLocation } from '../../../state/SessionProvider';

function FireMap() {
  const { dbLocation } = useDbLocation();

  const [ref] = useWebMap('89ff30d783b849c8b22fc812d4c2f205', {
    view: {
      center: dbLocation,
      zoom: 8,
    },
  });

  return <div style={{ height: '60vh' }} ref={ref}></div>;
}

export default FireMap;
