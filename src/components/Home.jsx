import React from 'react';
import { locationInfo } from '../state/Provider';
import Video from './video/Video';

const Home = () => {

  const { location, setLocation } = locationInfo();

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

      console.log(latitude, longitude);

    });

    
  };


  return (
    <>
      <Video />
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="enter your zip code" value={location} onChange={handleChange}></input>
      </form>

      <form onSubmit={handleSubmitGeoLocation}>
        <button>Get My Location</button>
      </form>

      <p>
        Local Change is a web app to see what&apos;s going on in your part of the world. We utilize arcgis (put link for arc gis) 
        to show you different factors that could be affecting your environment and how you are different from the rest of the world.
        blah blah blah.
      </p>
    </>
  );
};

export default Home;
