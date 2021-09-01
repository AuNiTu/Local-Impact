import React from 'react';
import { useWebMap } from 'esri-loader-hooks';
import { useGeoLocation, useSwitch } from '../../../state/Provider';

function DeforestationMap(locationFromDb) {
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

  const [ref] = useWebMap('2020fcd1d4bf4c68ab99545304695f9c', {
    view: {
      center: [longitude, latitude],
      zoom: 8,
    },
  });

  return <div style={{ height: '60vh' }} ref={ref}></div>;
}

export default DeforestationMap;
