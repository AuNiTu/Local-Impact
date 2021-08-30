import React from 'react';
import { useWebMap } from 'esri-loader-hooks';
import { useGeoLocation } from '../../../state/Provider';

function AltFuelMap() {
  const { location } = useGeoLocation();
  const [ref] = useWebMap('511dfe0a721c40f598cb2195c2a02527', {
    view: {
      center: [location.longitude, location.latitude],
      zoom: 10,
    },
  });

  return <div style={{ height: '60vh' }} ref={ref}></div>;
}

export default AltFuelMap;
