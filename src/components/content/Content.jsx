import React from 'react';

import Map from '../arcGIS/MapView';

import Links from '../lower/HelpfulLinks';
import Advice from '../lower/WhatCanIdo';
import News from '../lower/News';

import styles from './Content.css';

function Content() {
  return (
    <>
      <Map />
      <div className={styles.help}>
        <div className={styles.containment}>
          <Links />
          <Advice />
        </div>
      </div>
      <section className={styles.help}>
        <News />
      </section>
    </>
  );
}

export default Content;
