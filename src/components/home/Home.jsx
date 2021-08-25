import React from 'react';
<<<<<<< HEAD:src/components/Home.jsx
import { locationInfo } from '../state/Provider';
import Video from './video/Video';
=======
import { Link, useHistory } from 'react-router-dom';
import { useGeoLocation } from '../../state/Provider';
>>>>>>> 7d5330a6b3e2d2e95f9b3782c484c6b069fcc684:src/components/home/Home.jsx

const Home = () => {
  const { location, setLocation } = useGeoLocation();
  const history = useHistory();

  const handleChange = ({ target }) => {
    setLocation(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
          type="number"
          placeholder="enter your zip code"
          value={location}
          onChange={handleChange}
        ></input>
        <Link to="/map">
          <button>Go to Map</button>
        </Link>
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
