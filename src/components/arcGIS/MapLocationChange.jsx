import React, { useState } from 'react';
import { useGeoLocation, useAddress } from '../../state/Provider';
import {
  useUpdate,
  useSession,
  useDbLocation,
} from '../../state/SessionProvider';

function LocationChange() {
  const { location } = useGeoLocation();
  const { setDbLocation } = useDbLocation();
  const { setAddress } = useAddress();

  const update = useUpdate();
  const session = useSession();
  const [searchLoc, setSearchLoc] = useState();

  const handleSubmitGeoLocation = (e) => {
    e.preventDefault();

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
    setSearchLoc('');
    setDbLocation(location);
  };

  const handlePut = () => {
    update(session.username, location.longitude, location.latitude);
  };

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
    </>
  );
}

export default LocationChange;
