/* eslint-disable react/jsx-key */
/* eslint-disable max-len */
import React, { useState } from 'react';

import FireMap from './map/Fire';
import AirBlotchMap from './map/AirBlotch';
import AirSensorMap from './map/AirSensor';
import DeforestationMap from './map/Deforestation';
import AltFuelMap from './map/AltFuel';

import { webMaps } from './map/webmaps';
import { useDbLocation } from '../../state/SessionProvider';
import { useValue } from '../../state/Provider';

import Location from './MapLocationChange';
import Links from '../lower/HelpfulLinks';
import Advice from '../lower/WhatCanIdo';

import styles from './MapView.css';

function MapView() {
  const { value, setValue } = useValue();

  const { dbLocation } = useDbLocation();

  console.log(dbLocation);

  const [Maps] = useState([
    <FireMap />,
    <AirBlotchMap />,
    <AirSensorMap />,
    <DeforestationMap />,
    <AltFuelMap />,
  ]);

  return (
    <>
      <Location />
      {Maps[value]}
      <select onChange={(e) => setValue(e.currentTarget.value)}>
        {webMaps.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
      <div className={styles.help}>
        <Links />
        <Advice />
      </div>
    </>
  );
}

export default MapView;
