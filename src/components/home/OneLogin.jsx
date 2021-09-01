import React, { useState } from 'react';
import { useSignup, useLogin } from '../../state/SessionProvider';
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

  const handleChange = ({ target }) => {
    if (target.name === 'username') setUsername(target.value);
    if (target.name === 'password') setPassword(target.value);
  };

  const handleAddressChange = ({ target }) => {
    setAddress(target.value);
  };

  const handleSubmitSignUp = async (event) => {
    event.preventDefault();
    signup(username, password, location.longitude, location.latitude);
  };

  const handleSubmitLogin = async (e) => {
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

    });
  };

  const handleSwitch = () => {
    setSignUp(!isSignUp);
  };

  console.log(location);

  return (
    <>
      <button onClick={handleSwitch}>
        {isSignUp
          ? 'Already Signed up? Login'
          : 'Not Signed Up? Create Account'}
      </button>

      <section className={styles.Login}>
        <form onSubmit={isSignUp ? handleSubmitSignUp : handleSubmitLogin}>
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
              <input
                type="text"
                placeholder="enter address or click get location 🌐"
                value={address}
                onChange={handleAddressChange}
              ></input>
              <button onClick={handleSubmitGeoLocation}>📍 Get Location</button>
            </section> : <section></section>}
          {isSignUp ? <button disabled={!location.longitude || !username || !password}>🔑 Signup</button> : <button disabled={!username || !password}>🔑 Login</button>}
        </form>
      </section>
    </>
  );
}
