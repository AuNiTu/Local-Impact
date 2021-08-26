import React, { useState } from 'react';
import { useLogin } from '../../state/SessionProvider';
import styles from './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = useLogin();

  const handleChange = ({ target }) => {
    if (target.name === 'username') setUsername(target.value);
    if (target.name === 'password') setPassword(target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <>
      <section className={styles.Login}>
        <form onSubmit={handleSubmit}>
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
          <button>🔑 Login</button>
        </form>
      </section>
    </>
  );
}

export default Login;
