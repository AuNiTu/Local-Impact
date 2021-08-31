import React from 'react';
import { useWebMap } from 'esri-loader-hooks';
import { useGeoLocation, useSwitch } from '../../../state/Provider';

function FireMap(locationFromDb) {
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

  const [ref] = useWebMap('89ff30d783b849c8b22fc812d4c2f205', {
    view: {
      center: [longitude, latitude],
      zoom: 8,
    },
  });

  return <div style={{ height: '60vh' }} ref={ref}></div>;
}

export default FireMap;
