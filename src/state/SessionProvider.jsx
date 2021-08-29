/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from 'react';
import { useHistory, Route, Redirect } from 'react-router';
import { postLogin, postSignup, getLogout, fetchUserLocation } from '../services/auth';

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const history = useHistory();

  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dbLocation, setDbLocation] = useState({});

  const signup = async (username, password, longitude, latitude) => {
    const user = await postSignup(username, password, longitude, latitude);
    // const interLocation = await fetchUserLocation(username);  //MUST SET dbLocation state AFTER(!!!!!!!!!) person is put in database 
    // setDbLocation(interLocation);  //omfg
    setSession(user);
    history.push('/map');
  };

  const login = async (username, password) => {
    setSession(await postLogin(username, password));
    const interLocation = await fetchUserLocation(username);
    setDbLocation(interLocation);
    history.push('/map');
  };

  const logout = async () => {
    await getLogout();
    setSession(null);
    history.push('/');
  };

  return (
    <SessionContext.Provider value={{ session, loading, signup, login, logout, dbLocation }}>
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

export const useLogout = () => {
  const { logout } = useContext(SessionContext);
  return logout;
};

export const useDbLocation = () => {
  const { dbLocation } = useContext(SessionContext);
  return dbLocation;
};
