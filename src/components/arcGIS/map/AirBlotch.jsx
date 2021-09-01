import React from 'react';
import { useWebMap } from 'esri-loader-hooks';
import { useGeoLocation } from '../../../state/Provider';
import { useDbLocation } from '../../../state/SessionProvider';

function AirBlotchMap() {
  const { location } = useGeoLocation();
  const { dbLocation } = useDbLocation();

  let longitude;
  let latitude;

  {
    dbLocation.latitude
      ? ((longitude = dbLocation.longitude), (latitude = dbLocation.latitude))
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
