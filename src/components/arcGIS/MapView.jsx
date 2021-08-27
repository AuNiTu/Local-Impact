/* eslint-disable react/jsx-key */
/* eslint-disable max-len */

import React, { useState } from 'react';

import FireMap from './map/Fire';
import AirBlotchMap from './map/AirBlotch';
import AirSensorMap from './map/AirSensor';
import DeforestationMap from './map/Deforestation';
import AltFuelMap from './map/AltFuel';

function MapView() {
  const [Maps] = useState([
    <FireMap />,
    <AirBlotchMap />,
    <AirSensorMap />,
    <DeforestationMap />,
    <AltFuelMap />,
  ]);

  const [value, setValue] = useState(0);

  const webMaps = [
    {
      name: 'Active Wildfires',
      map: '89ff30d783b849c8b22fc812d4c2f205',
      id: 0,
    },
    {
      name: 'Air Quality (blotch)',
      map: '92e772c4f65a4848a29bcc24c8f61bab',
      id: 1,
    },
    {
      name: 'Air Quality (sensors)',
      map: '730f553d21ea49e5a6cf38fe6cc63dc4',
      id: 2,
    },
    {
      name: 'Deforestation',
      map: '2020fcd1d4bf4c68ab99545304695f9c',
      id: 3,
    }, // deforestation
    {
      name: 'Alternative Fuel Stations',
      map: '511dfe0a721c40f598cb2195c2a02527',
      id: 4,
    }, // altFuelLocation
  ];

  return (
    <>
      {Maps[value]}
      <select onChange={(e) => setValue(e.currentTarget.value)}>
        {webMaps.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
    </>
  );
}

export default MapView;
