import React from 'react';
import { useWebMap } from 'esri-loader-hooks';
import { useGeoLocation, useSwitch } from '../../../state/Provider';

function AirBlotchMap(locationFromDb) {
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

  const [ref] = useWebMap('92e772c4f65a4848a29bcc24c8f61bab', {
    view: {
      center: [longitude, latitude],
      zoom: 8,
    },
  });

  return <div style={{ height: '60vh' }} ref={ref}></div>;
}

export default AirBlotchMap;
