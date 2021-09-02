/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';

import FireMap from './Fire';
import AirBlotchMap from './AirBlotch';
import AirSensorMap from './AirSensor';
import PowerPlantsMap from './Power';
import AltFuelMap from './AltFuel';
import FetchingMap from './NewLoc';
import { webMaps } from './webmaps';

import { useValue, useGeoLocation, useAddress } from '../../../state/Provider';
import {
  useUpdate,
  useSession,
  useDbLocation,
} from '../../../state/SessionProvider';

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
    update(session.username, location.longitude, location.latitude);
  };

  useEffect(() => {
    if (location.longitude) setDbLocation(location);
  }, [location]);

  useEffect(() => {
    setChangeLocation(false);
  }, [dbLocation]);

  return (
    <>
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

      {changeLocation ? <FetchingMap /> : Maps[value]}

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
