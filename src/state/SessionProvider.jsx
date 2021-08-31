/* eslint-disable react/prop-types */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import {
  postLogin,
  postSignup,
  getLogout,
  fetchUserLocation,
} from '../services/auth';

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const history = useHistory();

  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);
  const [buttonClick, setButtonClick] = useState(false);

  const [dbLocation, setDbLocation] = useState({});

  useEffect(() => {
    if (buttonClick === true) setLoading(!loading);
    setButtonClick(false);
  }, [buttonClick]);

  const signup = async (username, password, longitude, latitude) => {
    setButtonClick(true);
    if (loading) return <h2> Loading... </h2>;
    const user = await postSignup(username, password, longitude, latitude);
    setSession(user);
    history.push('/map');
  };

  const login = async (username, password) => {
    setButtonClick(true);
    if (loading) return <h2> Loading... </h2>;
    setSession(await postLogin(username, password));
    const interLocation = await fetchUserLocation(username);
    setDbLocation(interLocation);
    history.push('/map');
  };

  const logout = async () => {
    setButtonClick(true);
    if (loading) return <h2> Loading... </h2>;
    await getLogout();
    setSession(null);
    setDbLocation({});
    history.push('/');
  };

  return (
    <SessionContext.Provider
      value={{
        session,
        loading,
        setLoading,
        signup,
        login,
        logout,
        buttonClick,
        dbLocation,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

// export const PrivateRoute = (props) => {
//   const session = useSession();
//   const loading = useAuthLoading();

//   if (loading) return <h1> Loading ...</h1>;
//   if (!session && !loading) return <Redirect to="/" />;

//   return <Route {...props} />;
// };

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

export const useLoading = () => {
  const { loading, setLoading } = useContext(SessionContext);
  return { loading, setLoading };
};

export const useDbLocation = () => {
  const { dbLocation } = useContext(SessionContext);
  return dbLocation;
};
