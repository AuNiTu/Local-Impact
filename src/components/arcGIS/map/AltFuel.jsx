import React from 'react';
import { useWebMap } from 'esri-loader-hooks';
import { useGeoLocation, useSwitch } from '../../../state/Provider';

function AltFuelMap(locationFromDb) {
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

  const [ref] = useWebMap('511dfe0a721c40f598cb2195c2a02527', {
    view: {
      center: [longitude, latitude],
      zoom: 10,
    },
  });

  return <div style={{ height: '60vh' }} ref={ref}></div>;
}

export default AltFuelMap;
