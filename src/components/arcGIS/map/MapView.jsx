/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';

import FireMap from './Fire';
import AirBlotchMap from './AirBlotch';
import AirSensorMap from './AirSensor';
import DeforestationMap from './Deforestation';
import AltFuelMap from './AltFuel';
import { webMaps } from './webmaps';

import { useValue, useGeoLocation, useAddress } from '../../../state/Provider';
import {
  useUpdate,
  useSession,
  useDbLocation,
} from '../../../state/SessionProvider';

function MapView() {
  const { value, setValue } = useValue();
  const { location, setLocation } = useGeoLocation();
  const { setAddress } = useAddress();

  const { update } = useUpdate();
  const { session } = useSession();
  const { setDbLocation } = useDbLocation();

  const [searchLoc, setSearchLoc] = useState();
  const [Maps] = useState([
    <FireMap />,
    <AirBlotchMap />,
    <AirSensorMap />,
    <DeforestationMap />,
    <AltFuelMap />,
  ]);

  const handleSubmitGeoLocation = (e) => {
    e.preventDefault();

    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      setLocation({ longitude, latitude });
    });
  };

  const handleChange = ({ target }) => {
    setSearchLoc(target.value);
  };

  const handleAddressChange = (e) => {
    e.preventDefault();
    setAddress(searchLoc);
    setSearchLoc('');
  };

  const handlePut = () => {
    update(session.username, location.longitude, location.latitude);
  };

  useEffect(() => {
    console.log('use effect triggered');
    setDbLocation(location);
    setValue(value);
  }, [location]);

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
