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
    setLoading((loading) => {
      console.log(loading); 
      return loading;
    });   

    try {
      const user = await postSignup(username, password, longitude, latitude);
      setSession(user);
      history.push('/map');
    }

    catch(err) {
      console.log(err);
    }

    finally {
      setLoading(false);
      setLoading((loading) => {
        console.log(loading); 
        return loading;
      });   
    }
  };

  const update = async (username, longitude, latitude) => {
    await putLocation(username, longitude, latitude);
  };

  const login = async (username, password) => {
    setLoading(true);
    setLoading((loading) => {
      console.log(loading);    
      return loading;
    });    
    
    try {
      setSession(await postLogin(username, password));
      const interLocation = await fetchUserLocation(username);
      setLoading(false);
      setDbLocation(interLocation);
      history.push('/map');
    }

    catch(err) {
      console.log(err);
    }

    finally {
      setLoading(false);
      setLoading((loading) => {
        console.log(loading); 
        return loading;
      });   
    }
  };

  const logout = async () => {

    setLoading(true);
    setLoading((loading) => {
      console.log(loading); 
      return loading;
    });   

    try {
      await getLogout();
      setSession(null);
      setDbLocation({});
      history.push('/');
    }

    catch(err) {
      console.log(err);
    }

    finally {
      setLoading(false);
      setLoading((loading) => {
        console.log(loading); 
        return loading;
      });   
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

export const useUpdate = () => {
  const { update } = useContext(SessionContext);
  return update;
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
