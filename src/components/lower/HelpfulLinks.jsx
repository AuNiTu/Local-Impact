import React from 'react';
import links from './links';
import styles from '../arcGIS/MapView.css';

function Links() {
  const {
    polarBear,
    simpleThingsDavis,
    simpleThingsBBC,
    UNCarbon,
    wildfireCharity,
    climateCommunity,
    indoorAirSchools,
  } = links;

  return (
    <>
      <section className={styles.links}>
        <a href={polarBear} target="_blank" rel="noreferrer">
          Determining False Information
        </a>
        <a href={simpleThingsDavis} target="_blank" rel="noreferrer">
          Simple Things You Can Do About Climate Change - UC Davis
        </a>
        <a href={simpleThingsBBC} target="_blank" rel="noreferrer">
          Simple Things You Can Do about Climate Change - BBC
        </a>
        <a href={UNCarbon} target="_blank" rel="noreferrer">
          UN Carbon Offset Platform
        </a>
        <a href={wildfireCharity} target="_blank" rel="noreferrer">
          Contribute to Wildfire Relief
        </a>
        <a href={climateCommunity} target="_blank" rel="noreferrer">
          See What Your Community is Doing to Fight Climate Change
        </a>
        <a href={indoorAirSchools} target="_blank" rel="noreferrer">
          Improve Air Quality in Your Schools
        </a>
      </section>
    </>
  );
}

export default Links;
