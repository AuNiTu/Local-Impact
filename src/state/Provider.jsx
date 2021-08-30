/* eslint-disable react/prop-types */
import React, { useState, createContext, useContext, useEffect } from 'react';
import { fetchAddress } from '../components/arcGIS/services/fetchLocation';

// import fetches here

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // state here
  const [location, setLocation] = useState({});
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState();
  const [map, setMap] = useState('89ff30d783b849c8b22fc812d4c2f205');
  const [value, setValue] = useState(0);

  // useEffect to trigger fetch here

  useEffect(() => {
    fetchAddress(address)
      .then((res) => setLocation({ longitude: res.x, latitude: res.y }))
      .finally(() => setLoading(false));
  }, [address]);

  return (
    <UserContext.Provider
      value={{
        location,
        setLocation,
        address,
        setAddress,
        map,
        setMap,
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

export const useMap = () => {
  const { map, setMap } = useContext(UserContext);
  return { map, setMap };
};

export const useValue = () => {
  const { value, setValue } = useContext(UserContext);
  return { value, setValue };
};
