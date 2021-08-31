import React from 'react';
import { useGeoLocation, useAddress } from '../../state/Provider';

function LocationChange() {
  const { location, setLocation } = useGeoLocation();
  const { address, setAddress } = useAddress();

  const handleSubmitGeoLocation = (e) => {
    e.preventDefault();

    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      setLocation({ longitude, latitude });
    });
  };

  const handleAddressChange = (e) => {
    e.preventDefault();
    setAddress(e.target.value);
  };

  const handlePut = () => {
    // put location in db for user
  };

  return (
    <>
      <form onSubmit={handleAddressChange}>
        <input />
        <button>Find</button>
      </form>
      <button onClick={handleSubmitGeoLocation}>Get My Location</button>
      <button onClick={handlePut}>Commit Location to My Account</button>
    </>
  );
}

export default LocationChange;
