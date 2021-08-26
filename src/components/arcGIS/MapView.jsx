/* eslint-disable max-len */
import React from 'react';
import { useMap, useWebMap, useScene, useWebScene } from 'esri-loader-hooks';
import { useGeoLocation } from '../../state/Provider';
import BaseMap from './maps/BaseMap';

function MapView() {
  const { location } = useGeoLocation();

  const webMaps = [
    '89ff30d783b849c8b22fc812d4c2f205', // currentWildFire
    '92e772c4f65a4848a29bcc24c8f61bab', // airQualityNA
    '730f553d21ea49e5a6cf38fe6cc63dc4', // airQualitySensors
    '2020fcd1d4bf4c68ab99545304695f9c', // deforestation
    '511dfe0a721c40f598cb2195c2a02527', // altFuelLocation
  ];

  const buttons = [
    'Current Wildfires',
    'Air Quality (blotches)',
    'Air Quality (sensors)',
    'Deforestation',
    'Alternative Fuel Stations',
  ];

  let selectedMap;

  const handleClick = (i) => {
    console.log('Clicked');
    selectedMap = webMaps[i];
    console.log(selectedMap);
  };

  const options = {
    view: {
      center: [location.longitude, location.latitude],
      zoom: 8,
    },
  };

  // const [ref] = useMap(map, options);
  const [ref] = useWebMap('89ff30d783b849c8b22fc812d4c2f205', options);
  return (
    <>
      <div style={{ height: 400 }} ref={ref} />
      <div>
        {buttons.map((map, i) => (
          <button key={map} value={map} onClick={() => handleClick(i)}>
            {map}
          </button>
        ))}
      </div>
    </>
  );
}

export default MapView;
