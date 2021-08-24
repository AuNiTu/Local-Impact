/* eslint-disable max-len */
import React from 'react';
import { useWebMap } from 'esri-loader-hooks';
 
function Map() {
  const [ref] = useWebMap('e691172598f04ea8881cd2a4adaa45ba');

  return <div style={{ height: 400 }} ref={ref} />;
}

export default Map;


