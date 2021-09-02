import React from 'react';

import Map from '../arcGis/MapView';

import Links from '../lower/HelpfulLinks';
import Advice from '../lower/WhatCanIdo';
import News from '../lower/News';

import styles from './Content.css';

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