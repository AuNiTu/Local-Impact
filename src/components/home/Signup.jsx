import React, { useState } from 'react';
import { useSignup } from '../../state/SessionProvider';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signup = useSignup();

  const handleChange = ({ target }) => {
    if (target.name === 'username') setUsername(target.value);
    if (target.name === 'password') setPassword(target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    signup(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Email</label>
      <input
        id="username"
        type="username"
        name="username"
        value={username}
        onChange={handleChange}
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />

      <button>Signup</button>
    </form>
  );
}
