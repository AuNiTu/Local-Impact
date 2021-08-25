import React from 'react';
import Video from '../video/Video';
import { Link, useHistory } from 'react-router-dom';
import { useAddress, useGeoLocation } from '../../state/Provider';
import { fetchAddress } from '../arcGIS/services/fetchLocation';

const Home = () => {
  const { location, setLocation } = useGeoLocation();
  const { address, setAddress } = useAddress();
  const history = useHistory();

  const handleChange = ({ target }) => {
    setAddress(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchAddress(e.value)
      .then((res) => setLocation({ longitude: res.x, latitude: res.y }))
      .then(console.log(address))
      .then(history.push('/map'));
  };


  const handleSubmitGeoLocation = (e) => {
    e.preventDefault();

    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      // const altitude = position.coords.altitude;
      // const accuracy = position.coords.accuracy;
      // const altitudeAccuracy = position.coords.altitudeAccuracy;
      // const heading = position.coords.height;
      // const speed = position.coords.speed;
      // const timestamp = position.timestamp;

      setLocation({ longitude, latitude });
      history.push('/map');
      // need a loading spinner
    });
  };

  return (
    <>
      <Video />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="where you at?"
          value={address}
          onChange={handleChange}
        ></input>
        <button>Go to Map</button>
      </form>

      <button onClick={handleSubmitGeoLocation}>Get My Location</button>

      <p>
        Local Change is a web app to see what&apos;s going on in your part of
        the world. We utilize arcgis (put link for arc gis) to show you
        different factors that could be affecting your environment and how you
        are different from the rest of the world. blah blah blah.
      </p>
    </>
  );
};

export default Home;
