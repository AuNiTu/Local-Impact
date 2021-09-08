import React, { useState } from 'react';
import { useSignup, useLogin, useLoading } from '../../state/SessionProvider';
import { useAddress, useGeoLocation } from '../../state/Provider';
import styles from './Login.css';

export default function OneLogin() {
  const [username, setUsername] = useState('👤 username');
  const [password, setPassword] = useState('password');
  const [isSignUp, setSignUp] = useState(false);

  const { location, setLocation } = useGeoLocation();
  const { address, setAddress } = useAddress();
  const { loading } = useLoading();

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
    console.log(username, password, location[0], location[1]);
    signup(username, password, location[0], location[1]);
    setUsername('');
    setPassword('');
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    login(username, password);
    setUsername('');
    setPassword('');
  };

  const handleSubmitGeoLocation = (e) => {
    e.preventDefault();

    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      setLocation({ longitude, latitude });
    });
  };

  const handleSwitch = () => {
    setSignUp(!isSignUp);
  };

  const clear = (e) => {
    e.target.value = '';
  };

  if (loading) return <h2>Contacting Database Gnomes</h2>;

  return (
    <>
      <section className={styles.signUp} onClick={handleSwitch}>
        {isSignUp
          ? 'Already Signed up? Login'
          : 'Not Signed Up? Create Account'}
      </section>

      <section className={styles.Login}>
        <form onSubmit={isSignUp ? handleSubmitSignUp : handleSubmitLogin}>
          <section className={styles.inputStyles}>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              onFocus={(e) => clear(e)}
              required
            />

            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              onFocus={(e) => clear(e)}
              required
            />

            {isSignUp ? (
              <section>
                <input
                  type="text"
                  placeholder="enter address or click get location 🌐"
                  value={address}
                  onChange={handleAddressChange}
                ></input>
              </section>
            ) : (
              <section></section>
            )}
          </section>
          {isSignUp ? (
            <section>
              <button disabled={!location[0] || !username || !password}>
                🔑 Signup
              </button>
              <button onClick={handleSubmitGeoLocation}>🌐</button>
            </section>
          ) : (
            <button
              disabled={
                !username ||
                !password ||
                username === 'username' ||
                password === 'password'
              }
            >
              🔑 Login
            </button>
          )}
        </form>
      </section>
    </>
  );
}
