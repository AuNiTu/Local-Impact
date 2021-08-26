/* eslint-disable max-len */
import React from 'react';
import { useMap } from 'esri-loader-hooks';
import { useGeoLocation } from '../../state/Provider';
import MapViewVideo from '../video/MapViewVideo';

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
  return (
    <>
      <MapViewVideo />
      <div style={{ height: 400 }} ref={ref} />;
    </>
  );
  
}

export default MapView;
