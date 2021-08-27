/* eslint-disable max-len */
import React from 'react';
import { useWebMap } from 'esri-loader-hooks';
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
      zoom: 14,
    },
  };

  const [ref] = useWebMap('511dfe0a721c40f598cb2195c2a02527 ', options);
  return (
    <>
      <MapViewVideo />
      <div style={{ height: 1000 }} ref={ref} />;
    </>
  );
  
}

export default MapView;
