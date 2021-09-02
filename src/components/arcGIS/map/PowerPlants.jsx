import React from 'react';
import { useWebMap } from 'esri-loader-hooks';
import { useGeoLocation } from '../../../state/Provider';
import { useDbLocation } from '../../../state/SessionProvider';

function PowerPlantsMap() {
  const { location } = useGeoLocation();
  const { dbLocation } = useDbLocation();

  let longitude;
  let latitude;

  {
    dbLocation.latitude
      ? ((longitude = dbLocation.longitude), (latitude = dbLocation.latitude))
      : ((longitude = location.longitude), (latitude = location.latitude));
  }

  const [ref] = useWebMap('f18b0ae4d06743bd87cbaea51e8109e9', {
    view: {
      center: [longitude, latitude],
      zoom: 10,
    },
  });

  return <div style={{ height: '60vh' }} ref={ref}></div>;
}

export default PowerPlantsMap;
