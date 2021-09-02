import React from 'react';

import Map from './map/MapView';

import Links from '../lower/HelpfulLinks';
import Advice from '../lower/WhatCanIdo';
import News from './News';

import styles from './MapView.css';

function MapView() {
  return (
    <>
      <Map />
      <div className={styles.help}>
        <Links />
        <Advice />
        <News />
      </div>
    </>
  );
}

export default MapView;
