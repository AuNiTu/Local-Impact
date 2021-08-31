/* eslint-disable react/prop-types */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useHistory, Route, Redirect } from 'react-router';
import { useLocation } from 'react-router-dom';
import { postLogin, postSignup, getLogout, fetchUserLocation } from '../services/auth';

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const history = useHistory();

  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dbLocation, setDbLocation] = useState({});
  const [buttonClick, setButtonClick] = useState(false);

  useEffect (() => {
    console.log("button click", buttonClick);
    if (buttonClick === true) setLoading(!loading);
  }, [buttonClick]);

  // insert placeholder inside square bracket

  const signup = async (username, password, longitude, latitude) => {
    setButtonClick(!buttonClick);
    if (loading) return <h2> Loading... </h2>;
    const user = await postSignup(username, password, longitude, latitude);
    setSession(user);
    await setLoading(false);
    history.push('/map');
    const [loading, setLoading] = useState(true);



  //   useEffect (async () => {
  //     await postSignup(username, password, longitude, latitude)
  //       .then((user) => setSession(user))
  //       .catch((err) => console.error(err))
  //       .finally(() => setLoading(false));
  //   }, [longitude]);
  //   history.push('/map');
  //   return { loading }; 
  };



  const login = async (username, password) => {
    setButtonClick(true);
    setSession(await postLogin(username, password));
    const interLocation = await fetchUserLocation(username);
    setDbLocation(interLocation);
    debugger;
    history.push('/map');
  };

  const logout = async () => {
    await getLogout();
    setSession(null);
    setDbLocation({});
    history.push('/');
  };

  return (
    <SessionContext.Provider value={{ session, loading, setLoading, signup, login, logout, dbLocation, buttonClick }}>
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

export const useLoading = () => {
  const { loading, setLoading } = useContext(SessionContext);
  return { loading, setLoading };
};

export const useButton = () => {
  const { buttonClick } = useContext(SessionContext);
  return buttonClick;
};

// export const setLoading = () => {
//   const { loading, } = useContext(SessionContext);
//   return loading;
// };
