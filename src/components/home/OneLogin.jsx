import React, { useState } from 'react';
import { useSignup, useLogin, useLoading } from '../../state/SessionProvider';
import { useAddress, useGeoLocation } from '../../state/Provider';
import styles from './Login.css';

export default function OneLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setSignUp] = useState(false);
  const { location, setLocation } = useGeoLocation();
  const { address, setAddress } = useAddress();


  const signup = useSignup();
  const login = useLogin();
  const { loading, setLoading } = useLoading();

  // console.log(loading);

  if (loading) return <h2>Loading</h2>;
  let useGeo = false;

  const handleChange = ({ target }) => {
    if (target.name === 'username') setUsername(target.value);
    if (target.name === 'password') setPassword(target.value);

  };

  const handleAddressChange = ({ target }) => {
    setAddress(target.value);
  };

  const handleSubmitSignUp = (event) => {
    event.preventDefault();
    setLoading(true);
    console.log("loading", loading);
    signup(username, password, location.longitude, location.latitude);
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    login(username, password);
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
      useGeo = true;

      // need a loading spinner
    });
  };

  const handleSwitch = () => {
    setSignUp(!isSignUp);
    console.log("sign up", isSignUp);
  };

  return (
    <>
      <button onClick={handleSwitch}>
        {isSignUp
          ? 'Already Signed up? Login'
          : 'Not Signed Up? Create Account'}
      </button>

      <section className={styles.Login}>
        <form onSubmit={handleSubmitSignUp}>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={username}
            onChange={handleChange}
            required
          ></input>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={handleChange}
            required
          ></input>
          {isSignUp ?
            <section>
              {useGeo === false ? <input
                type="text"
                placeholder="enter address or click get location 🌐"
                value={address}
                onChange={handleAddressChange}
              ></input>
                : <section></section>}
              <button onClick={handleSubmitGeoLocation}>📍 Get Location</button>
            </section> : <section></section>}
          {isSignUp ? <button disabled={!location.longitude || !username || !password}>🔑 Signup</button> : <button disabled={!username || !password}>🔑 Login</button>}
        </form>
      </section>
    </>
  );
}

