import React, { useState } from 'react';
import { useGeoLocation, useAddress, useSwitch } from '../../state/Provider';

function LocationChange() {
  const { setLocation } = useGeoLocation();
  const { setAddress } = useAddress();
  const { setLocationSwitch } = useSwitch();
  const [searchLoc, setSearchLoc] = useState();

  const handleSubmitGeoLocation = (e) => {
    e.preventDefault();

    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      setLocation({ longitude, latitude });
      setLocationSwitch(true);
    });
  };

  const handleChange = ({ target }) => {
    setSearchLoc(target.value);
  };

  const handleAddressChange = (e) => {
    e.preventDefault();
    setAddress(searchLoc);
    setLocationSwitch(true);
  };

  const handlePut = () => {
    // put location in db for user
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
