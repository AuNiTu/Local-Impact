import React from 'react';
import { useWebMap } from 'esri-loader-hooks';
import { useGeoLocation } from '../../../state/Provider';
import { useDbLocation } from '../../../state/SessionProvider';

function AirSensorMap() {
  const { location } = useGeoLocation();
  const { dbLocation } = useDbLocation();

  let longitude;
  let latitude;

  {
    dbLocation.latitude
      ? ((longitude = dbLocation.longitude), (latitude = dbLocation.latitude))
      : ((longitude = location.longitude), (latitude = location.latitude));
  }

  const [ref] = useWebMap('730f553d21ea49e5a6cf38fe6cc63dc4', {
    view: {
      center: [longitude, latitude],
      zoom: 8,
    },
  });

  return <div style={{ height: '60vh' }} ref={ref}></div>;
}

export default AirSensorMap;
