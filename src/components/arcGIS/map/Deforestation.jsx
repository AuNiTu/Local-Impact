import React from 'react';
import { useWebMap } from 'esri-loader-hooks';
import { useGeoLocation } from '../../../state/Provider';

function DeforestationMap() {
  const { location } = useGeoLocation();
  const [ref] = useWebMap('2020fcd1d4bf4c68ab99545304695f9c', {
    view: {
      center: [location.longitude, location.latitude],
      zoom: 8,
    },
  });

  return <div style={{ height: '80vh' }} ref={ref}></div>;
}

export default DeforestationMap;
