import React from 'react';
import { useWebMap } from 'esri-loader-hooks';
import { useGeoLocation } from '../../../state/Provider';

function AirBlotchMap(locationFromDb) {
  const { location } = useGeoLocation();

  let longitude;
  let latitude;

  {
    locationFromDb.latitude
      ? ((longitude = locationFromDb.longitude),
        (latitude = locationFromDb.latitude))
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
