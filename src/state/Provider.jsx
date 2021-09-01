/* eslint-disable react/prop-types */
import React, { useState, createContext, useContext, useEffect } from 'react';
import { fetchAddress } from '../services/fetchLocation';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // state here

  const [address, setAddress] = useState();
  const [location, setLocation] = useState({});
  const [value, setValue] = useState(0);
  const [locationSwitch, setLocationSwitch] = useState(false);
  const [loading, setLoading] = useState(true);

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
        value,
        setValue,
        locationSwitch,
        setLocationSwitch,
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

// export const useSwitch = () => {
//   const { locationSwitch, setLocationSwitch } = useContext(UserContext);
//   return { locationSwitch, setLocationSwitch };
// };
