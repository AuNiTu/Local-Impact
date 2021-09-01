import React from 'react';
import { useWebMap } from 'esri-loader-hooks';
import { useGeoLocation } from '../../../state/Provider';
import { useDbLocation } from '../../../state/SessionProvider';

function AltFuelMap() {
  const { location } = useGeoLocation();
  const { dbLocation } = useDbLocation();

  let longitude;
  let latitude;

  {
    dbLocation.latitude
      ? ((longitude = dbLocation.longitude), (latitude = dbLocation.latitude))
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
