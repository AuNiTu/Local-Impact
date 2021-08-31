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

  if (loading) return <h2>Loading</h2>;

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
    signup(username, password, location.longitude, location.latitude);
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    login(username, password);
  };

  const handleSubmitGeoLocation = (e) => {
    e.preventDefault();

    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      setLocation({ longitude, latitude });
      // need a loading spinner
    });
  };

  const handleSwitch = () => {
    setSignUp(!isSignUp);
  };

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
          {isSignUp ? (
            <section>
              <input
                type="text"
                placeholder="enter address or click get location 🌐"
                value={address}
                onChange={handleAddressChange}
              />
              <button onClick={handleSubmitGeoLocation}>📍 Get Location</button>
            </section>
          ) : (
            <section></section>
          )}
          {isSignUp ? (
            <button disabled={!location.longitude || !username || !password}>
              🔑 Signup
            </button>
          ) : (
            <button disabled={!username || !password}>🔑 Login</button>
          )}
        </form>
      </section>
    </>
  );
}
