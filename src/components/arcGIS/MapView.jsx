/* eslint-disable max-len */
import React from 'react';
import { useMap } from 'esri-loader-hooks';

function MapView() {
  const map = {
    basemap: 'streets',
  };
  const options = {
    view: {
      center: [15, 65],
      zoom: 4
    }
  };
  
  const [ref] = useMap(map, options);
  return <div style={{ height: 400 }} ref={ref} />;
}

export default MapView;
