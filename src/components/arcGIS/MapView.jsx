/* eslint-disable max-len */
import React from 'react';
import { useMap } from 'esri-loader-hooks';
import { useGeoLocation } from '../../state/Provider';

function MapView() {
  const { location } = useGeoLocation();

  const map = {
    basemap: 'streets',
  };

  const options = {
    view: {
      center: [location.longitude, location.latitude],
      zoom: 8,
    },
  };

  const [ref] = useMap(map, options);
  return <div style={{ height: 400 }} ref={ref} />;
}

export default MapView;
