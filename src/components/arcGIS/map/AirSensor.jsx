import React from 'react';
import { useWebMap } from 'esri-loader-hooks';
import { useGeoLocation } from '../../../state/Provider';

function AirSensorMap() {
  const { location } = useGeoLocation();
  const [ref] = useWebMap('730f553d21ea49e5a6cf38fe6cc63dc4', {
    view: {
      center: [location.longitude, location.latitude],
      zoom: 8,
    },
  });

  return <div style={{ height: '80vh' }} ref={ref}></div>;
}

export default AirSensorMap;
