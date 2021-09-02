/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router';
import {
  postLogin,
  postSignup,
  getLogout,
  putLocation,
  fetchUserLocation,
} from '../services/auth';

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const history = useHistory();

  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);

  const [dbLocation, setDbLocation] = useState({});

  const signup = async (username, password, longitude, latitude) => {
    setLoading(true);

    try {
      const user = await postSignup(username, password, longitude, latitude);
      setSession(user);
      history.push('/map');
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const update = async (username, longitude, latitude) => {
    await putLocation(username, longitude, latitude);
  };

  const login = async (username, password) => {
    setLoading(true);

    try {
      setSession(await postLogin(username, password));
      const interLocation = await fetchUserLocation(username);
      setLoading(false);
      setDbLocation(interLocation);
      history.push('/map');
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);

    try {
      await getLogout();
      window.location.replace('http://localhost:7891/');
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SessionContext.Provider
      value={{
        session,
        loading,
        setLoading,
        signup,
        login,
        update,
        logout,
        dbLocation,
        setDbLocation,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const { session } = useContext(SessionContext);
  return { session };
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

export const useUpdate = () => {
  const { update } = useContext(SessionContext);
  return { update };
};

export const useLogout = () => {
  const { logout } = useContext(SessionContext);
  return logout;
};

export const useLoading = () => {
  const { loading, setLoading } = useContext(SessionContext);
  return { loading, setLoading };
};

export const useDbLocation = () => {
  const { dbLocation, setDbLocation } = useContext(SessionContext);
  return { dbLocation, setDbLocation };
};
