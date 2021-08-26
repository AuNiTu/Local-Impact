import React from 'react';
import Video from '../video/Video';
import { useHistory } from 'react-router-dom';
import { useAddress, useGeoLocation } from '../../state/Provider';
import styles from '../constants/styles.css';

const Home = () => {
  const { location, setLocation } = useGeoLocation();
  const { address, setAddress } = useAddress();
  const history = useHistory();


  const handleChange = ({ target }) => {
    setAddress(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/map');
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
      <main className={styles.Home}>
        <Video />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="where you at? 🌐"
            value={address}
            onChange={handleChange}
          ></input>
          <button>Go to Map</button>
        </form>
      </main>

      <main className={styles.GetButton}>
        <button onClick={handleSubmitGeoLocation}>📍 Get My Location</button>
      </main>

      <main className={styles.MissionStatement}>
        <div>
          <p>
            Local Change is a web app to see what&apos;s going on in your part of
            the world. We utilize arcgis (put link for arc gis) to show you
            different factors that could be affecting your environment and how you
            are different from the rest of the world. blah blah blah.
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
