import React from 'react';
import { useWebMap } from 'esri-loader-hooks';
import { useGeoLocation, useSwitch } from '../../../state/Provider';

function AirSensorMap(locationFromDb) {
  const { location } = useGeoLocation();
  const { locationSwitch } = useSwitch();

  let longitude;
  let latitude;

  {
    locationFromDb.locationFromDb.latitude && !locationSwitch
      ? ((longitude = locationFromDb.locationFromDb.longitude),
        (latitude = locationFromDb.locationFromDb.latitude))
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
