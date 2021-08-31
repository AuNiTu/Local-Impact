/* eslint-disable react/prop-types */
import React, { useState, createContext, useContext, useEffect } from 'react';
import { fetchAddress } from '../components/arcGIS/services/fetchLocation';
import { useDbLocation } from './SessionProvider';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // state here
  const { dbLocation } = useDbLocation();

  const [address, setAddress] = useState();
  const [location, setLocation] = useState({});
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);

  // useEffect to trigger fetch here

  useEffect(() => {
    fetchAddress(address)
      .then((res) => setLocation({ longitude: res.x, latitude: res.y }))
      .finally(() => setLoading(false));
  }, [address]);

  // useEffect(() => {
  //   console.log(dbLocation);
  //   setLocation({
  //     longitude: dbLocation.longitude,
  //     latitude: dbLocation.latitude,
  //   });
  // }, [dbLocation]);

  return (
    <UserContext.Provider
      value={{
        location,
        setLocation,
        address,
        setAddress,
        value,
        setValue,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// custom hooks here
export const useGeoLocation = () => {
  const { location, setLocation } = useContext(UserContext);
  return { location, setLocation };
};

export const useAddress = () => {
  const { address, setAddress } = useContext(UserContext);
  return { address, setAddress };
};

export const useValue = () => {
  const { value, setValue } = useContext(UserContext);
  return { value, setValue };
};
