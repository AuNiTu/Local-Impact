import React, { useState } from 'react';
import { useSignup, useLogin } from '../../state/SessionProvider';
import styles from './Login.css';

export default function OneLogin() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setSignUp] = useState(false);

  const signup = useSignup();
  const login = useLogin();

  const handleChange = ({ target }) => {
    if (target.name === 'username') setUsername(target.value);
    if (target.name === 'password') setPassword(target.value);
  };

  const handleSubmitSignUp = async (event) => {
    event.preventDefault();
    signup(username, password);
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    login(username, password);
  };

  const handleSwitch = () => {
    setSignUp(!isSignUp);
  };

  return (
    <>
      <button onClick={handleSwitch}>{isSignUp ? 'Already Signed up? Login' : 'Not Signed Up? Create Account'}</button>

      <section className={styles.Login}>
        <form onSubmit={isSignUp ? handleSubmitSignUp : handleSubmitLogin}>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={username}
            onChange={handleChange}
          ></input>
          <input
            type="text"
            name="password"
            placeholder="password"
            value={password}
            onChange={handleChange}
          ></input>
          {isSignUp ? <button>🔑 Signup</button> : <button>Login</button>}
        </form>
      </section>
    </>
  );
}
