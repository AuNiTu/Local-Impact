import React from 'react';
import { useWebMap } from 'esri-loader-hooks';
import { useGeoLocation } from '../../../state/Provider';

function FireMap() {
  const { location } = useGeoLocation();
  const [ref] = useWebMap('89ff30d783b849c8b22fc812d4c2f205', {
    view: {
      center: [location.longitude, location.latitude],
      zoom: 8,
    },
  });

  return <div style={{ height: '60vh' }} ref={ref}></div>;
}

export default FireMap;
