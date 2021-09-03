/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';

import FireMap from './map/Fire';
import AirBlotchMap from './map/AirBlotch';
import AirSensorMap from './map/AirSensor';
import PowerPlantsMap from './map/Power';
import AltFuelMap from './map/AltFuel';
import FetchingMap from './map/NewLoc';
import { webMaps } from './map/webmaps';
import styles from '../content/Content.css';

import { useValue, useGeoLocation, useAddress } from '../../state/Provider';
import {
  useUpdate,
  useSession,
  useDbLocation,
} from '../../state/SessionProvider';

function MapView() {
  const { value, setValue } = useValue();
  const { location } = useGeoLocation();
  const { setAddress } = useAddress();

  const { update } = useUpdate();
  const { session } = useSession();

  const { dbLocation, setDbLocation } = useDbLocation();

  const [changeLocation, setChangeLocation] = useState(false);
  const [searchLoc, setSearchLoc] = useState();
  const [Maps] = useState([
    <FireMap />,
    <AirBlotchMap />,
    <AirSensorMap />,
    <PowerPlantsMap />,
    <AltFuelMap />,
  ]);

  const mapLoader = <FetchingMap />;

  const handleSubmitGeoLocation = (e) => {
    e.preventDefault();
    setChangeLocation(true);

    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      setDbLocation({ longitude, latitude });
    });
  };

  const handleChange = ({ target }) => {
    setSearchLoc(target.value);
  };

  const handleAddressChange = (e) => {
    e.preventDefault();
    setAddress(searchLoc);
    setChangeLocation(true);
    setSearchLoc('');
  };

  const handlePut = () => {
    update(session.username, dbLocation.longitude, dbLocation.latitude);
  };

  useEffect(() => {
    if (location.longitude) setDbLocation(location);
  }, [location]);

  useEffect(() => {
    setChangeLocation(false);
  }, [dbLocation]);

  return (
    <>
      <section className={styles.MapViewContainer}>
        <div className={styles.Location}>
          <form onSubmit={handleAddressChange}>
            <input
              type="text"
              placeholder="enter address or click get location 🌐"
              value={searchLoc}
              onChange={handleChange}
            />
            <button>Find</button>
          </form>
          <button onClick={handleSubmitGeoLocation}>Get My Location</button>
          <button onClick={handlePut}>Commit Location to My Account</button>
        </div>
      </section>
      {changeLocation ? mapLoader : Maps[value]}

      <section className={styles.mapSelectContainer}>
        <select
          className={styles.mapSelect}
          onChange={(e) => setValue(e.currentTarget.value)}
        >
          {webMaps.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </section>
    </>
  );
}

export default MapView;
