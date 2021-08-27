/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from 'react';
import { useHistory, Route, Redirect } from 'react-router';
import { postLogin, postSignup } from '../services/auth';

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const history = useHistory();

  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);


  const signup = async (username, password) => {
    const user = await postSignup(username, password);
    setSession(user);
    history.push('/map');
  };

  const login = async (username, password) => {
    setSession(await postLogin(username, password));
    history.push('/map');
  };

  return (
    <SessionContext.Provider value={{ session, loading, signup, login }}>
      {children}
    </SessionContext.Provider>

  );
};

export const PrivateRoute = (props) => {
  const session = useSession();
  const loading = useAuthLoading();

  if (loading) return <h1> Loading ...</h1>;
  if (!session && !loading) return <Redirect to="/" />;

  return <Route {...props} />;
};

export const useSession = () => {
  const { session } = useContext(SessionContext);
  return session;
};

export const useAuthLoading = () => {
  const { loading } = useContext(SessionContext);
  return loading;
};

export const useSignup = () => {
  const { signup } = useContext(SessionContext);
  return signup;
};

export const useLogin = () => {
  const { login } = useContext(SessionContext);
  return login;
};


